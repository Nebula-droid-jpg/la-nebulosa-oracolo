using System;
using System.IO;
using System.Linq;
using System.Text;
using System.Drawing;
using System.Drawing.Imaging;
using System.Drawing.Drawing2D;
using System.Collections.Generic;
using System.Globalization;
using System.Threading;
using System.Threading.Tasks;

public static class NebulaProc
{
    static ImageCodecInfo JpegCodec()
    {
        foreach (var c in ImageCodecInfo.GetImageEncoders())
            if (c.MimeType == "image/jpeg") return c;
        return null;
    }

    static ushort U16(byte[] b, int o, bool le) { return le ? (ushort)(b[o] | (b[o + 1] << 8)) : (ushort)((b[o] << 8) | b[o + 1]); }
    static uint U32(byte[] b, int o, bool le) { return le ? (uint)(b[o] | (b[o + 1] << 8) | (b[o + 2] << 16) | (b[o + 3] << 24)) : (uint)((b[o] << 24) | (b[o + 1] << 16) | (b[o + 2] << 8) | b[o + 3]); }

    // Extracts the full-size JPEG stored in IFD0 of a Canon CR2 file.
    static byte[] Cr2Preview(string path, out int orientation, out string date)
    {
        orientation = 1; date = null;
        using (var fs = File.OpenRead(path))
        {
            var head = new byte[Math.Min(fs.Length, 65536)];
            fs.Read(head, 0, head.Length);
            bool le = head[0] == 'I';
            int ifd = (int)U32(head, 4, le);
            int n = U16(head, ifd, le);
            long off = 0, len = 0;
            for (int i = 0; i < n; i++)
            {
                int e = ifd + 2 + i * 12;
                int tag = U16(head, e, le);
                if (tag == 0x0111) off = U32(head, e + 8, le);
                else if (tag == 0x0117) len = U32(head, e + 8, le);
                else if (tag == 0x0112) orientation = U16(head, e + 8, le);
                else if (tag == 0x0132)
                {
                    int vo = (int)U32(head, e + 8, le);
                    if (vo + 19 < head.Length) date = Encoding.ASCII.GetString(head, vo, 19);
                }
            }
            if (off == 0 || len == 0) throw new Exception("no preview in CR2");
            var buf = new byte[len];
            fs.Seek(off, SeekOrigin.Begin);
            int read = 0;
            while (read < len) { int r = fs.Read(buf, read, (int)(len - read)); if (r <= 0) break; read += r; }
            return buf;
        }
    }

    static void Orient(Image img, int o)
    {
        switch (o)
        {
            case 2: img.RotateFlip(RotateFlipType.RotateNoneFlipX); break;
            case 3: img.RotateFlip(RotateFlipType.Rotate180FlipNone); break;
            case 4: img.RotateFlip(RotateFlipType.Rotate180FlipX); break;
            case 5: img.RotateFlip(RotateFlipType.Rotate90FlipX); break;
            case 6: img.RotateFlip(RotateFlipType.Rotate90FlipNone); break;
            case 7: img.RotateFlip(RotateFlipType.Rotate270FlipX); break;
            case 8: img.RotateFlip(RotateFlipType.Rotate270FlipNone); break;
        }
    }

    static Bitmap Resize(Image src, int maxSide)
    {
        double s = Math.Min(1.0, (double)maxSide / Math.Max(src.Width, src.Height));
        int w = Math.Max(1, (int)Math.Round(src.Width * s)), h = Math.Max(1, (int)Math.Round(src.Height * s));
        var bmp = new Bitmap(w, h, PixelFormat.Format24bppRgb);
        using (var g = Graphics.FromImage(bmp))
        {
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.PixelOffsetMode = PixelOffsetMode.HighQuality;
            g.CompositingQuality = CompositingQuality.HighQuality;
            g.Clear(Color.Black);
            using (var ia = new ImageAttributes())
            {
                ia.SetWrapMode(WrapMode.TileFlipXY);
                g.DrawImage(src, new Rectangle(0, 0, w, h), 0, 0, src.Width, src.Height, GraphicsUnit.Pixel, ia);
            }
        }
        return bmp;
    }

    static byte[] Jpeg(Image img, long q)
    {
        var ep = new EncoderParameters(1);
        ep.Param[0] = new EncoderParameter(System.Drawing.Imaging.Encoder.Quality, q);
        using (var ms = new MemoryStream()) { img.Save(ms, JpegCodec(), ep); return ms.ToArray(); }
    }

    static string Hex(int r, int g, int b) { return "#" + r.ToString("x2") + g.ToString("x2") + b.ToString("x2"); }

    static string Esc(string s) { return s.Replace("\\", "\\\\").Replace("\"", "\\\""); }

    static string ProcessOne(string root, string rel, string id, string midDir)
    {
        string path = Path.Combine(root, rel);
        string ext = Path.GetExtension(path).ToLowerInvariant();
        int orientation = 1; string date = null;
        Image img;
        if (ext == ".cr2")
        {
            var bytes = Cr2Preview(path, out orientation, out date);
            img = Image.FromStream(new MemoryStream(bytes), false, false);
        }
        else
        {
            img = Image.FromStream(new MemoryStream(File.ReadAllBytes(path)), false, false);
            foreach (var pi in img.PropertyItems)
            {
                if (pi.Id == 0x0112 && pi.Value.Length >= 2) orientation = BitConverter.ToUInt16(pi.Value, 0);
                else if (pi.Id == 0x9003 && pi.Value.Length >= 19) date = Encoding.ASCII.GetString(pi.Value, 0, 19);
                else if (pi.Id == 0x0132 && pi.Value.Length >= 19 && date == null) date = Encoding.ASCII.GetString(pi.Value, 0, 19);
            }
        }
        DateTime dt;
        if (date == null || !DateTime.TryParseExact(date, "yyyy:MM:dd HH:mm:ss", CultureInfo.InvariantCulture, DateTimeStyles.None, out dt))
            dt = File.GetLastWriteTime(path);

        string thumbB64; int tw, th, ow, oh; int[] grid = new int[48]; var pal = new List<string>();
        using (img)
        {
            Orient(img, orientation);
            ow = img.Width; oh = img.Height;
            using (var mid = Resize(img, 1400))
            {
                File.WriteAllBytes(Path.Combine(midDir, id + ".jpg"), Jpeg(mid, 80));
                using (var thumb = Resize(mid, 224))
                {
                    tw = thumb.Width; th = thumb.Height;
                    thumbB64 = Convert.ToBase64String(Jpeg(thumb, 80));
                }
                // 4x4 colour signature
                {
                    using (var sq = new Bitmap(4, 4, PixelFormat.Format24bppRgb))
                    {
                        using (var g = Graphics.FromImage(sq))
                        {
                            g.InterpolationMode = InterpolationMode.HighQualityBilinear;
                            g.DrawImage(mid, new Rectangle(0, 0, 4, 4));
                        }
                        for (int y = 0; y < 4; y++) for (int x = 0; x < 4; x++)
                        {
                            var c = sq.GetPixel(x, y); int k = (y * 4 + x) * 3;
                            grid[k] = c.R; grid[k + 1] = c.G; grid[k + 2] = c.B;
                        }
                    }
                }
                // dominant palette from a 48px sample, 3-bit-per-channel buckets
                using (var small = new Bitmap(48, 48, PixelFormat.Format24bppRgb))
                {
                    using (var g = Graphics.FromImage(small))
                    {
                        g.InterpolationMode = InterpolationMode.HighQualityBilinear;
                        g.DrawImage(mid, new Rectangle(0, 0, 48, 48));
                    }
                    var cnt = new int[512]; var sr = new long[512]; var sg = new long[512]; var sb = new long[512];
                    for (int y = 0; y < 48; y++) for (int x = 0; x < 48; x++)
                    {
                        var c = small.GetPixel(x, y);
                        int k = ((c.R >> 5) << 6) | ((c.G >> 5) << 3) | (c.B >> 5);
                        cnt[k]++; sr[k] += c.R; sg[k] += c.G; sb[k] += c.B;
                    }
                    // rank buckets by area, boosted by saturation so colourful accents beat large grey areas
                    Func<int, double> rank = k =>
                    {
                        double r = sr[k] / (double)cnt[k] / 255, gg = sg[k] / (double)cnt[k] / 255, b = sb[k] / (double)cnt[k] / 255;
                        double mx = Math.Max(r, Math.Max(gg, b)), mn = Math.Min(r, Math.Min(gg, b));
                        double sat = mx <= 0 ? 0 : (mx - mn) / mx;
                        return cnt[k] * (1 + 2.0 * sat);
                    };
                    var order = Enumerable.Range(0, 512).Where(k => cnt[k] > 0).OrderByDescending(rank).ToList();
                    var chosen = new List<int[]>();
                    foreach (var k in order)
                    {
                        int r = (int)(sr[k] / cnt[k]), gg = (int)(sg[k] / cnt[k]), b = (int)(sb[k] / cnt[k]);
                        bool far = true;
                        foreach (var ch in chosen)
                        {
                            int dr = ch[0] - r, dg = ch[1] - gg, db = ch[2] - b;
                            if (dr * dr + dg * dg + db * db < 40 * 40) { far = false; break; }
                        }
                        if (far) { chosen.Add(new[] { r, gg, b, cnt[k] }); pal.Add(Hex(r, gg, b)); }
                        if (chosen.Count == 5) break;
                    }
                }
            }
        }
        var sbj = new StringBuilder();
        sbj.Append("{\"id\":\"").Append(id).Append("\",\"f\":\"").Append(Esc(Path.GetDirectoryName(rel))).Append("\",\"n\":\"").Append(Esc(Path.GetFileName(rel)))
           .Append("\",\"d\":\"").Append(dt.ToString("yyyy-MM-ddTHH:mm:ss", CultureInfo.InvariantCulture))
           .Append("\",\"w\":").Append(ow).Append(",\"h\":").Append(oh)
           .Append(",\"g\":[").Append(string.Join(",", grid)).Append("],\"p\":[\"").Append(string.Join("\",\"", pal)).Append("\"]")
           .Append(",\"t\":\"data:image/jpeg;base64,").Append(thumbB64).Append("\"}");
        return sbj.ToString();
    }

    public static string RunAll(string root, string[] rels, string outDir, string logPath)
    {
        string midDir = Path.Combine(outDir, "medie");
        Directory.CreateDirectory(midDir);
        var results = new string[rels.Length];
        int done = 0, failed = 0;
        var errors = new System.Collections.Concurrent.ConcurrentBag<string>();
        Parallel.For(0, rels.Length, new ParallelOptions { MaxDegreeOfParallelism = Math.Max(2, Environment.ProcessorCount / 2) }, i =>
        {
            string id = "f" + (i + 1).ToString("D4");
            try { results[i] = ProcessOne(root, rels[i], id, midDir); }
            catch (Exception ex) { Interlocked.Increment(ref failed); errors.Add(rels[i] + " :: " + ex.Message); }
            int d = Interlocked.Increment(ref done);
            if (d % 20 == 0) { try { File.WriteAllText(logPath, d + "/" + rels.Length); } catch { } }
        });
        using (var w = new StreamWriter(Path.Combine(outDir, "dati.js"), false, new UTF8Encoding(false)))
        {
            w.Write("window.NEBULA_DATA=[\n");
            bool first = true;
            foreach (var r in results)
            {
                if (r == null) continue;
                if (!first) w.Write(",\n");
                w.Write(r); first = false;
            }
            w.Write("\n];\n");
        }
        File.WriteAllText(logPath, "FINITO " + done + " ok, " + failed + " errori\n" + string.Join("\n", errors));
        return "done " + done + " failed " + failed;
    }
}


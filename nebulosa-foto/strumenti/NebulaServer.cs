// Small local web server for the nebula.
// - serves the files of the nebula-foto folder
// - accepts photos from phones on the same Wi-Fi (POST /api/carica) and saves them in "caricate"
// - lists them (GET /api/caricate?dopo=N) and deletes them (DELETE /api/caricate/{id})
// - tells the page its address on the local network (GET /api/info), for the QR code
// Nothing leaves this computer.
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Web.Script.Serialization;

public class FotoCaricata
{
    public string id { get; set; }
    public string file { get; set; }
    public double quando { get; set; }
    public string nome { get; set; }
    public int seq { get; set; }
}

public static class NebulaServer
{
    static string root, upDir, indexPath;
    static int port;
    static readonly object gate = new object();
    static List<FotoCaricata> foto = new List<FotoCaricata>();
    static List<Dictionary<string, object>> eventi = new List<Dictionary<string, object>>();
    static int eventSeq = 0;
    static readonly JavaScriptSerializer json = new JavaScriptSerializer { MaxJsonLength = int.MaxValue };
    const long MAX_UPLOAD = 30L * 1024 * 1024;
    public static string LanUrl = "";
    public static string LocalUrl = "";

    static readonly Dictionary<string, string> Mime = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) {
        { ".html", "text/html; charset=utf-8" }, { ".js", "text/javascript; charset=utf-8" }, { ".json", "application/json; charset=utf-8" },
        { ".css", "text/css; charset=utf-8" }, { ".jpg", "image/jpeg" }, { ".jpeg", "image/jpeg" }, { ".png", "image/png" },
        { ".webp", "image/webp" }, { ".svg", "image/svg+xml" }, { ".txt", "text/plain; charset=utf-8" }, { ".ico", "image/x-icon" }
    };

    public static void Start(string rootDir, int p)
    {
        root = Path.GetFullPath(rootDir).TrimEnd('\\') + "\\";
        port = p;
        upDir = Path.Combine(root, "caricate");
        Directory.CreateDirectory(upDir);
        indexPath = Path.Combine(upDir, "caricate.json");
        if (File.Exists(indexPath))
        {
            try { foto = json.Deserialize<List<FotoCaricata>>(File.ReadAllText(indexPath, Encoding.UTF8)) ?? new List<FotoCaricata>(); }
            catch { foto = new List<FotoCaricata>(); }
            foto = foto.Where(f => File.Exists(Path.Combine(root, f.file.Replace('/', '\\')))).ToList();
        }
        string ip = LanIp();
        LanUrl = ip == null ? "" : "http://" + ip + ":" + port + "/carica.html";
        LocalUrl = "http://localhost:" + port + "/";
        var listener = new TcpListener(IPAddress.Any, port);
        listener.Start();
        var t = new Thread(() =>
        {
            while (true)
            {
                TcpClient c;
                try { c = listener.AcceptTcpClient(); } catch { break; }
                ThreadPool.QueueUserWorkItem(_ => Handle(c));
            }
        });
        t.IsBackground = true;
        t.Start();
    }

    // the IPv4 address of the network card that has a gateway (Wi-Fi or cable)
    static string LanIp()
    {
        foreach (var ni in NetworkInterface.GetAllNetworkInterfaces())
        {
            if (ni.OperationalStatus != OperationalStatus.Up || ni.NetworkInterfaceType == NetworkInterfaceType.Loopback) continue;
            var props = ni.GetIPProperties();
            if (props.GatewayAddresses.Count == 0) continue;
            foreach (var a in props.UnicastAddresses)
                if (a.Address.AddressFamily == AddressFamily.InterNetwork) return a.Address.ToString();
        }
        return null;
    }

    static void Handle(TcpClient c)
    {
        try
        {
            using (c)
            {
                c.ReceiveTimeout = 30000; c.SendTimeout = 30000;
                var ns = c.GetStream();
                // request line + headers, up to the blank line
                var head = new MemoryStream();
                var one = new byte[1];
                while (true)
                {
                    int r = ns.Read(one, 0, 1);
                    if (r <= 0) return;
                    head.WriteByte(one[0]);
                    long L = head.Length;
                    if (L > 65536) return;
                    if (L >= 4)
                    {
                        var b = head.GetBuffer();
                        if (b[L - 4] == 13 && b[L - 3] == 10 && b[L - 2] == 13 && b[L - 1] == 10) break;
                    }
                }
                string text = Encoding.ASCII.GetString(head.GetBuffer(), 0, (int)head.Length);
                var lines = text.Split(new[] { "\r\n" }, StringSplitOptions.None);
                var first = lines[0].Split(' ');
                if (first.Length < 2) return;
                string method = first[0].ToUpperInvariant(), target = first[1];
                var headers = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
                for (int i = 1; i < lines.Length; i++)
                {
                    int k = lines[i].IndexOf(':');
                    if (k > 0) headers[lines[i].Substring(0, k).Trim()] = lines[i].Substring(k + 1).Trim();
                }
                long len = 0;
                string cl;
                if (headers.TryGetValue("Content-Length", out cl)) long.TryParse(cl, out len);
                if (len > MAX_UPLOAD) { Send(ns, 413, "text/plain; charset=utf-8", "Foto troppo grande"); return; }
                var body = new byte[len];
                int got = 0;
                while (got < len) { int r = ns.Read(body, got, (int)(len - got)); if (r <= 0) break; got += r; }
                string path = target, query = "";
                int q = target.IndexOf('?');
                if (q >= 0) { path = target.Substring(0, q); query = target.Substring(q + 1); }
                path = Uri.UnescapeDataString(path);
                Route(ns, method, path, query, headers, body);
            }
        }
        catch { }
    }

    static void Route(NetworkStream ns, string method, string path, string query, Dictionary<string, string> headers, byte[] body)
    {
        if (path == "/api/info" && method == "GET")
        {
            // the address is computed again every time: the computer may have changed Wi-Fi network
            string ip = LanIp();
            LanUrl = ip == null ? "" : "http://" + ip + ":" + port + "/carica.html";
            SendJson(ns, 200, json.Serialize(new { url = LanUrl, locale = LocalUrl }));
            return;
        }
        // collision events: the nebula posts them, the phones play the gong
        if (path == "/api/evento" && method == "POST")
        {
            double forza = 0.6;
            try { var d = json.Deserialize<Dictionary<string, object>>(Encoding.UTF8.GetString(body)); object v; if (d != null && d.TryGetValue("forza", out v)) forza = Convert.ToDouble(v); } catch { }
            lock (gate) { eventSeq++; eventi.Add(new Dictionary<string, object> { { "seq", eventSeq }, { "forza", forza }, { "t", (DateTime.UtcNow - new DateTime(1970, 1, 1)).TotalMilliseconds } }); if (eventi.Count > 40) eventi.RemoveAt(0); }
            SendJson(ns, 200, "{\"ok\":true}");
            return;
        }
        if (path == "/api/eventi" && method == "GET")
        {
            int dopo = -1;
            foreach (var part in query.Split('&')) if (part.StartsWith("dopo=")) int.TryParse(part.Substring(5), out dopo);
            object res;
            lock (gate) res = dopo < 0 ? (object)new { seq = eventSeq, eventi = new object[0] } : new { seq = eventSeq, eventi = eventi.Where(x => (int)x["seq"] > dopo).ToArray() };
            SendJson(ns, 200, json.Serialize(res));
            return;
        }
        if (path == "/api/caricate" && method == "GET")
        {
            int dopo = 0;
            foreach (var part in query.Split('&'))
                if (part.StartsWith("dopo=")) int.TryParse(part.Substring(5), out dopo);
            List<FotoCaricata> list;
            lock (gate) list = foto.Where(f => f.seq > dopo).OrderBy(f => f.seq).ToList();
            SendJson(ns, 200, json.Serialize(list));
            return;
        }
        if (path == "/api/carica" && method == "POST")
        {
            if (body.Length < 100 || !(body[0] == 0xFF && body[1] == 0xD8))
            {
                SendJson(ns, 400, "{\"errore\":\"serve una foto JPEG\"}");
                return;
            }
            string nome = "";
            string h;
            if (headers.TryGetValue("X-Nome", out h)) { try { nome = Uri.UnescapeDataString(h); } catch { } }
            if (nome.Length > 120) nome = nome.Substring(0, 120);
            FotoCaricata f;
            lock (gate)
            {
                string id = DateTime.Now.ToString("yyyyMMdd-HHmmss-fff") + "-" + new Random().Next(1000, 9999);
                File.WriteAllBytes(Path.Combine(upDir, id + ".jpg"), body);
                f = new FotoCaricata
                {
                    id = id,
                    file = "caricate/" + id + ".jpg",
                    quando = (DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc)).TotalMilliseconds,
                    nome = nome,
                    seq = (foto.Count == 0 ? 0 : foto.Max(x => x.seq)) + 1
                };
                foto.Add(f);
                Save();
            }
            Console.WriteLine("  + foto arrivata: " + f.id + (nome != "" ? " (" + nome + ")" : ""));
            SendJson(ns, 200, json.Serialize(new { ok = true, id = f.id }));
            return;
        }
        if (path.StartsWith("/api/caricate/") && method == "DELETE")
        {
            string id = path.Substring("/api/caricate/".Length);
            bool found = false;
            lock (gate)
            {
                var f = foto.FirstOrDefault(x => x.id == id);
                if (f != null)
                {
                    found = true;
                    foto.Remove(f);
                    try { File.Delete(Path.Combine(root, f.file.Replace('/', '\\'))); } catch { }
                    Save();
                }
            }
            if (found) Console.WriteLine("  - foto eliminata: " + id);
            SendJson(ns, found ? 200 : 404, found ? "{\"ok\":true}" : "{\"errore\":\"non trovata\"}");
            return;
        }
        if (method != "GET" && method != "HEAD") { Send(ns, 405, "text/plain; charset=utf-8", "Metodo non consentito"); return; }
        // static files
        string rel = path.TrimStart('/');
        if (rel == "") rel = "index.html";
        string full;
        try { full = Path.GetFullPath(Path.Combine(root, rel.Replace('/', '\\'))); } catch { Send(ns, 400, "text/plain", "Percorso non valido"); return; }
        if (!full.StartsWith(root, StringComparison.OrdinalIgnoreCase) || !File.Exists(full)) { Send(ns, 404, "text/plain; charset=utf-8", "Non trovato"); return; }
        string type;
        if (!Mime.TryGetValue(Path.GetExtension(full), out type)) type = "application/octet-stream";
        byte[] data = File.ReadAllBytes(full);
        SendBytes(ns, 200, type, data, method == "HEAD");
    }

    static void Save()
    {
        File.WriteAllText(indexPath, json.Serialize(foto), new UTF8Encoding(false));
    }

    static void SendJson(NetworkStream ns, int code, string text) { Send(ns, code, "application/json; charset=utf-8", text); }

    static void Send(NetworkStream ns, int code, string type, string text) { SendBytes(ns, code, type, Encoding.UTF8.GetBytes(text), false); }

    static void SendBytes(NetworkStream ns, int code, string type, byte[] data, bool headOnly)
    {
        string reason = code == 200 ? "OK" : code == 404 ? "Not Found" : code == 400 ? "Bad Request" : code == 413 ? "Payload Too Large" : code == 405 ? "Method Not Allowed" : "Error";
        var sb = new StringBuilder();
        sb.Append("HTTP/1.1 ").Append(code).Append(' ').Append(reason).Append("\r\n");
        sb.Append("Content-Type: ").Append(type).Append("\r\n");
        sb.Append("Content-Length: ").Append(data.Length).Append("\r\n");
        sb.Append("Cache-Control: no-cache\r\n");
        sb.Append("Connection: close\r\n\r\n");
        var h = Encoding.ASCII.GetBytes(sb.ToString());
        ns.Write(h, 0, h.Length);
        if (!headOnly && data.Length > 0) ns.Write(data, 0, data.Length);
        ns.Flush();
    }
}

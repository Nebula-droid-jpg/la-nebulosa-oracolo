# Avvia la nebulosa in modalità installazione:
#  1. un piccolo server locale (http://localhost:8765) che serve questa cartella,
#  2. Chrome (o Edge) a schermo intero, con microfono e audio già consentiti.
# Uso:  doppio clic su "AVVIA INSTALLAZIONE.bat"
#       oppure: powershell -ExecutionPolicy Bypass -File avvia-installazione.ps1 [-Finestra] [-Porta 8765]
# Per uscire dallo schermo intero: Alt+F4. Chiudendo questa finestra si spegne il server.
param(
    [int]$Porta = 8765,
    [switch]$Finestra,
    [switch]$SoloServer   # non apre il browser (per aprirlo a mano)
)
$ErrorActionPreference = 'Stop'
$radice = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$url = "http://localhost:$Porta/index.html?installazione"

$tipi = @{
    '.html' = 'text/html; charset=utf-8'; '.js' = 'text/javascript; charset=utf-8'; '.json' = 'application/json'
    '.css' = 'text/css'; '.jpg' = 'image/jpeg'; '.jpeg' = 'image/jpeg'; '.png' = 'image/png'; '.svg' = 'image/svg+xml'
    '.txt' = 'text/plain; charset=utf-8'; '.ico' = 'image/x-icon'
}

$server = New-Object System.Net.HttpListener
$server.Prefixes.Add("http://localhost:$Porta/")
try { $server.Start() } catch { Write-Host "La porta $Porta è occupata: chiudi l'altra finestra dell'installazione o usa -Porta 8766." -ForegroundColor Red; Read-Host 'Premi Invio per chiudere'; exit 1 }
Write-Host "La nebulosa è servita su $url" -ForegroundColor Yellow
Write-Host "Lascia aperta questa finestra. Per spegnere tutto: Alt+F4 sul browser, poi chiudi questa finestra."

# browser: Chrome se c'è (riconoscimento vocale più affidabile), altrimenti Edge
$candidati = @(
    "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
    "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
    "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe",
    "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
    "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
)
$browser = $candidati | Where-Object { Test-Path $_ } | Select-Object -First 1
$profilo = Join-Path $env:LOCALAPPDATA 'NebulosaInstallazione'
$argomenti = @(
    "--user-data-dir=`"$profilo`"", '--no-first-run', '--no-default-browser-check',
    '--autoplay-policy=no-user-gesture-required',   # musica senza dover cliccare
    '--use-fake-ui-for-media-stream',               # microfono consentito senza finestra di conferma
    '--disable-features=Translate', '--overscroll-history-navigation=0', '--disable-pinch'
)
if (-not $Finestra) { $argomenti += '--kiosk' } else { $argomenti += '--start-maximized' }
$argomenti += $url
if ($SoloServer) { }
elseif ($browser) { Start-Process -FilePath $browser -ArgumentList $argomenti }
else { Start-Process $url }

$radiceFull = [IO.Path]::GetFullPath($radice)
while ($server.IsListening) {
    try { $ctx = $server.GetContext() } catch { break }
    $res = $ctx.Response
    try {
        $rel = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath.TrimStart('/'))
        if (-not $rel) { $rel = 'index.html' }
        $file = [IO.Path]::GetFullPath((Join-Path $radiceFull $rel))
        if (-not $file.StartsWith($radiceFull) -or -not (Test-Path $file -PathType Leaf)) {
            $res.StatusCode = 404
        } else {
            $ext = [IO.Path]::GetExtension($file).ToLower()
            $res.ContentType = if ($tipi.ContainsKey($ext)) { $tipi[$ext] } else { 'application/octet-stream' }
            $res.AddHeader('Cache-Control', 'no-cache')
            $fs = [IO.File]::OpenRead($file)
            $res.ContentLength64 = $fs.Length
            $fs.CopyTo($res.OutputStream, 1048576)
            $fs.Close()
        }
    } catch { } finally { try { $res.Close() } catch { } }
}

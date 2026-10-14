# Avvia la nebulosa:
#  1. un piccolo server locale che serve questa cartella e riceve le foto dai telefoni
#     collegati allo stesso Wi-Fi (le foto restano sul computer, nella cartella "caricate");
#  2. Chrome (o Edge) a schermo intero, con microfono e audio già consentiti.
# Uso:  doppio clic su "AVVIA INSTALLAZIONE.bat" (schermo intero) o "AVVIA IN FINESTRA (prove).bat"
#       oppure: powershell -ExecutionPolicy Bypass -File avvia-installazione.ps1 [-Finestra] [-Porta 8765] [-SoloServer]
# Per uscire dallo schermo intero: Alt+F4. Chiudendo questa finestra si spegne il server.
param(
    [int]$Porta = 8765,
    [switch]$Finestra,
    [switch]$SoloServer   # non apre il browser (per aprirlo a mano)
)
$ErrorActionPreference = 'Stop'
$qui = Split-Path -Parent $MyInvocation.MyCommand.Path
$radice = Split-Path -Parent $qui
$url = "http://localhost:$Porta/index.html?installazione"

Add-Type -Path (Join-Path $qui 'NebulaServer.cs') -ReferencedAssemblies System.Web.Extensions, System.Core
try { [NebulaServer]::Start($radice, $Porta) }
catch {
    Write-Host "La porta $Porta è occupata: chiudi l'altra finestra della nebulosa o usa -Porta 8766." -ForegroundColor Red
    Read-Host 'Premi Invio per chiudere'; exit 1
}
Write-Host ""
Write-Host "  LA NEBULOSA" -ForegroundColor Yellow
Write-Host "  Su questo computer:        http://localhost:$Porta/"
if ([NebulaServer]::LanUrl) {
    Write-Host "  Dai telefoni (stesso Wi-Fi): $([NebulaServer]::LanUrl)" -ForegroundColor Yellow
    Write-Host "  Se Windows chiede di consentire l'accesso alla rete, scegli 'Reti private' e consenti:"
    Write-Host "  serve ai telefoni per mandare le foto. Niente va su internet."
} else {
    Write-Host "  Nessuna rete trovata: le foto dal telefono non potranno arrivare." -ForegroundColor Red
}
Write-Host ""
Write-Host "  Lascia aperta questa finestra. Per spegnere tutto: Alt+F4 sul browser, poi chiudi questa finestra."
Write-Host ""

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

# il server lavora in sottofondo: questa finestra resta aperta finché non la chiudi
while ($true) { Start-Sleep -Seconds 1 }

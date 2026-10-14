# Carica il progetto su GitHub un salvataggio alla volta (utile con connessioni lente,
# dove un unico invio grande scade). Uso: dalla cartella "progetto"
#   powershell -ExecutionPolicy Bypass -File nebulosa-foto\strumenti\carica-su-github.ps1
$git = 'C:\Program Files\Git\cmd\git.exe'
Set-Location (Split-Path -Parent (Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)))
& $git config http.postBuffer 524288000
$commits = & $git rev-list --reverse HEAD
$n = 0
foreach ($c in $commits) {
    $n++
    $msg = & $git log -1 --format=%s $c
    Write-Host ""
    Write-Host "[$n/$($commits.Count)] $msg" -ForegroundColor Yellow
    $ok = $false
    for ($tentativo = 1; $tentativo -le 3 -and -not $ok; $tentativo++) {
        & $git push origin "$($c):refs/heads/main"
        if ($LASTEXITCODE -eq 0) { $ok = $true } else { Write-Host "  non riuscito, riprovo ($tentativo/3)..." -ForegroundColor Red; Start-Sleep 5 }
    }
    if (-not $ok) { Write-Host "Invio interrotto. Rilancia lo script: riparte da dove si era fermato." -ForegroundColor Red; exit 1 }
}
& $git branch --set-upstream-to=origin/main main | Out-Null
Write-Host ""
Write-Host "FATTO: tutto caricato su GitHub." -ForegroundColor Green

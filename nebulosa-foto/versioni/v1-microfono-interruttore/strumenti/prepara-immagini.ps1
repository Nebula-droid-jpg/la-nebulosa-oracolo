# Rigenera dati.js e la cartella medie/ a partire da una cartella di immagini.
# Uso:  powershell -ExecutionPolicy Bypass -File prepara-immagini.ps1 [-Sorgente "C:\percorso\cartella"]
# Legge JPG, PNG e i RAW Canon .CR2 (usa l'anteprima JPEG interna); ignora RAF, MOV e i file .xmp.
param(
    [string]$Sorgente = (Join-Path ([Environment]::GetFolderPath('Desktop')) 'per cluade')
)
$ErrorActionPreference = 'Stop'
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$out = Split-Path -Parent $here
Add-Type -Path (Join-Path $here 'NebulaProc.cs') -ReferencedAssemblies System.Drawing, System.Core

$Sorgente = (Resolve-Path $Sorgente).Path.TrimEnd('\')
$rels = Get-ChildItem $Sorgente -Recurse -File |
    Where-Object { $_.Extension -match '^\.(jpe?g|png|cr2)$' } |
    Sort-Object FullName |
    ForEach-Object { $_.FullName.Substring($Sorgente.Length + 1) }
Write-Host "Trovate $($rels.Count) immagini in $Sorgente"

$medie = Join-Path $out 'medie'
if (Test-Path $medie) { Get-ChildItem $medie -Filter *.jpg | Remove-Item -Confirm:$false }
$log = Join-Path $env:TEMP 'nebulosa-log.txt'
$sw = [Diagnostics.Stopwatch]::StartNew()
[NebulaProc]::RunAll($Sorgente, [string[]]$rels, $out, $log) | Out-Null
Write-Host ("Fatto in {0:N0} secondi" -f $sw.Elapsed.TotalSeconds)
Get-Content $log

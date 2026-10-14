@echo off
title La Nebulosa - prove in finestra (lascia aperta questa finestra)
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0strumenti\avvia-installazione.ps1" -Finestra %*

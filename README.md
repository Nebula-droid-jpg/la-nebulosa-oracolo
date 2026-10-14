# La Nebulosa — Oracolo di immagini

Una nebulosa tridimensionale di 492 fotografie che fluttuano, si raggruppano per tema e si scontrano.
Ogni immagine ha una frase oracolare: fai una domanda e l'Oracolo risponde con l'immagine più legata alle tue parole.

## Cosa fa
- **11 costellazioni tematiche** (Mani all'opera, Materia, Muri che parlano, Cieli sospesi, Il nido rosso, Fuori, Volti e incontri, La bottega, Corpi di pietra, Quadri e sale, Dietro le quinte); i filamenti legano solo le foto dello stesso gruppo.
- **Scontri tra gruppi**, con filamenti fluorescenti e particelle; in *Modalità rumore* è il rumore della stanza a decidere quanto sono violenti.
- **L'Oracolo**: una domanda scritta (o detta a voce nell'installazione) apre l'immagine più pertinente, con la sua frase.
- **Foto dal telefono** tramite codice QR, sulla rete locale: la foto appare grande e poi entra nel gruppo che le somiglia.
- **Installazione** a schermo intero con microfono, musica generativa e immagini che si aprono con la voce.

## Come si avvia
Su Windows, dalla cartella `nebulosa-foto`:
- `AVVIA INSTALLAZIONE.bat` — a schermo intero
- `AVVIA IN FINESTRA (prove).bat` — in una finestra

Si apre un piccolo server locale (`http://localhost:8765`) e il browser. Le istruzioni complete sono in `nebulosa-foto/LEGGIMI.txt`.

## File principali
| File | Cosa contiene |
|---|---|
| `nebulosa-foto/index.html` | la nebulosa (Three.js) |
| `nebulosa-foto/analisi.js` | gruppo, frase oracolare e parole di ogni foto |
| `nebulosa-foto/vocabolario.js` | il vocabolario dell'Oracolo |
| `nebulosa-foto/parole.js` | famiglie di parole |
| `nebulosa-foto/carica.html` | la pagina che si apre sul telefono |
| `nebulosa-foto/strumenti/` | server locale e script per rigenerare le immagini |
| `nebulosa-foto/versioni/` | le versioni precedenti |

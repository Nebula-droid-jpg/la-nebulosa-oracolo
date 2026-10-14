// ANALISI DELLE FOTO — gruppi, frasi oracolari e parole
// Una riga per foto:   codice | gruppo | frase oracolare | parole (minuscole, separate da spazi)
// Il codice (f0001...) segue l'ordine dei file in D:\foto\full (f0001 = 001.jpg ... f0477 = 477.jpg,
// f0478 = u0001.jpg ... f0492 = u0015.jpg). Puoi correggere frasi, parole e gruppi liberamente.

window.NEBULA_GRUPPI = {
  officina: { nome: "Mani all'opera", colore: '#dbab72' },
  materia:  { nome: 'Materia',          colore: '#a9b8b9' },
  muri:     { nome: 'Muri che parlano', colore: '#c8938a' },
  sospesi:  { nome: 'Cieli sospesi',    colore: '#6fa8d6' },
  nido:     { nome: 'Il nido rosso',    colore: '#d0644f' },
  corpi:    { nome: 'Corpi di pietra',  colore: '#d9d2c3' },
  museo:    { nome: 'Quadri e sale',    colore: '#9d7fb0' },
  bottega:  { nome: 'La bottega',       colore: '#b6c2a2' },
  fuori:    { nome: 'Fuori',            colore: '#7fa3a1' },
  volti:    { nome: 'Volti e incontri', colore: '#e3bb87' },
  teatro:   { nome: 'Dietro le quinte', colore: '#8a8fa8' },
};

window.NEBULA_ANALISI = `
f0001 | officina | Quando molte mani cercano la stessa cosa, la stanza impara a respirare. | ragazzi gruppo laboratorio tavoli computer studio lavoro insieme comunità cuore bandiere festoni giovani napoli crepa ferite
f0002 | officina | Ogni tanto devi perderti, altrimenti non ti ritrovi. | ragazzo maglietta rossa computer laptop tavolo lavoro perdersi ritrovarsi scritta napoletano gruppo studio
f0003 | officina | Anche il silenzio davanti a uno schermo sta costruendo qualcosa. | uomo solo computer tavolo concentrazione lavoro silenzio sedia rossa studio solitudine
f0004 | materia | Nei cassetti piccoli dormono le soluzioni grandi. | cassetti scatole colori attrezzi componenti ordine disordine tavolo materiali soluzione
f0005 | muri | L'idea buona è quella che ancora non sai di avere. | scritta muro barca carta oro idea secchio blu attodamore blocchiamo pensiero futuro
f0006 | materia | Il disordine è un cantiere che non ha ancora finito di parlare. | banco lavoro macchine sega attrezzi scatole legno officina disordine costruire
f0007 | materia | Ogni groviglio ha un capo: cercalo con pazienza. | cavi groviglio scatola fili elettricità nodo confusione pazienza problema
f0008 | sospesi | Ciò che appendi in alto smette di pesarti. | secchi blu appesi soffitto installazione sospeso cielo leggerezza sala volare
f0009 | sospesi | Guardato da sotto, anche un secchio diventa una luna. | secchio blu cerchio luna porta legno sospeso sguardo cielo prospettiva
f0010 | muri | Il bersaglio non è mai dove lo hai disegnato. | cervo freccette bersaglio foto muro animale quadro elettrico obiettivo destino
f0011 | officina | Intorno a un banco di legno nascono più idee che intorno a un trono. | ragazzi banco legno lavoro insieme conversazione laboratorio secchi blu porta idea
f0012 | materia | La trasparenza si stropiccia, ma continua a lasciar passare la luce. | plastica trasparente telo stropicciato luce pellicola fragile fragilità
f0013 | sospesi | Ogni crisi appende i suoi stendardi; poi il vento li porta via. | festoni bandiere stendardi soffitto crisi scritta colori sala cambiamento
f0014 | officina | Coprire qualcosa con cura è già un modo di proteggerlo. | donne ragazze telo plastica tavolo coprire cura insieme lavoro proteggere
f0015 | muri | Napoli non nasconde le ferite: le trasforma in cuori. | cuore rosso pixel muro scritta ferite crepa napoli amore dolore guarire
f0016 | sospesi | Mille piccole luci non fanno buio: fanno rete. | luci rete led puntini notte stelle cielo installazione insieme speranza
f0017 | materia | Ogni scala ricorda che si sale un gradino alla volta. | scala alluminio muro salire gradini attesa pazienza crescere obiettivo
f0018 | nido | Il rosso ti invita a sederti prima di decidere. | cubi rossi sala secchi blu cuscini tappeto persone spazio riposo decidere
f0019 | muri | Un cuore fatto di quadratini batte lo stesso. | cuore pixel pannello cassa musica stand rosa amore costruire
f0020 | muri | C'è un occhio che ti guarda solo quando smetti di nasconderti. | occhio sguardo cerchio rosso tende ritratto vedere verità nascondere
f0021 | muri | A volte la risposta è solo un grido di meraviglia. | uah grido logo freccia stoffa blu stupore meraviglia
f0022 | materia | Porti con te più di quanto credi: prova a svuotare il carrello. | carrello spesa oggetti stanza peso portare accumulo lasciare
f0023 | fuori | Una finestra aperta è il primo bene comune. | finestra aperta palazzo rosso città scritta bene comune muro luce aria
f0024 | muri | Ciò che è di tutti chiede a ciascuno un po' di cura. | bene comune scritta muro condividere comunità cura
f0025 | volti | Perderti è il modo più antico per trovare la strada. | maglietta rossa scritta perdersi ritrovarsi ragazzo spalle napoletano strada
f0026 | materia | Le cose minuscole tengono insieme quelle enormi. | scatola componenti elettronica kit piccolo dettaglio costruire
f0027 | muri | Ogni crepa racconta una storia: ascolta la tua. | crepa storia cuore rosso muro scritta crisi tavolo ferite ascoltare
f0028 | muri | Lavora con quello che hai: la luna non aspetta materiali migliori. | luna scritta artista fatica napoletano accontentarsi lavoro
f0029 | nido | Ogni progetto, se lo guardi bene, parla d'amore. | tazze cucina piastrelle scritta amore progetto quotidiano caffè
f0030 | nido | Anche i piatti da lavare sono una forma di casa. | lavandino bottiglie detersivi cucina disordine quotidiano casa pulizia
f0031 | muri | Chi si mette il casco ha deciso di non avere paura. | bagno poster casco donna lavoro coraggio paura
f0032 | materia | Un angolo tranquillo può contenere un mondo intero. | computer schermi scrivania angolo tecnologia silenzio
f0033 | muri | L'arte è dappertutto, anche dove ti sei stancato di guardare. | arte ovunque scritta muro bandiere sguardo
f0034 | nido | Ogni casa ha un angolo che la tiene pulita senza farsi notare. | secchi annaffiatoio termosifone scope lavandino pulizia angolo quotidiano casa
f0035 | nido | Prima di ogni risposta, un caffè. | caffè macchinetta tazzina cucina pausa napoli quotidiano
f0036 | sospesi | Lenta come una lumaca, la festa arriva comunque. | festoni bandiere lumaca lentezza pazienza festa stanza
f0037 | bottega | La cura si costruisce un mattone alla volta. | cura scritta scultura figure tavolo attestato prendersi
f0038 | nido | Dietro la scena c'è sempre un ripostiglio pieno di possibilità. | ripostiglio bastoni legno cuscini rossi armadio deposito possibilità
f0039 | nido | Una barchetta di carta sa navigare anche su un mare di gommapiuma. | barca carta cuscino verde rosso gommapiuma viaggio sogno partire
f0040 | sospesi | La notte qui dentro ha più stelle che fuori. | luci rete led stelle notte secchi blu cielo
f0041 | materia | Guarda attraverso: ogni apertura ne contiene un'altra. | legno compensato buco tunnel cornice prospettiva struttura passaggio
f0042 | materia | Anche i fantasmi hanno bisogno di una casa piccola. | fantasma piccolo figura carta rosa gioco paura casa
f0043 | officina | Le mani sanno prima della testa. | mani banco lavoro attrezzo costruire ragazzi
f0044 | muri | Qui inizia la paura: proprio dove comincia il passo. | scritta pavimento paura soglia porta inizio passo coraggio
f0045 | muri | La relazione è la forma di resistenza più alta. | attodamore scritta definizione amore relazione resistenza parole
f0046 | materia | Strato dopo strato, anche un'idea prende forma. | stampante 3d macchina tecnologia costruire forma idea
f0047 | officina | Due teste chine sullo stesso problema sono già una soluzione. | ragazzi computer pavimento problema insieme collaborazione soluzione
f0048 | materia | Ogni angolo trascurato aspetta solo il suo turno. | stanza scatole mensole rosa disordine attesa angolo
f0049 | officina | Ciò che lasci non è un'eredità: è un'abitudine. | ragazzi computer studio eredità gruppo lavoro
f0050 | materia | Arrotolato, aspetta il momento di srotolarsi. | cavo tubo arrotolato scatola contenitore attesa
f0051 | materia | Un nastro bianco lasciato a terra è una storia non ancora legata. | nastri bianchi groviglio pavimento traliccio strisce legame
f0052 | volti | Noi umani ci riconosciamo sedendoci vicini. | persone ragazzi conversazione cubi rossi incontro umani insieme vicinanza
f0053 | sospesi | Sotto un soffitto antico, piccole lune blu imparano a galleggiare. | secchi blu soffitto legno antico sospeso lune galleggiare
f0054 | nido | Anche la stanchezza merita un cuscino. | riposo cuscino blu dormire stanchezza cartone pausa
f0055 | materia | L'ordine dei cassetti è la mappa di chi ci lavora. | cassetti colori tavolo attrezzi ordine banco mappa
f0056 | materia | Ogni scatola ha un cervello: basta aprirla. | elettronica scatola circuito cavi cervello tecnologia aprire
f0057 | officina | Il rumore di tanti pensieri insieme somiglia al mare. | persone computer stanza affollata studio cavi lavoro pensieri
f0058 | materia | Ciò che è stato usato riposa in attesa di nuove mani. | deposito secchio treppiedi legno attrezzi riposo attesa
f0059 | muri | Un drappo rosso dice no senza bisogno di parole. | drappo rosso velluto muro no scritta rifiuto
f0060 | nido | La X segna il punto: qui è dove ti fermi. | lettera x rosso tappeto stoffa cuscino rosa punto segno fermarsi
f0061 | muri | Ogni porta chiusa nasconde qualcuno pronto al lavoro. | bagno poster casco donna lavoratrice piastrelle porta
f0062 | sospesi | Quando il cielo è pieno di secchi, nessuna pioggia ti coglie impreparato. | secchi blu appesi soffitto sala cubi rossi persone installazione cielo pioggia
f0063 | sospesi | Una sala intera trattiene il fiato sotto cento lune blu. | secchi blu appesi soffitto sala cubi rossi persone installazione attesa
f0064 | sospesi | Ogni oggetto appeso è una domanda lasciata in sospeso. | secchi blu appesi soffitto sala cubi rossi domanda sospeso
f0065 | sospesi | Più cose sollevi, più spazio resta per camminare. | secchi blu appesi soffitto sala spazio leggerezza camminare
f0066 | nido | Sdraiati: il mondo continua anche senza di te. | ragazza sdraiata riposo telefono rosso cuscino pausa righe
f0067 | sospesi | Lo spazio vuoto in mezzo alla sala è il posto dell'incontro. | sala secchi blu cubi rossi bandiere schermo spazio incontro vuoto
f0068 | officina | Chi sale la scala sorridendo ha già toccato il soffitto. | ragazzo scala sorriso salire secchi lavoro felicità
f0069 | muri | Un uovo al tegamino è un sole che si può mangiare. | uovo sole schermo proiettore ironia cibo giallo
f0070 | sospesi | Una luna blu davanti a una porta chiusa: aspetta che si apra. | secchio blu porta legno cerchio luna attesa chiusa
f0071 | muri | L'arte è uno spazio d'incontro: entra senza bussare. | stendardi scritta arte incontro atto amore impalcatura
f0072 | nido | Il riposo è una forma geometrica: trova la tua. | gommapiuma rossa cuscino verde arredo riposo forma
f0073 | sospesi | Ciò che galleggia sopra di te tiene alto lo sguardo. | secchi blu sala traliccio soffitto sguardo alto
f0074 | nido | Dove c'è un divano condiviso, c'è una tregua. | divano coperte colori riposo sala persone tregua pace
f0075 | volti | Capovolgi la domanda e ti verrà da ridere. | ragazza capovolta sorriso ricci gioco ridere prospettiva felicità
f0076 | materia | Gli attrezzi in fila aspettano un'idea che li chiami per nome. | attrezzi morsa banco cacciaviti martelli officina idea
f0077 | materia | Ogni cacciavite conosce una sola vite: trovala. | cacciaviti attrezzi giallo arancio banco strumenti
f0078 | sospesi | Sotto le bandiere, ogni passo è una piccola festa. | festoni bandiere soffitto colori festa
f0079 | muri | Le ferite che mostri sono quelle che guariscono. | crepa ferite cuore rosso scritta napoli porta guarire dolore
f0080 | muri | La fatica fatta con ciò che hai vale più di ogni attesa. | luna artista fatica scritta napoletano accontentarsi
f0081 | materia | La pazienza di una macchina è fatta di millimetri. | stampanti 3d tecnologia tavolo macchine pazienza
f0082 | materia | Tocca e scatta: a volte basta un gesto. | cavi scatola cartello tocca scatta elettronica gesto
f0083 | sospesi | La lumaca porta la casa addosso e arriva lo stesso. | lumaca bandiere festoni lentezza casa pazienza
f0084 | volti | Lo sguardo basso non è timidezza: è ascolto. | ragazza occhiali ricci sguardo ritratto ascolto timidezza
f0085 | officina | Stendere qualcosa insieme è il primo modo di condividerlo. | ragazzi telo plastica tavolo lungo crocifisso luci lavoro insieme condividere
f0086 | muri | Processo, errore, relazione: nell'ordine che preferisci. | scritta processo errore relazione scala sbagliare imparare
f0087 | materia | Ogni zaino appoggiato è qualcuno che ha deciso di restare. | zaini giacche appendiabiti borse restare stampante
f0088 | materia | Tanti zaini a terra: tante strade che per un po' si fermano. | zaini borse giacche pavimento viaggio pausa strada
f0089 | materia | Anche ciò che butti racconta chi sei. | bidoni spazzatura rifiuti indifferenziata pallet riciclo identità
f0090 | muri | Ognuno è diverso e cresce a modo suo. | schermo scritta diverso crescere identità
f0091 | muri | La rivoluzione comincia quando ti accorgi di dove metti i piedi. | poster schema metodo rivoluzione coscienza piede didattica
f0092 | sospesi | Accanto all'ombra, una luce blu fa coraggio. | lampade luce blu ombra secchio coraggio
f0093 | officina | Ogni scontrino stampato è un piccolo ricordo che esce dal buio. | stampante scontrino cubi rossi persone sala ricordo
f0094 | muri | Per ripartire, a volte bisogna fermare tutto. | barca carta oro scritta blocchiamo fermarsi ripartire
f0095 | muri | Educare è aprire una porta che qualcun altro attraverserà. | stendardi educare futuro artisti umani secchi scuola
f0096 | muri | Il futuro che sembra già scritto si può ancora cancellare. | scritta futuro destino cappello cambiare libertà
f0097 | muri | L'amore è un atto: si fa, non si aspetta. | attodamore scritta amore secchio blu atto
f0098 | muri | Vivi con la pelle d'oca: è il segno che sei sveglio. | stendardo vivere pelle oca emozione sedie viola
f0099 | muri | Anche un quadro elettrico può avere un cuore. | cuore pixel scatola cavi fili elettricità amore
f0100 | corpi | Anche chi è appeso ha qualcosa da insegnare sull'attesa. | crocifisso scultura manifesto secchi blu attesa fede dolore
f0101 | muri | L'errore è il primo verso di ogni manifesto. | manifesto errore emozione relazione intelligenza collettiva orizzonte tecnologia parole sbagliare
f0102 | muri | Nessuno sa tutto, ma tutti insieme sanno abbastanza. | relazione intelligenza collettiva orizzontalità imperfetta manifesto sapere insieme
f0103 | materia | Su ogni scaffale c'è un'idea diversa di bellezza. | scaffale oggetti colorati sculture stendardo diverso crescere bellezza
f0104 | volti | Ridi di te: è il primo passo verso la libertà. | ragazzo posa scherzo sorriso scaffale gioco libertà ridere
f0105 | muri | Non c'è un ritmo giusto per crescere: c'è il tuo. | stendardo scritta diverso crescere ritmo identità
f0106 | materia | Dentro ogni mobile c'è un cassetto per le cose che ancora non sai. | legno banco buchi cassetti squadrette laboratorio segreto
f0107 | muri | Benvenuto: qui la porta resta socchiusa per chi arriva dopo. | cartello benvenuti laboratorio porta accoglienza arrivare
f0108 | materia | Ogni scarto, arrotolato con pazienza, diventa un tappeto. | tappeto stoffe arrotolate cuscini giallo blu riciclo pazienza
f0109 | materia | Ciò che hai accumulato può diventare una montagna da abitare. | stoffe arrotolate installazione carrello accumulo scultura montagna
f0110 | materia | Le cose in attesa fanno compagnia alla luce che entra. | scatole legno finestra deposito attesa luce
f0111 | materia | I tubi vuoti aspettano di diventare musica o struttura. | tubi bambù metallo scaffale vuoto struttura musica
f0112 | nido | Accendi il proiettore: anche il riposo ha bisogno di un film. | cubi rossi proiettore tappeto cuscini sala riposo film
f0113 | materia | Lo schermo bianco non è vuoto: è pronto. | schermo bianco vuoto proiezione attesa inizio
f0114 | fuori | Fuori c'è un teatro: dentro, le quinte. | finestra teatro deposito bidoni sedie quinte città
f0115 | materia | Ogni voce ha bisogno di qualcuno che alzi il volume. | mixer audio microfono computer suono voce figure musica
f0116 | materia | I colori arrotolati aspettano una parete da raccontare. | rotoli carta colori parete rosso verde blu
f0117 | materia | Gli scaffali pieni sono diari scritti dagli oggetti. | scaffale libri cassette scatole diario oggetti
f0118 | muri | Conta i giorni senza incidenti, ma non smettere di rischiare. | cartello giorni senza incidenti scritta rischio sicurezza coraggio
f0119 | muri | C'è sempre un estintore per chi brucia di idee. | estintore cartello fuoco scritta artista fatica emergenza
f0120 | materia | Ogni libro storto è stato letto da qualcuno di fretta. | libri riviste scaffale lettura sapere carta
f0121 | corpi | Una testa di gesso guarda la città e non si stanca di aspettare. | busto scultura gesso finestra città scatole attesa donna
f0122 | muri | Se l'arte è ovunque, anche tu sei dentro un'opera. | arte ovunque scritta muro festoni opera
f0123 | muri | Un sogno diventa segno quando qualcuno lo scrive sul muro. | sogno segno neon scritta muro desiderio realizzare
f0124 | materia | Su questo tavolo il caos è solo ordine che si riposa. | tavolo computer borse arancioni cavi scatole caos
f0125 | sospesi | Chi va piano porta tutto con sé. | lumaca lentezza casa festone muro pazienza
f0126 | muri | Ogni pericolo ha il suo cartello: il tuo dove l'hai appeso? | cartelli pericolo quadro elettrico acqua divieto attenzione paura
f0127 | nido | Qui c'è un incrocio: scegli la tua strada. | lettera x rosso tappeto stoffe incrocio scelta scegliere strada
f0128 | muri | Un atto d'amore non chiede il permesso di essere esposto. | stendardi atto amore incontro impalcatura scritta
f0129 | materia | Le ruote ferme sognano ancora la strada. | ruote bicicletta scatole viaggio fermo strada sogno
f0130 | materia | Anche ciò che sembra fermo ha una ruota pronta a girare. | ruota rotella metallo movimento dettaglio cambiamento
f0131 | materia | La morsa stringe solo per lasciare libere le mani. | morsa attrezzi banco officina mani strumenti
f0132 | volti | Il sorriso più vero arriva quando nessuno ti guarda. | ragazza ricci sdraiata sorriso telefono riposo righe felicità
f0133 | materia | Ciò che porti con te ogni giorno ti somiglia. | borraccia adesivi tavolo porta quotidiano pranzo
f0134 | nido | Due civette vegliano: puoi chiudere gli occhi. | cuscino civette ricamo coppia notte riposo dormire
f0135 | materia | Gli ombrelli dimenticati aspettano la prossima pioggia. | ombrelli borse cassette angolo pioggia dimenticare
f0136 | materia | Le parole tagliate a strisce si intrecciano da sole. | nastri carta parole strisce groviglio scrittura
f0137 | muri | C'è sempre un'uscita, anche quando non la cerchi. | uscita emergenza cartello verde scappare via libertà
f0138 | muri | Sbagliare è uno dei gradini. | scala scritta processo errore relazione salire sbagliare
f0139 | materia | Una scala da sola non sale da nessuna parte: serve qualcuno. | scala muro solitudine attesa aiuto
f0140 | muri | Ci sono legami che non vanno staccati. | presa spina scritta non staccare legame amicizia
f0141 | materia | Misura pure, ma ricordati che non tutto si misura. | metro misura rosso banco attrezzo
f0142 | sospesi | Ogni puntino di luce è qualcuno che non ha spento. | luci led rete puntini notte speranza
f0143 | materia | Una corda tiene insieme ciò che il vento vorrebbe separare. | corde mollette intreccio bianco legare vento
f0144 | sospesi | Batti il gong: la sala sta aspettando te. | gong secchi blu bandiera cuore napoli schermo sala inizio
f0145 | fuori | Dalla finestra si vede il teatro: anche la tua vita ha un palco. | finestra teatro tenda palazzo città palco
f0146 | materia | Ogni canna vuota è un respiro che aspetta. | canne bambù tubi vuoto respiro
f0147 | materia | Le curve rotte sanno ancora abbracciare. | plastica arancione curva rotto pezzi rosso abbraccio
f0148 | materia | Il microfono aspetta solo la tua voce. | microfono asta voce parlare palco coraggio
f0149 | materia | Le sedie vuote fanno spazio a chi deve ancora arrivare. | sedie vuote angolo attesa arrivare
f0150 | muri | Mira bene, ma ricordati delle facce intorno al bersaglio. | freccette bersaglio foto muro quadro elettrico obiettivo
f0151 | sospesi | Una struttura vuota regge più sogni di una piena. | secchi blu traliccio sala struttura soffitto sogni
f0152 | officina | Mentre lavori, il tuo sogno si sta scrivendo sul muro. | ragazzi tavoli computer lavoro sogno segno studio
f0153 | officina | Il futuro si studia in gruppo, uno schermo alla volta. | ragazzi gruppo computer studio tavoli futuro
f0154 | volti | Quando tutti si voltano, qualcuno sta per dire la cosa giusta. | ragazzi gruppo sguardi attenzione ascolto
f0155 | muri | Il cervo non teme il bersaglio: lo osserva. | cervo animale freccette foto muro coraggio
f0156 | fuori | Entra dalla bocca: dentro ti aspetta una festa di luci. | bocca porta ingresso corridoio luci entrare
f0157 | fuori | Ogni soglia ha una voce: ascoltala prima di entrare. | bocca porta soglia ingresso voce entrare
f0158 | nido | Il disordine dei cuscini è la mappa di una giornata felice. | cubi rossi divani cuscini secchi sala felicità
f0159 | nido | Siediti dove capita: ogni posto è quello giusto. | cubi rossi tappeto colori sala sedersi
f0160 | nido | Anche gli oggetti, se li lasci vicini, iniziano a parlarsi. | cubi rossi tappeto sala vicinanza
f0161 | muri | Un uovo sopra lo schermo: prima di proiettare il futuro, fai colazione. | uovo schermo proiettore cubi rossi colazione ironia sole
f0162 | nido | Davanti allo schermo vuoto, le sedie rosse aspettano una storia. | schermo cubi rossi uovo attesa storia sala
f0163 | officina | Chi si china sul problema lo vede finalmente da vicino. | ragazzi computer tavolo problema concentrazione lavoro studio
f0164 | officina | Le risposte arrivano spesso alle spalle di chi le cerca. | ragazzi computer spalle aiuto lavoro insieme
f0165 | officina | Guardare in su, a volte, è il modo più semplice per chiedere aiuto. | ragazzi computer maglietta rossa sguardo aiuto domanda
f0166 | officina | La mano sulla fronte è il punto esatto in cui nascono le idee. | ragazzo pensiero computer fronte idea studio fatica
f0167 | materia | Dai cavi aggrovigliati escono le connessioni più forti. | cavi scatola groviglio connessioni rosso cartelli
f0168 | muri | Su una porta si attaccano i ricordi: "perdimm' o' tiemp". | porta calamite foto ricordi tempo cartoline cuore
f0169 | materia | Ogni armadio chiuso custodisce qualcosa che non hai ancora chiesto. | armadio adesivi metallo chiuso segreto
f0170 | muri | Ripetere un manifesto è un modo di crederci di più. | manifesti colori colonna scritta ripetizione credere
f0171 | muri | Ogni colonna regge anche le parole che le hai scritto addosso. | colonna attodamore scritta mano adesivi muro
f0172 | bottega | La cura è una folla piccola che sta in piedi insieme. | cura scultura figure folla insieme scritta rosso
f0173 | bottega | Tante piccole figure bianche reggono una sola parola: cura. | cura scultura figure bianche folla prendersi
f0174 | bottega | Tra due casse che suonano, la cura resta in silenzio. | cura scultura casse musica figure silenzio
f0175 | fuori | Quando il cielo è grigio, la città rallenta e ascolta. | finestra cielo grigio città palazzi tetti pioggia malinconia
f0176 | fuori | In fondo al corridoio c'è sempre qualcuno che ti precede. | corridoio arco porta buio persone lontano strada
f0177 | fuori | Il cortile verde aspetta che smetta di piovere. | cortile alberi verde palazzo ringhiera pioggia attesa natura
f0178 | muri | Non tutti gli incendi si spengono con l'acqua. | cartelli divieto acqua quadro elettrico fuoco pericolo
f0179 | materia | La cassetta del pronto soccorso ricorda che si può sempre ricominciare. | cassetta soccorso croce muro aiuto cura
f0180 | fuori | Una porta grigia in fondo a una stanza vuota è una promessa. | porta grigia stanza vuota pavimento attesa promessa
f0181 | muri | Un muro raschiato mostra tutti i suoi strati di vita. | muro intonaco strati graffi segni memoria tempo
f0182 | fuori | Sotto le volte antiche ogni porta ha la sua storia scolpita. | volta arco porta rilievo scultura corridoio antico
f0183 | muri | Accanto all'antico rilievo, un defibrillatore: anche il cuore va soccorso. | defibrillatore cuore soccorso rilievo antico scritta
f0184 | muri | Un volto disegnato sulle scale ti guarda salire. | disegno volto murale scale graffiti anarchia sguardo
f0185 | muri | I muri dell'accademia raccontano ciò che le lezioni tacciono. | graffiti scritte muro volto accademia ribellione
f0186 | muri | Un clown sul muro ricorda che anche la tristezza ha i suoi colori. | disegno clown volto colori scale tristezza
f0187 | fuori | La pioggia sul pavimento riflette una porta aperta. | porta aperta vetri pioggia riflesso corridoio fuori
f0188 | muri | Sotto la finestra tonda, i muri parlano a chi si siede. | finestra tonda graffiti scritte muro sedersi lavandino
f0189 | sospesi | Qualcuno ha dipinto il cielo dentro una stanza. | cielo dipinto stelle blu soffitto notte sogno
f0190 | bottega | Un tavolo apparecchiato di lavoro è la casa di chi crea. | tavolo sedie aula porta lavoro accademia
f0191 | bottega | Le stanze vuote dell'accademia sono piene di quello che verrà. | tavoli sedie aula vuota porta futuro
f0192 | bottega | I cavalletti a riposo sognano la prossima tela. | cavalletti legno aula porta pittura attesa
f0193 | muri | Su questo muro chiunque ha lasciato una frase per te. | muro scritte frasi graffiti parole messaggi
f0194 | muri | "Sfrattiamo i ratti": anche la rabbia sa fare poesia. | scritta muro sfrattiamo ratti rabbia graffiti rosso
f0195 | muri | L'arte è come le polpette: si fa con quello che resta. | scritte muro arte napoletano frasi graffiti
f0196 | bottega | Nel laboratorio delle scenografie, ogni cornice aspetta il suo specchio. | scenografia laboratorio cornice specchio legno vernice compressore
f0197 | fuori | Una porta segnata dai graffiti è comunque un'uscita. | porta graffiti uscita cartello struttura ferro
f0198 | bottega | Gli uomini che costruiscono le scene sanno che tutto è finto e vero insieme. | uomini scenografia pannelli legno laboratorio costruire teatro
f0199 | muri | Tu lo chiami trauma, io lo chiamo memoria piccante. | scritta muro trauma memoria ironia graffiti dolore
f0200 | bottega | Nello specchio ovale ti vedi mentre stai creando. | specchio ovale cornice gialla riflesso ragazzo laboratorio
f0201 | fuori | Sotto il cielo pesante qualcuno ha scritto un augurio sul muretto. | cielo grigio nuvole muretto scritte città tetti
f0202 | bottega | Una cornice dipinta per terra è un palcoscenico che sta nascendo. | scenografia cornice pavimento pittura laboratorio ragazzi teatro
f0203 | bottega | Il caos del laboratorio è il magazzino del meraviglioso. | laboratorio scatole legno plastica caos magazzino
f0204 | bottega | Un lungo banco di lavoro è una strada che porta alla scena. | banco legno laboratorio lavagna cornici strada
f0205 | muri | Sulla porta vecchia, piccoli personaggi ti salutano. | porta legno disegni gesso personaggi saluto
f0206 | muri | Ogni alter ego ha diritto alla sua mostra. | manifesto mostra alter ego volto scritte identità
f0207 | muri | Dai un bacio al tuo gatto da parte mia. | scritta muro bacio gatto cane amore tenerezza
f0208 | muri | Un occhio disegnato con una penna vede più di quanto pensi. | disegno occhio penna muro sguardo
f0209 | muri | Terzo piano, aule di pittura: sali, il colore ti aspetta. | cartello accademia belle arti pittura piano salire
f0210 | fuori | Una finestra a mezzaluna lascia entrare solo la luce necessaria. | finestra mezzaluna grata luce arco
f0211 | fuori | Ogni freccia verde indica un'uscita, ma tu scegli la direzione. | cartelli uscita frecce primo piano scale scelta direzione
f0212 | fuori | Dietro la grande finestra, il giardino respira per tutti. | finestra grande giardino alberi verde palazzo respiro
f0213 | fuori | Nei lunghi corridoi le persone diventano piccole e le volte immense. | corridoio volte archi persone lontano infinito
f0214 | fuori | La stanza blu tiene accesa una sedia per chi ha bisogno di silenzio. | stanza blu sedia buio porta silenzio tenda
f0215 | bottega | Il carrello degli attrezzi è un piccolo mondo in movimento. | carrello attrezzi cassette tubo arancione laboratorio
f0216 | fuori | Dalla porta socchiusa si vede uno schermo acceso nel buio. | porta socchiusa buio schermo luce notte
f0217 | bottega | Il lavandino sporco di colore racconta tutte le mani che ci sono passate. | lavandino colore pennelli spatole sporco laboratorio mani
f0218 | fuori | Una porta d'emergenza nel buio: il coraggio è sapere dov'è. | porta emergenza buio corridoio uscita coraggio
f0219 | materia | Gli scaffali dei ripostigli conservano la pazienza di tutti. | scaffali ripostiglio aspirapolvere scatole nastri
f0220 | materia | Una stella appesa all'anta ricorda di guardare in alto anche al buio. | scaffale stella blu nastri ripostiglio buio
f0221 | museo | Alza gli occhi: qualcuno ha dipinto il paradiso proprio sopra di te. | affresco soffitto barocco santi cielo chiesa antico guardare alto paradiso
f0222 | materia | Ogni ripiano disordinato è una cassetta degli attrezzi per domani. | scaffale attrezzi trapani scatole disordine domani
f0223 | materia | Anche un rotolo di carta ha il suo posto nel mondo. | armadietto rotolo carta morsetti metallo posto
f0224 | materia | Gli strumenti appesi aspettano di stringere qualcosa. | armadietto morsetti strumenti scaffale attesa
f0225 | teatro | Prima del teatro vero, c'è sempre un teatro piccolo dove sbagliare. | modellino teatro palco scenografia grigio prova sbagliare
f0226 | teatro | Nel modellino tutto è possibile: è lì che nasce la scena. | modellino palco scenografia piccolo progetto possibilità
f0227 | teatro | Costruisci la tua città in piccolo, poi abitala in grande. | modellino facciata archi scenografia città costruire
f0228 | bottega | Sul pavimento del laboratorio le cornici diventano porte. | laboratorio scenografia cornici pavimento persone legno porte
f0229 | teatro | Le piccole luci rosse aspettano il pubblico che non è ancora arrivato. | luci rosse balconata pareti bianche teatro attesa pubblico
f0230 | teatro | Un palco vuoto è il silenzio prima della prima parola. | palco vuoto buio teatro silenzio scena inizio
f0231 | teatro | Le poltrone vuote ricordano che ogni spettacolo comincia da chi guarda. | poltrone platea sala teatro pubblico vuoto spettacolo
f0232 | teatro | Le luci sono accese: ora tocca a te salire. | palco luci scala teatro scena coraggio
f0233 | teatro | La tua ombra è già in scena, anche se tu non lo sai. | palco pavimento ombra luce tavole teatro
f0234 | teatro | Sulle assi consumate camminano tutti quelli che hanno avuto coraggio. | tavole palco consumate ombra luce coraggio
f0235 | teatro | Una scala sul palco: per arrivare in alto, a volte serve la finzione. | scala palco luci teatro salire finzione
f0236 | teatro | Anche il passo incerto lascia un segno sul palcoscenico. | pavimento scala sfocato passo palco incertezza
f0237 | teatro | Dietro le quinte, le scatole contengono gli spettacoli di domani. | palco scatole muro verde quinte deposito domani
f0238 | teatro | Un proiettore solo su un tavolino: basta un fascio di luce per raccontare. | proiettore tavolo palco luce raccontare
f0239 | teatro | La luce che proietti fuori è quella che hai coltivato dentro. | proiettore tavolo luce immagine dentro
f0240 | teatro | Tra le quinte si aspetta in silenzio il proprio momento. | quinte buio sipario attesa momento silenzio
f0241 | teatro | Il buio delle quinte protegge chi sta per entrare. | quinte buio pannelli teatro proteggere entrare
f0242 | teatro | Una porta nera è solo una scena che non si è ancora aperta. | porta nera sipario buio passaggio
f0243 | teatro | Una bicicletta ferma dietro le quinte sogna di attraversare il palco. | bicicletta cerchio quinte vecchia sogno viaggio
f0244 | teatro | Ogni attrezzo di scena ha recitato in mille storie diverse. | quinte scaffale attrezzi scena verde storie
f0245 | teatro | I fondali appoggiati al muro custodiscono paesaggi ripiegati. | fondali legno pannelli quinte finestra paesaggi
f0246 | teatro | Le strutture nascoste reggono tutto ciò che il pubblico vede. | strutture legno nero quinte nascosto reggere
f0247 | teatro | Dietro ogni scena c'è qualcuno che veglia sul fuoco. | quinte estintore legno buio vegliare fuoco
f0248 | teatro | Un pannello scritto a matita è un progetto che ancora può cambiare. | pannello legno matita quinte progetto cambiare
f0249 | teatro | Nella cabina di regia si accende tutto quello che vedi. | regia scatole polistirolo cabina tecnica finestra
f0250 | teatro | Chi tira i fili resta spesso nel buio. | regia cavi monitor polistirolo buio tecnica
f0251 | teatro | Dalla finestra della regia, il mondo è un altro spettacolo. | regia finestra arco mixer scrivania
f0252 | teatro | Mentre la città dorme, le scatole aspettano di essere aperte. | finestra città notte scatole cassa regia
f0253 | teatro | Una stanza nera è una pagina pronta per la luce. | stanza nera griglia scala pannello buio
f0254 | teatro | Ogni uscita di scena è anche un ingresso da qualche parte. | corridoio uscita scale quinte ombra
f0255 | fuori | Le scale di ferro portano sempre a un piano che non conosci. | scale ferro gradini salire piano
f0256 | corpi | Un abito rosso aspetta qualcuno che abbia il coraggio di indossarlo. | costume rosso abito manichino stanza teatro coraggio
f0257 | corpi | Indossare un ruolo è un modo per scoprire chi sei. | costume rosso abito ruolo manichino identità teatro
f0258 | fuori | Guarda in giù solo per ricordarti quanto sei salito. | scale tromba ringhiera alto vertigine
f0259 | corpi | In camerino anche le statue si preparano a entrare in scena. | camerino manichini statua gesso seduta specchio teatro
f0260 | corpi | Davanti allo specchio illuminato nessuno è ancora il suo personaggio. | camerino specchio luci manichini lavandino trucco
f0261 | corpi | Un corpo di gesso seduto aspetta che qualcuno gli racconti la fine. | statua gesso seduta uomo manichini sacchi attesa
f0262 | corpi | Anche la pietra si stanca e appoggia la testa. | statua gesso stanchezza corpo pensiero
f0263 | corpi | Chi resta immobile a lungo impara ad ascoltare. | statua gesso seduto immobile ascolto
f0264 | corpi | Le piume sono il modo in cui un abito dice di voler volare. | manichino costume piume gonna blu abito volare
f0265 | corpi | I corpi senza testa ascoltano con tutta la pelle. | manichini torso oro bianco corpo
f0266 | materia | Un contrabbasso a riposo trattiene tutte le note che non ha suonato. | contrabbasso strumento musica riposo note silenzio
f0267 | teatro | Socchiusa, la porta ti lascia scegliere se restare. | porta socchiusa buio stanza scegliere
f0268 | materia | Anche lo sguardo che corre lascia una traccia. | sfocato movimento pavimento corsa fretta
f0269 | museo | Un quadro appoggiato sul cavalletto non ha ancora finito di parlare. | quadro dipinto cavalletto religioso antico museo
f0270 | museo | Le storie antiche ripetono sempre le stesse domande. | quadro dipinto parete viola antico storia
f0271 | corpi | Un volto di bronzo ricorda chi siamo stati. | busto bronzo piedistallo volto museo memoria
f0272 | museo | Nel quadro più grande c'è sempre qualcuno che sta chiedendo aiuto. | quadro grande dipinto scena drammatica museo aiuto dolore
f0273 | corpi | Stringersi le ginocchia è un modo di tenersi insieme. | scultura nera seduta ginocchia raccolta solitudine
f0274 | corpi | Ciò che è crollato può ancora essere un'opera. | scultura crollata pavimento rottura museo
f0275 | corpi | Gli occhi vuoti di una scultura vedono il tempo. | busto bronzo moderno volto tempo museo
f0276 | museo | Le mani raccontano tutto quello che il volto nasconde. | fotografie bianco nero mani volti museo
f0277 | corpi | Seduta in alto, la figura bianca aspetta senza fretta. | scultura bianca seduta donna attesa calma
f0278 | museo | A ogni banchetto c'è chi festeggia e chi guarda dalla soglia. | quadro barocco banchetto festa folla museo
f0279 | corpi | Tre volti in fila discutono da secoli senza parlare. | busti tre piedistalli volti museo silenzio
f0280 | corpi | Il bronzo trattiene un gesto che non finisce mai. | statua bronzo seduto giovane gesto
f0281 | corpi | La statua indica una direzione: tocca a te decidere se seguirla. | statua donna antica marmo indicare direzione scala
f0282 | corpi | Il leone di bronzo custodisce l'accademia e i suoi sogni. | leone bronzo lapide accademia custode forza coraggio
f0283 | museo | Napoli dipinta in due quadri: un fiore e un tramonto. | quadri napoli fiore tramonto colori arte
f0284 | fuori | Dietro la porta a vetri qualcuno ti aspetta, anche se non lo vedi. | porta vetri arco attesa figura
f0285 | muri | Una porta piena di adesivi ha conosciuto troppe mani per avere paura. | porta nera adesivi stretta muro pietra
f0286 | muri | Tutto ritorna: è la regola del loop. | loop scritta ritorno ripetizione ciclo tempo
f0287 | corpi | Seduto sulla roccia, il pensatore di marmo non ha fretta. | statua marmo seduto roccia pensiero calma
f0288 | fuori | Un cubo rosso in un corridoio di marmo è una domanda gentile. | cubo rosso corridoio marmo porta domanda
f0289 | fuori | Un corridoio vuoto è una frase che aspetta il suo soggetto. | corridoio vuoto porta finestre silenzio
f0290 | museo | I corpi dipinti raccontano tutto quello che il dolore non dice. | quadri nudi corpi dolore parete viola busto museo
f0291 | museo | Chi si siede ad aspettare il tramonto ha già capito tutto. | quadro tramonto figura seduta attesa malinconia museo
f0292 | corpi | Una figura di marmo raccoglie i fiori anche nel buio. | scultura marmo donna fiori buio delicatezza
f0293 | corpi | Il bronzo urla con la bocca aperta: lascia uscire la tua voce. | scultura bronzo urlo bocca aperta uomo grido dolore voce
f0294 | corpi | Anche un volto ferito sa guardare lontano. | busto gesso volto ferito sguardo lontano
f0295 | museo | Le forme si incastrano solo se lasci uno spazio vuoto. | scultura moderna forme giallo nero rosso astratto incastro
f0296 | museo | Dentro un oblò trovi tutto il mare che hai dimenticato. | opera cerchio oblò mare collage azzurro memoria
f0297 | museo | Arte e laboratorio: ogni quadro è stato prima un tentativo. | museo arte laboratorio quadri parete tentativo
f0298 | museo | Quindici piccoli quadri neri fanno un unico silenzio. | serie disegni neri parete museo silenzio
f0299 | museo | Ripetere la stessa immagine è un modo di non dimenticarla. | fotografie serie ripetizione mare blu rosso museo memoria
f0300 | museo | Ciò che è sospeso lascia sempre un'ombra più grande di sé. | scultura nera sospesa ombra fili museo
f0301 | museo | Ogni foglio antico è una lettera mai spedita. | opera carta scritta foglia antico lettera
f0302 | materia | I gessetti spezzati colorano lo stesso. | gessetti colori pastelli spezzati disegno
f0303 | museo | Il richiamo dell'Oriente è un volto che non ti guarda. | quadro volto donna oriente cornice oro museo
f0304 | museo | Il buio e la luce: dove stai tu adesso? | scritta buio luce parete nera museo scelta
f0305 | museo | All'alba del paesaggio, qualcuno si è già messo dei fiori in testa. | quadro donna fiori cornice oro alba museo
f0306 | museo | La scuola dei paesaggi insegna a guardare lontano. | quadri paesaggi napoli posillipo parete verde museo mare
f0307 | fuori | Una finestra alta in una sala buia è una speranza ben costruita. | finestra alta sala buia luce speranza
f0308 | museo | Una panca davanti a una finestra coperta: siediti e immagina il fuori. | panca legno finestra coperta museo attesa
f0309 | fuori | Dopo la pioggia, la terrazza diventa uno specchio rosso. | terrazza pioggia riflesso rosso palazzo archi bagnato
f0310 | fuori | Sui tetti bagnati la città si guarda allo specchio. | terrazza tetti pioggia città palazzo riflesso
f0311 | fuori | Una scala di marmo consumata ricorda tutti quelli che sono saliti prima di te. | scala marmo balaustra salire antico
f0312 | fuori | Oltre il vetro, una biblioteca chiede di chiudere la porta. | porta vetri biblioteca libri studio silenzio
f0313 | fuori | Entra in biblioteca: i libri ti aspettano anche quando sei stanco. | biblioteca porta vetri libri studio
f0314 | fuori | Un corridoio infinito di archi ti insegna la pazienza. | corridoio archi volte infinito prospettiva marmo
f0315 | fuori | Nel buio, una porta socchiusa lascia passare una luce bianca. | porta buio luce corridoio notte
f0316 | fuori | Il grande albero nel cortile ha visto passare tutti. | albero cortile pioggia palazzo verde natura tempo
f0317 | fuori | Le radici sanno aspettare più dei rami. | radici albero tronco terra natura pazienza
f0318 | fuori | Tra le foglie, il palazzo sembra respirare. | alberi foglie palazzo cortile verde natura
f0319 | fuori | Dal balcone dell'accademia si vede tutto il tempo che passa. | balcone palazzo finestre archi alto tempo
f0320 | fuori | Il cartello di divieto non ferma la luce che filtra dalla porta. | porta vetri divieto cartello luce
f0321 | muri | Puntiamo al disastro: a volte è lì che nasce l'arte. | scritta disastro telo argento ironia arte
f0322 | fuori | La palma nel cortile ricorda che anche qui c'è il sud. | palma cortile palazzo alberi verde sud napoli
f0323 | muri | Ogni divieto ha qualcuno che lo ha scritto con cura. | cartello vietato fumare divieto regola
f0324 | muri | Una porta coperta di firme è un libro che tutti hanno scritto. | porta scritte graffiti firme cuori parole amore
f0325 | materia | Un lucchetto chiuso su un cassetto: alcune cose si custodiscono, altre si liberano. | lucchetto cassetto chiuso segreto custodire
f0326 | materia | La mappa d'emergenza ti dice dove sei, non dove stai andando. | mappa emergenza piano scale direzione
f0327 | fuori | In fondo agli archi gialli, le persone sono solo ombre che camminano. | corridoio archi giallo persone ombre lontano
f0328 | muri | Una porta con un nome scritto a mano ti accoglie più di un'insegna. | porta cartello toilette donne
f0329 | muri | Le mani dipinte sulla porta dicono: siamo passati di qui. | mani dipinte porta impronte bianco blu traccia
f0330 | fuori | Una porta grigia in un muro bianco: a volte la via è la più semplice. | porta grigia muro bianco semplice uscita
f0331 | muri | Sotto il rilievo antico, un defibrillatore: l'arte e il cuore insieme. | rilievo antico defibrillatore cuore muro
f0332 | muri | Il cineclub ti invita: le storie migliori si guardano insieme. | cineclub manifesto cinema adesivi insieme storie
f0333 | muri | Una figura disegnata sulle scale ti fa compagnia mentre sali. | disegno figura donna scale graffiti compagnia
f0334 | muri | I corpi disegnati sul muro parlano di desiderio e di libertà. | disegni corpi donne muro graffiti desiderio libertà
f0335 | muri | Chi disegna sui muri lascia il proprio corpo alla città. | disegni corpi muro graffiti scritte
f0336 | muri | Il volto sulle scale ha una ribellione negli occhi. | disegno volto anarchia scale graffiti ribellione
f0337 | fuori | Un passaggio sotto l'arco è sempre un piccolo viaggio. | passaggio arco corridoio pietra viaggio
f0338 | fuori | Sotto le volte bianche, la ringhiera guarda chi arriva. | volte cortile ringhiera arco graffiti
f0339 | muri | Ogni poesia scritta sul muro è un regalo per chi passa. | poesia scritta muro manifesto alter ego parole
f0340 | fuori | Una porta socchiusa di notte è un invito a non avere paura. | porta arco notte socchiusa paura
f0341 | fuori | Sulla terrazza bagnata, le scritte resistono alla pioggia. | terrazza pioggia muro scritte persona cielo grigio città
f0342 | muri | Una ragazza disegnata a matita guarda chi passa senza giudicare. | disegno ragazza volto matita muro sguardo
f0343 | fuori | Tre sedie sulla terrazza aspettano una conversazione. | terrazza sedie muro scritte conversazione attesa
f0344 | muri | Anche una porta antica può sorridere con un disegno di gesso. | porta legno antica disegni gesso personaggi sorriso
f0345 | muri | Le piccole figure in fila si tengono per mano contro il muro. | disegno figure fila mano muro ombra amicizia
f0346 | muri | Un volto incorniciato di verde sembra sapere un segreto. | disegno volto ragazza verde muro segreto
f0347 | muri | La balaustra di marmo regge anche gli adesivi di una generazione. | adesivi graffiti balaustra scala marmo generazione
f0348 | muri | Ridi forte, con la bocca spalancata: è un premio anche questo. | manifesto premio volto bocca aperta occhiali risata cinema
f0349 | fuori | Una stanza vuota con una sedia: il posto è libero, siediti. | stanza vuota sedia finestra arco tavoli posto
f0350 | fuori | Attraverso la finestra ad arco si vede un altro mondo che ti somiglia. | finestra arco grata cortile palazzo mondo
f0351 | materia | Gli armadi neri in fila custodiscono silenzi ordinati. | armadi neri stanza fila silenzio ordine
f0352 | materia | Nel buio, gli armadi diventano monoliti. | armadi neri buio stanza monolito mistero
f0353 | fuori | Oltre la sedia, un corridoio di luce ti chiama. | corridoio luce sedia arco ringhiera chiamata
f0354 | fuori | Una stanza sotto un arco bianco: lo spazio per pensare. | stanza arco bianco tavoli spazio pensiero
f0355 | fuori | La porta socchiusa ti dice: c'è ancora un'altra stanza. | porta socchiusa uscita stanza continuare
f0356 | fuori | Nel buio totale, il cartello verde è l'unica stella. | buio uscita cartello verde luce stella notte
f0357 | muri | Un angolo pieno di cartelli: ogni regola ha una sua spirale. | cartelli estintore spirale angolo regole
f0358 | museo | In una teca, i paesaggi dell'amore sono piccoli libri aperti. | teca libri vetrina paesaggi amore museo carta
f0359 | museo | Una vetrina vuota è ancora piena di quello che vi è stato. | teca vetrina vuota museo memoria
f0360 | museo | Nella teca c'è scritto loop: tutto torna anche qui. | teca loop libri foto museo ritorno
f0361 | museo | Piccoli oggetti in vetrina diventano reliquie del quotidiano. | teca vetrina oggetti museo quotidiano
f0362 | museo | Il cielo dipinto sopra di te è una promessa fatta a mano. | affresco soffitto cielo angeli barocco promessa
f0363 | fuori | Un corridoio scuro finisce sempre in una luce lontana. | corridoio buio archi luce fondo speranza
f0364 | fuori | Dall'alto, il giardino è un'isola verde in mezzo al palazzo. | giardino cortile palme alberi alto verde isola
f0365 | fuori | Il cortile dall'alto sembra un disegno che respira. | cortile giardino palme alto pioggia verde
f0366 | fuori | Porta dopo porta, la casa si fa più profonda. | porta corridoio uscita stanze profondità
f0367 | fuori | Dietro il cancello aperto, le scale portano a un muro scritto. | cancello scale muro scritte entrata
f0368 | fuori | Una sedia sola sulla terrazza bagnata guarda il cielo grigio. | terrazza sedia pioggia cielo grigio solitudine
f0369 | fuori | L'impalcatura ricorda che ogni stanza si può ricostruire. | impalcatura stanza porta ricostruire cantiere
f0370 | fuori | Le scale che girano su sé stesse insegnano a non avere fretta. | scale spirale ringhiera alto vertigine
f0371 | fuori | Dietro le grate della finestra, la città continua la sua vita. | finestra grate scale palazzo città
f0372 | materia | Sedie impilate nell'ombra riposano dopo tante lezioni. | sedie impilate ombra deposito riposo
f0373 | corpi | Un busto rosso nel corridoio aspetta un vestito nuovo. | manichino rosso busto corridoio ritratto attesa
f0374 | museo | Alza lo sguardo: la cupola dipinta ha un occhio al centro. | cupola affresco soffitto occhio centro cielo
f0375 | volti | Un ritratto appeso alle piastrelle sorride a chi entra. | foto ritratto ragazze sorriso piastrelle amicizia
f0376 | muri | Un vano pieno di graffiti è una caverna dei giorni nostri. | graffiti vano porta disegni caverna
f0377 | materia | Un orologio blu senza tempo fa la guardia a una sedia. | orologio blu sedia disegni sole tempo
f0378 | fuori | Il corridoio più lungo finisce dove decidi di fermarti. | corridoio lungo volte prospettiva infinito fermarsi
f0379 | fuori | I tronchi alti del cortile non chiedono il permesso di crescere. | alberi tronchi cortile giardino palazzo crescere natura
f0380 | fuori | Un futuro è possibile: lo dice anche la scala. | scala stendardo futuro possibile balaustra speranza
f0381 | corpi | Nell'atrio, le statue bianche discutono tra loro in silenzio. | statue bianche atrio marmo accademia silenzio
f0382 | corpi | Il David in cima alla scala ricorda che si può essere piccoli e coraggiosi. | statua david scala stendardo coraggio accademia
f0383 | fuori | Il grande portone a vetri lascia vedere il dentro e il fuori insieme. | portone vetri ingresso atrio scale luce
f0384 | fuori | Il giardino del palazzo è un respiro verde dopo la pioggia. | giardino palazzo palme verde pioggia respiro natura
f0385 | bottega | Il rullo stende il giallo come un mattino nuovo. | rullo stampa giallo carta incisione mattino
f0386 | bottega | Dal torchio escono volti che prima vivevano solo nel legno. | stampa incisione volto carta torchio mano
f0387 | bottega | Una mano guantata disegna occhi sul pavimento del mondo. | mano guanto pittura disegno occhi colori pavimento
f0388 | corpi | Nel corridoio delle statue, ognuna ha la sua posa e la sua attesa. | corridoio statue gesso archi azzurro attesa
f0389 | bottega | L'aula vuota conserva il rumore del lavoro di ieri. | aula tavolo laboratorio finestre arco accademia
f0390 | bottega | Un uomo solo al tavolo: anche il silenzio è una lezione. | aula uomo lavoro tavolo laboratorio silenzio
f0391 | bottega | Il laboratorio di scultura è un disordine che diventa forma. | laboratorio scultura gesso sacchi disordine forma
f0392 | bottega | Le forme bianche crescono come coralli in un'aula. | scultura bianca forme coralli laboratorio
f0393 | bottega | Sul banco, l'argilla ricorda le mani che l'hanno toccata. | banco argilla gesso sculture laboratorio mani
f0394 | bottega | Una figura in fiamme davanti al rosso: la creazione brucia. | scultura fiamma figura rosso pallet creazione fuoco
f0395 | bottega | Gli armadietti pieni di colori sono archivi di tentativi. | armadietti colori barattoli laboratorio tentativi
f0396 | bottega | Ogni bacheca è un piccolo museo di quello che si è provato. | bacheca laboratorio sculture fogli prove
f0397 | bottega | Pezzi di argilla in fila aspettano il fuoco. | argilla pezzi tavolo laboratorio fuoco attesa
f0398 | bottega | Il ceppo e il martello: la scultura comincia con un colpo. | ceppo martello scultura laboratorio legno colpo
f0399 | bottega | Le forme strane del laboratorio sono sogni di un'altra natura. | sculture forme laboratorio finestra sogno
f0400 | bottega | Una tela sospesa in una cornice di legno è un vento fermato. | tela sospesa cornice legno installazione vento
f0401 | bottega | Sotto le volte bianche, i tavoli di scultura aspettano il giorno. | aula scultura volte tavoli laboratorio luce accademia
f0402 | bottega | Una ciotola di gesso sul tavolo giallo: il mondo comincia piccolo. | tavolo giallo gesso scaffale laboratorio scultura
f0403 | bottega | Sopra l'armadio, le teste di argilla guardano la finestra. | armadio teste argilla sculture finestra laboratorio
f0404 | bottega | Tra calchi e trespoli, ogni scultura è a metà del suo viaggio. | laboratorio calchi sculture trespoli disordine viaggio
f0405 | bottega | I piccoli pezzi di terracotta giocano a scacchi sul tavolo. | terracotta pezzi tavolo giallo scacchi gioco scultura
f0406 | bottega | I secchi di cocci sono pieni di forme che ricominceranno. | secchi cocci gesso frammenti riciclo ricominciare
f0407 | bottega | I cavalletti nel buio aspettano che torni la luce del mattino. | cavalletti legno buio aula pittura finestre attesa
f0408 | fuori | La grande scala di marmo porta su, dove dice "un futuro". | scala marmo balaustra statue stendardo futuro salire
f0409 | fuori | "Quando", dice lo stendardo: la scala risponde salendo. | scala marmo stendardo quando domanda balaustra
f0410 | muri | Sotto la carta da parati, il muro mostra la sua pelle. | carta parati strappata muro pelle strati memoria
f0411 | fuori | Il cortile grande, con le sue palme, tiene in mano il cielo. | cortile palazzo palme alberi giardino cielo pioggia
f0412 | materia | Una sedia azzurra da sola contro il termosifone aspetta l'inverno. | sedia azzurra termosifone angolo inverno solitudine
f0413 | teatro | Un'impalcatura nel buio è uno scheletro che sogna un soffitto. | impalcatura buio struttura soffitto scheletro
f0414 | bottega | Una ruota di colori dentro una gabbia: la fantasia ha bisogno di una cornice. | ruota colori struttura gabbia sedia arcobaleno fantasia
f0415 | bottega | La ruota dei colori aspetta qualcuno che la faccia girare. | ruota colori struttura sedia arcobaleno girare
f0416 | muri | Un campanello sopra il quadro elettrico: anche l'energia chiede il permesso. | campanello quadro elettrico pericolo muro energia
f0417 | fuori | Una porta in fondo a una stanza vuota è la risposta più semplice. | porta stanza vuota pavimento legno uscita
f0418 | muri | Sullo stipite qualcuno ha scritto un numero: anche i muri contano. | stipite porta scritta numero muro
f0419 | muri | I segni sul muro sono una mappa che nessuno ha disegnato. | muro intonaco segni graffi chiodi mappa
f0420 | muri | Una scatola arrugginita ha ancora qualcosa da dire. | scatola metallo ruggine scritte defibrillatore muro
f0421 | materia | Un trabattello in un angolo: ogni altezza ha la sua scala. | trabattello impalcatura angolo porta altezza
f0422 | materia | Fogli bianchi in una scatola: ogni pagina è ancora possibile. | fogli bianchi scatola carta possibilità vuoto
f0423 | bottega | Nel laboratorio di restauro, i quadri guariscono piano. | restauro quadri telaio laboratorio cura antico
f0424 | bottega | Due ritratti antichi distesi sul tavolo aspettano di tornare a guardare. | restauro ritratti antichi tavolo cura volti
f0425 | bottega | Il carrello del restauratore è una farmacia per i quadri. | carrello flaconi restauro lavandino cura
f0426 | muri | Il pulsante d'allarme ricorda che si può sempre chiedere aiuto. | allarme pulsante incendio muro aiuto
f0427 | bottega | Nel cassetto dei barattoli, ogni colore ha una ricetta segreta. | cassetto barattoli colori pigmenti righello restauro
f0428 | fuori | Sotto l'arco, una tenda arrotolata nasconde ancora il cielo. | arco tenda soffitto tubi alto
f0429 | fuori | Lo scaldabagno sotto l'arco: anche il calore ha i suoi angoli. | arco scaldabagno tenda tubi muro
f0430 | bottega | L'armadio dei pennelli e dei barattoli è il guardaroba del colore. | armadio pennelli barattoli colori scaffale
f0431 | muri | Una centralina sul muro bianco veglia su tutti. | centralina muro bianco cartello vegliare
f0432 | fuori | Guarda in alto: anche gli angoli più bianchi hanno una sirena. | soffitto angolo sirena canaline alto
f0433 | fuori | La pittura scrostata sopra la porta racconta l'umidità degli anni. | porta pittura scrostata soffitto tempo umidità
f0434 | fuori | Ogni uscita di sicurezza ha la sua freccia: scegli quella giusta. | uscita sicurezza frecce soffitto cartelli direzione
f0435 | fuori | Le luci al neon disegnano linee nel cielo del soffitto. | luci neon soffitto linee bianco
f0436 | materia | Un lavandino con gli stracci appesi: anche la pulizia è un rito. | lavandino stracci rubinetto piastrelle pulizia rito
f0437 | fuori | Due luci al soffitto, una sopra l'altra, si tengono compagnia. | luci soffitto neon alto compagnia
f0438 | muri | Sul muro di un sottoscala, una A e un segno: qualcuno è passato. | muro sottoscala scritta segno termosifone porta
f0439 | fuori | La pioggia sul cortile rende tutto più verde. | cortile palazzo palme alberi pioggia verde
f0440 | fuori | Quando scende il buio sul cortile, gli alberi diventano ombre. | cortile buio sera alberi palazzo ombre notte
f0441 | muri | Un trespolo davanti al muro blu: anche il vuoto ha un piedistallo. | trespolo muro blu piedistallo vuoto angolo
f0442 | muri | Il blu e il giallo sul muro ricordano un mare che qualcuno ha dipinto. | muro blu giallo dipinto porta mare colori
f0443 | materia | Un pannello bianco appoggiato aspetta di diventare un'idea. | pannello bianco bagno finestra piastrelle idea
f0444 | materia | Uno spazzolone nell'angolo: la pulizia è un modo di ricominciare. | spazzolone pulizia angolo piastrelle ricominciare
f0445 | fuori | La porta vecchia e scrostata si apre ancora sul cortile. | porta vecchia legno scrostata cortile apertura
f0446 | fuori | Le scale sotto le volte ti portano dove gli altri sono già passati. | scale volte archi balaustra porta salire
f0447 | fuori | La scala svolta: non sai cosa c'è dopo, ma la luce sì. | scale volte svolta luce pietra
f0448 | muri | La vetrina coperta di volantini è il giornale di chi studia qui. | vetrina volantini graffiti balaustra notizie studenti
f0449 | muri | Le tecniche dell'incisione indicano due strade: prova entrambe. | cartello incisione frecce graffiti scatole direzione
f0450 | materia | Una cassetta vuota nel muro conserva ancora i suoi fili. | cassetta muro vuota fili porta
f0451 | fuori | Dalla porta socchiusa si vede una stanza dove qualcuno sta studiando. | porta socchiusa stanza corridoio studio
f0452 | fuori | Il portone in cima ai gradini ha già visto tutte le tue esitazioni. | portone scale gradini avvisi arco esitazione
f0453 | muri | Dove il muro si è rotto, si vede la pietra che lo tiene in piedi. | muro rotto intonaco pietra porta ferita struttura
f0454 | fuori | Dietro i vetri smerigliati, il verde è solo un'idea. | finestra vetri verde alberi idea
f0455 | muri | Una freccia verde su un muro crepato: si va avanti lo stesso. | freccia verde muro crepe avanti direzione
f0456 | fuori | Il corridoio di marmo ti chiede di camminare piano e guardare lontano. | corridoio marmo volte prospettiva lontano camminare
f0457 | materia | Un frammento sul pavimento di marmo: anche le cose piccole lasciano un segno. | marmo pavimento frammento piccolo segno
f0458 | materia | Le ruote colorate dicono che il gioco non è finito. | ruote colorate biciclette installazione gioco colori
f0459 | materia | Una pila di scatole è un trasloco che non è ancora deciso. | scatole cartone pila trasloco decisione
f0460 | materia | Sotto le scale si nascondono le cose di cui non sappiamo fare a meno. | scale scatole scaffali sottoscala deposito
f0461 | fuori | Da una porta aperta si vede un pianoforte che aspetta. | porta aperta pianoforte stanza musica attesa
f0462 | fuori | Il giardino del cortile, sotto la pioggia, è il cuore verde dell'accademia. | cortile giardino palme pioggia ombrello palazzo verde
f0463 | fuori | Le finestre ad arco si guardano da una parte all'altra del cortile. | palazzo finestre archi cortile palme cielo
f0464 | materia | Il mosso dice che stavi andando di fretta: fermati. | sfocato mosso fretta movimento
f0465 | fuori | Dalla porta socchiusa si intravede un tavolo pieno di lavoro. | porta socchiusa stanza tavolo lavoro
f0466 | muri | Accanto all'idrante, un telefono: in caso di fuoco, chiama qualcuno. | idrante telefono muro estintore emergenza
f0467 | materia | Lo spigolo di pietra ha retto il palazzo per secoli. | pietra spigolo muro antico reggere
f0468 | fuori | Il corridoio con le statue in fondo: camminando, diventi parte della scena. | corridoio volte statue marmo prospettiva
f0469 | fuori | Dall'alto, la scala e il David si guardano in silenzio. | scala alto statua david stendardo prospettiva
f0470 | fuori | La grande scala si divide in due, come le scelte. | scalone doppio statue stendardi finestra scelta
f0471 | fuori | Il portone verde aperto mostra solo un armadio bianco: non tutto è un segreto. | portone verde aperto armadio passaggio
f0472 | fuori | L'ascensore di vetro sale senza fare domande. | ascensore vetro metallo salire
f0473 | materia | Un tavolino rotondo in un angolo: qui si fanno le domande importanti. | tavolino rotondo angolo legno domande
f0474 | corpi | Un braccio di gesso esce dal muro: qualcuno ti tende la mano. | braccio gesso muro mano aiuto scultura
f0475 | materia | Il fondo del pozzo nasconde sempre una piccola cosa luccicante. | pozzo fondo buco pietra profondo segreto
f0476 | materia | Una crepa nel marmo è una strada che nessuno ha percorso. | marmo crepa pavimento linea strada
f0477 | materia | I gradini consumati contano i passi di tutti. | gradini marmo consumati scala passi tempo
f0478 | volti | Tre teste chine sulla stessa cosa sono già una piccola famiglia. | ragazzi tre volti studio insieme amicizia famiglia
f0479 | officina | Un'aula con un limone dipinto e un fiore sul tavolo: il futuro comincia così. | aula tavolo fiore limone persone futuro scuola
f0480 | volti | Chi canta senza fingere non ha bisogno di nascondersi. | ragazzo cuffie microfono rap musica copertina canto voce
f0481 | sospesi | Le lune blu ti ricordano che la idea buona è quella che capisci dopo. | secchi blu appesi soffitto scritta atto amore idea
f0482 | muri | Sfrattiamo i ratti: a volte un muro dice quello che pensiamo tutti. | scritta muro sfrattiamo ratti rabbia
f0483 | fuori | Dalla finestra, la facciata di fronte sembra un teatro di balconi. | finestra palazzo balconi facciata napoli città
f0484 | officina | Davanti al portatile, un uomo con la barba guarda una nebulosa nascere. | uomo barba computer nebulosa schermo lavoro creare
f0485 | volti | Seduti sui cubi rossi, ognuno pensa una cosa diversa. | ragazzi seduti cubi rossi gruppo pensieri incontro
f0486 | volti | Alla stazione si parte insieme anche quando ognuno ha il suo zaino. | stazione torino ragazzi zaini viaggio partenza gruppo
f0487 | officina | Sotto le bandiere, qualcuno lavora in silenzio. | festoni bandiere tavolo ragazzo lavoro laboratorio
f0488 | sospesi | Le lune blu si accendono quando nessuno le guarda. | secchi blu appesi soffitto luce scritta atto amore
f0489 | volti | Coprirsi gli occhi è a volte il modo migliore per vedere. | ragazza mano occhi stanchezza vergogna pensiero
f0490 | materia | Il caricatore, il quaderno blu e il foglio rosso: gli strumenti di una giornata. | caricatore quaderno blu foglio rosso tavolo quotidiano
f0491 | officina | Dentro una bolla di plastica tutto il mondo diventa morbido. | bolla plastica gonfiabile ragazzi installazione morbido trasparente
f0492 | officina | Sotto i festoni il lavoro continua, colorato e silenzioso. | festoni bandiere tavolo ragazzo lavoro laboratorio colori
`;

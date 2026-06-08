# AlienPlanet loggbok

Kunskapsdomän: Aliens har en hemplanet. En planet kan ha flera alien-typer.

## 2026-05-19 Uppstart

### FÖRMIDDAG

#### Frontend, UX

##### Primärt ansvar:

- Rebecka
- Lisette
- Emelie

##### Stack:

- React
- TypeScript
- Tailwind

#### Backend, DB

##### Primärt ansvar:

- Mattias
- Linnéa

##### Stack:

- MySQL
- Node
- Express

✅ Ansvarsområden  
✅ Stack  
✅ Initierat repo med "project"

### EFTERMIDDAG

Enkel DB-design  
![Enkel databasdesign](./img/logg_db_data.png)

Första utkast endpoints  
![Endpoints](./img/logg_endpoints.png)

Skiss för att undersöka vad appen ska kunna göra  
![Vyer](./img/logg_vyer.png)

### Issues Done

✅ Frontend Routing installerad / Basic setup
✅ Frontend mappstruktur
✅komprimera och importera bilder på aliens

### Code hygien

- Branch baserat på issue

✅ Dependencies installerade
✅ Mappstruktur på plats
✅ Script för seeding av DB

## 2026-05-20

### Agilt arbete

- Vi har definerat mer vad varje kolumn betyder och innebär

### DAGENS AGENDA

Mattias

- Göra klart seeding bugs (2 h)
  Admin server för att stoppa initsiering av pool före databasen finns
- Seed ändring (5 min)
  Seed skapade fortfarande planet_image column för planet table, tog bort det
- App.js (30 min)

- Routes
  (30 min)

Lisette

✅ Generera planeter ( 30 min)

✅ Generera bakgrundsbilder ( 30 min )

![Genererade bilder](./img/genererade_bilder.png)

✅ Definera typer för Aliens och Planeter (30 min)

✅ Bygga AlienCard -kompontet (30 min)

✅ Bygga PlanetCard -kompontet (10 min)

Rebecka

✅ Bygga återanvändbar listkompontet (2 h)

✅ Angett Planets-vyn mockdata för att testa List & PlanetCard-component

✅ Angett Aliens-vyn mockdata för att testa List & AlienCard-component

Linnéa (mestadels frånvarande 20/5)

✅ Code reviews gjorda under dagen och i efterhand 21/5

✅ Query function export från config/db.js (i efterhand 21/5)

✅ Alien + Aggression types (i efterhand 21/5)

✅ Alien models: All aliens, alien by id, aliens by aggression (i efterhand 21/5)

## 2026-05-25

### Avslut sprint 0 med retrospektiv, 10:00 - 11:00

#### Vad har vi gjort hittills (summering)

**Agilt**

- Gått från lösare work items till lite mer nyanserade punkter
- Formatering work items (med märkning, BE resp FE)
- Börjat tänka i issues / sub issues
- Skrivit bra logg, och delat på ansvaret för loggeriet

**Frontend**

- Återanvändbar list-komponent
- Card-komponenter till Aliens och Planets
- Interfaces för Aliens och Planets
- UI-styling startsida
- Navigering
- Temporär mockdata för test
- Routing
- Bilder för Aliens och Planets

**Backend**

- Layered architecture mappstruktur implementerad
  ```
  backend/
  ├── dist/
  ├── public/
  │   └── images/
  │        ├── Aliens/
  │        ├── Background/
  │        └── Planets/
  └── src/
      ├── app.ts
      ├── server.ts
      ├── config/
      ├── controller/
      ├── middleware/
      ├── models/
      ├── repositories/
      ├── routes/
      ├── seed/
      ├── services/
      ├── types/
      └── utils/
  ```
- Databaskonfiguration och queryexport
- Seeding med två tabeller (aliens, planets), script för att köra seed
- Server + App
- Typer för aliens + aggression

#### Vad funkar bra som vi vill fortsätta med?

- Tidsestimering! Bra träning och bra för projektet 
- Feature based mappstruktur i frontend pga liten app 
- Branch kopplat till issue! Mycket blir automatiserat, flödet blir tydligt.  
- Github projects, och kopplingen till repot 
- Märkning FE/BE/Alla → Tydlighet direkt i översikten 
- När vi kommunicerar. Viktigt att alla är insatta i hela projektet, oavsett vad man jobbar med.  
- Gruppen har parerat bra för frånvaro, mycket agilt. 
- Löpande pull requests och reviews 
- Vissa samtal kan föras i respektive mindre arbetsgrupp, för att hålla samtalet relevant för alla i den “stora kanalen”

#### Vad ska vi sluta göra?

- Springa för snabbt. Det är frestande att bara jobba på, men vi påminner oss om fokus för kursen och prioriterar momenten som har med agil projektmetodik att göra. 
- Tomma work items (skriv en beskrivning av vad den ska åstadkomma, sedan räcker det bra i kombination med självförklarande kod i PR)

#### Vad skulle vi kunna testa att göra?

- Bli bättre på att jämföra faktisk nedlagd tid med tidsestimat, för utvärdering och lärdom  
  _Reflektion: Om man estimerar rätt är det ett kvitto på att man verkligen har förstått uppgiften och sin egna förmåga_

- Jobba mer med labels
- Efterlikna funktionaliteten i DevOps genom att manuellt skriva om det är Epic/Feature/Work item, i rubriken innan FE/BE osv i kombination med funktionen sub issues
- Stående punkt på standup: Dema FE/BE, förklara kod etc.
- I work items: Skriv en beskrivning av vad den ska åstadkomma, sedan räcker det bra i kombination med självförklarande kod i PR
- En gruppmedlem assignas per dag för att sköta “gruppdelen” av loggen, koppla till en work item i kanbanboarden för tydlighet

#### Vad ska vi göra härnäst?

- Bryta ut möten för beslutspunkter (behövs t.ex. för att spika appens uttryck)
- Formalisera en sprintplanering
- Träna på features, epics, work items
- Omsätta alla punkter vi har hittat i retro-mötet i vårt vidare arbete

### Workshop - Epics & Features 11:15-11:30

![Workshop i fig jam, epics & featires](./img/logg_workshop.png)

### Sprintplanering 11:30-11:50, 13:00-14:00

![Sprint 1 planering](./img/logg_sprintplanering_sprint1.png)

Reflektion - Det är hårt jobb att planera! Det vore lättare för stundent att bara sätta sig och koda.

![Sprint 1 planering](./img/logg_sprint_1.png)

Epics, features och de work items som hör till pågående sprint förs in i vårt board på github projects.  
Items från sprint 0 arkiveras i ett dedikerat board.

Backlog: Random unrefined items  
Refined: Har bearbetats i grupp, och ska göras men inte innevarande sprint  
Todo: Aktuella för pågående sprint  
In progress: Någon har ansvaret för work item:et, och arbete pågår  
Review: Pull review inskickad  
Done: Reviewat, mergeat och färdigt jobb från innevarande sprint  
Sprint# - Arkiv för respektive sprint

![Sprint 1 planering](./img/logg_github_board.png)

### Dagens jobb

Mattias:
✅ Alien GET endpoint (est 2h, faktiskt 1h 45m)
✅ Planet GET endpoint (est 1h faktiskt 30m)
✅ Gemensamt script för back- och frontend (est 2h, faktiskt 2h 30m) (inkluderande spike)

Linnéa:  
✅ Skapat templates för våra möten i fig-jam  
✅ Grupplogg (est 30m, faktisk tid 45m)  
✅ Skapa api-länk för bild för specifik planet, med route + controller (felhantering, anropa model som i sin tur hämtar static file)  
✅ Skapa api-länk för bild för specifik planet, med route + controller (felhantering, anropa model som i sin tur hämtar static file)  
(Est sammanlagt 2h för bildpunkterna, faktisk tid ca 2h)

Lisette:  
✅ - Genererat två fallback bilder ifall Alien- eller Planet bild inte kan laddas.  
✅ - Impleterat fallbavk om backend inte kan leverera en bild ska ett placeholder-kort visas.
AlienCard visar en alien-placeholder och PlanetCard visar en planet-placeholder via onError på img-taggen. (1 h för båda punkter)

Rebecka:  
✅ - Implementerat fetch-funktion i api.ts för att hämta alla Aliens med felhantering. Skapade även custom hook useAliens som hämtar api-svaret och sparar i state samt error-state för felhantering. (1 1/2h ca)

Emelie:  
✅ - Länkat ihop sidor med knappar och navbar i App.tsx for now.  
✅ - Satte upp en basic styling med Tailwind.

## 2026-05-26

_MATTIAS LOGGAR IDAG_

### Dagens jobb

Mattias:  
✅ -

Linnéa (glömde både att estimera tid samt att kolla hur lång tid det tog):  
✅ - Skapat templates för möten i fig-jam  
✅ - Uppdaterat seed data för att motsvara redan genererade bilder  
✅ - Promptat fram nya bilder för återstående planeter och aliens enligt tidigare etablerad process, för att ha något att visa i appen  
✅ - Middleware för error hantering + refaktorisera 404 till eget middleware

Lisette:  
✅ - Haft möte med frontend hela förmiddagen gällande design  
✅ - Skapat dsignsystem  
✅ - Gjort wireframes/protoyper

Rebecka:  
✅ - Frontendmöte halva dagen för att gemensamt få fram designdokument  
✅ - Styling av navbar och implementerade loggan  
✅ - Försökte testköra endpoints för aliens, fungerar inte än - fortsättning nästa vecka

Emelie:  
✅ - Frontendmöte på förmiddagen för att få fram ett designdokument  
✅ - Lade in bestämda typsnitt och färger i vårt projekt och stylade med dessa.  
✅ - Byggde en statisk modal för att öppna detaljvyn för Aliens och Planets.

# Standup 2026-05-27 09:00-ca 10-00

## Lisette

### Har

- Fetch-funktion för Aliens

### Ska

- Frontendmöte
- få fram designsystem

### Hinder

- Noll

## Emelie

### Har

- Fixat lite med Tailwind
- lagt in basic färger och layout som kommer att ändras.
- Kopplat ihop våra sidor med knappar och navbar.

### Ska

- Frontendmöte och få fram designsystem

### Hinder

- Inget

## Mattias

### Har

- Gjort klart Alien endpoint

### Ska

- Göra klart Planet endpoint, merg:a PR
- eve bugfixes eller error handling

### Hinder

- Inga hinder

## Linnéa

### Har

- Skrivit grupplogg för 25/5
- implementerat endpoint för alienbild
- implementerat endpoint för planetbild

### Ska

- Ska evt lägga tid på bugfix i samband med att vi mergear
- synka seed data med bilder, komplettera data m beskrivn.
- prompta fram fler bilder för att komplettera data
- Error handling middleware.

### Hinder

- Privata omständigheter

### Har

- Genererat Fallback bilder
- lagt till dem om alien- eller planetbild inte kan laddas

### Ska

- Sitta med Frontend och göra ett design system och wireframes
- skriva loggboik

### Hinder

- Har möte på eftermiddagen och kommer inte vara tillgänglig efter kl 13

## Rebecka

# Sprint 1 review

## Ticket review

### CORS

Snabbt och smidigt, men fungerar ej i nuläget

### Error handling middlware

Mer detaljerad error handling, sepparat för dev miljö

### Logga och styling av navbar

Gick bra, inga hinder

### Planets och Aliens endpoints

Gick bra, liten spike för att kolla upp folder struktur

### Synka mock data med bilder

Uppdaterade bilder för att matcha alien namn och standardisera bildnamn.

### API länk för bild till planeter och aliens

Fungerar bra, CORS fortfarande blockar

### Fetch funktion

Hemtar i nuläget mockdata, CORS behöver lösas innan databasen kan användas

### Fallback bild frontend

Fungerar och visas korrekt

### Wireframe och prototyp klar i figma

Disign dokument: https://www.figma.com/design/ZElW0NcOJJRJVzpnBP0aUw/Alien-Planets-design?node-id=0-1&p=f&t=UEFGNnc8yYIbCEIz-0

### Startup script för hela appen

NPM install i både frontend och backend, seed, och starta både frontend och backend server sammtidigt

### Kvar

90 fetch funktion för bildendpoint osv
CORS issues

### Agilt

- Grupp log
- Strukturera våra möten
- Uppdelning i mindre grupper FE/BE
- Kanban arbete med Epic - Feature - Wi
- Interna möten i arbetsgrupper
- Gemensam planering genom daily standups
- Tidsestimering

### 2 stars and a wish

# Mattias:

- ⭐ Gruppen hanterar github projects jättebra, bra struktur
- ⭐ Frånvaro kommuniceras och sköts på ett snyggt sätt, vi kan planera runt det
- 🌈 Issues i rätt kolumn

# Emelie

- ⭐ Bra kommunikation i gruppen
- ⭐ Bra struktur på projektet, tydlighet
- 🌈 Tydligheten kunde vara bättre avseende beslut, information har skett i flera kanaler

# Rebecka

- ⭐ Gruppens kommunikation  funkar jättebra
- ⭐ Högt i tak och förlåtande  miljö att lära sig i och “göra fel”
- 🌈Gillar inte att lämna projekt halv klara, önskar att det fanns tid att göra klart.

# Linnéa

- ⭐ Arbetsgrupperna funkar bra,  effektivt med olika roller/ansvar
- ⭐ Stjärna till frontend för snygg design :D
- 🌈 Kom ihåg att uppdatera kanban board med assignee och status

# Lisette

- ⭐ Roligt att alla delar med sig av sina kunskaper och bidrar till gemensamt lärande
- ⭐ Samarbetet i gruppen
- 🌈 Vore skönt att kunna fokusera helt på detta projektet i en avgränsad tidsrymd, svårt att switcha mellan detta och fördjupning

# Vad fungerar bra som vi ska fortsätta med

- Ha högt i tak
- Kommunicera
- Gott samarbete
- Epics/Features/work items - både planeringen och omsatt i kanban board
- Interna samtal och arbetsgrupper (FE och BE team)
- Bra balans mellan att sitta i grupp och ha möten och att jobba enskillt och koda

# Vad ska vi sluta göra?

- Jobba utan att fixa work item i kanban (rätt kolumn, assignee) board

# Vad skulle vi kunna testa? (eller fortsätta testa)

- Estimera tiden en ticker tar och gemföra med hur långt det faktiskt tog
- Timeboxa möten, sätt av en tid flr slut och respektera den

# Vad ska vi göra härnäst?

- Se åvan
- Planera sprint 2 på tisdag :D

  ## 2026-06-02

  ### Sprint 2 planering 9-9.30 ,(paus för lektion) Sen satt vi igen 10.15 - 11.30

_LISETTE LOGGAR IDAG_
Vi inledde dagen med att gå igenom eftersläp från föregående sprint.  
 Därefter bröt vi ner features i konkreta work items.  
 Efter en lektionspaus städade vi upp backloggen, vilket var behövligt.

När work items var klara gick vi över till tidsestimering och fördelning.  
 Vi märker att FE bär en tyngre last i slutet – backend planerar att avlasta.

![Sprint 2 planering](./img/sprint2_figjam.png)

![Sprint 2 planering 2](./img/sprint2_figjam2.png)

![Mål](./img/mål_figjam.png)

### Dagens jobb

**Mattias:**

- ✅ Sprint 2 planering på förmiddagen
- ✅ Alien filtering endpoint

**Lisette:**

- ✅ Sprint 2 planering på förmiddagen
- ✅ Suttit med frontend och gjort några slutgiltliga designbeslut
- ✅ Stylast Listan för att visa Aliens och Planets
- ✅ Stylat AlienCard och PlanetCard

**Rebecka:**

- ✅ Sprint 2 planering på förmiddagen
- ✅ Suttit med frontend och gjort några slutgiltliga designbeslut
- ✅ Fixat fetch-funktionalitet till planets
- ✅ Bilder till både planets och aliens

**Emelie:**

- ✅ Sprint 2 planering på förmiddagen
- ✅ Suttit med frontend och gjort några slutgiltliga designbeslut
- ✅ Skapat wireframes för responsiva lägen i Figma med enkel design
- ✅ Modifierat Aliens och Planetmodal så att textfält stämmer överens med API

**Linnea:**

- ✅ Endpoint som returnerar aliens som bor på en specifik planet (routing, controller, service, model)
- ✅ Planerat för deploy, inkl hitta och välja tjänster
- ✅ DB på Aiven, free tier mySQL
- ✅ Backend live på Render
- ✅ Frontend live på Render
- ✅ Koppling mellan live DB och Backend

## 2026-06-03

_REBECKA LOGGAR IDAG_

### Standup 9:30-10:00

Alla delade skärm och visade/förklarade vad man gjort sedan igår. Gick igenom har, ska och hinder en och en.

Diskuterade sprint-status, vad som var kvar och tidsestimat. Noterade att det kan bli rörigt framöver när flera jobbar i samma filer samtidigt.

Påtänkt workitem: Loading spinner

Sprint review + retrospektiv planerat till 14:30-15:10

![Daily standup](img/standup-figjam.png)

### Sprint 2 Review + Retrospektiv 14:30-15:10

Gick igenom alla tasks en och en och kontrollerade om de var färdiga eller behövde åtgärdas. Gick igenom todo och in progress i kanban-boardet. Kom överens om att det är bäst att ha så lite kvar att göra på måndag, små tweaks och förbereda redovisning samt diskutera igenom alla reflektionsfrågor.

#### Vad har vi gjort hittills

**Agilt:**

- Fortsatt jobba med våra etablerade rutiner

**Frontend:**

- Loading spinner
- Deploy
- Responsiv navbar
- Responsiv list
- Styling och responsivitet homepage
- Logo-navigering homepage
- Modal för aliens och planets styling
- Bild-URL med id för både aliens och planets
- Filtrering för aliens och planets
- Fetch-funktionalitet för både planets och aliens
- Styling för cards och list i alien- samt planet-vy
- Wireframes för mobil och tablet-läge

**Backend:**

- Bugfix
- Deploy BE
- Deploy DB + Seed
- Kopplat BE till DB
- Nya endpoints med queries

#### Vad funkar bra som vi vill fortsätta med?

- Samarbete
- Kommunikation
- Uppdelning
- Flexibilitet
- Assignees
- Kolumndisciplinen i Kanban mycket bättre :D
- Timeboxing och tidsdisciplin
- Flera spikes
- Tidsestimeringen

#### Vad ska vi sluta göra?

- Vi har åtgärdat våra "problem"punkter!

#### Vad skulle vi kunna testa?

- Det vore kul med mer tid till detta för ytterligare fördjupning

#### Vad ska vi göra härnäst?

- Avrunda
- Presentera
- Utvärdera
- Reflektera
- Skryta på LinkedIn

![Daily standup](img/sprint2_retrospektiv_review.png)

### Dagens jobb

**Mattias:**

**Linnéa:**

- ✅ Frontend läser från deployad backend
- ✅ Spinner/loading component 
- ✅ Loading state i datahämtningshooks
- ✅ Loading visas för aliens / planets i resp. component
- ✅ Bugfix med Mattias i backenden, typescriptfel och mergeknas
  
**Lisette:**

**Emelie:**  
- ✅ Funktionalitet för modaler (öppna rätt modal, stänga rätt modal)
- ✅ Justering av styling i modaler
- ✅ Konflikthantering på GitHub på grund av att vi råkat jobba i samma filer

**Rebecka:**

- ✅ Ansvarig för grupplogg
- ✅ Responsiv hamburger-meny för mobil/tablet
- ✅ Responsiv layout för List-komponent
- ✅ Responsivitet och styling för startsidan
- ✅ Logo-navigering till startsidan

## 2026-06-08

### Wrap-up, 9:30 - 12:00, 14:30-15:10

Mötet inleddes med att gemensamt gå igenom vad vi har hunnit med att göra under det här projektet. Vi utgick från vår figjam med mötesdokumentation, loggboken och kanbanboarden på Github Projects.   

Därpå gick vi över till lärarens frågor, hämtat från uppgiften. Vi bestämde oss för att dela upp frågorna, så att var och en av oss under kort tid skapade ett utkast till svar. När vi sedan sågs igen fick var och en läsa igenom sina utkast för gruppen, som vi kunde diskutera att alla kan stå för de gemensamma svaren. 

Vi planerade gemensamt för morgondagens presentation, där vi utgick ifrån rubriker där ansvaret för respektive delegerades ut. 

14:20 - Avstämning med syfte att känna oss säkra inför den kommande presentationen. Vi gick igenom planeringen för presentationen, där vi avhandlade frågor som exempelvis vem som skulle dela skärm och hur vi skulle fördela ordet. Övergriplig tidsplanering. Vi satte en sluttid till klockan tre, var inte riktigt klara, och kom överens om att dra över med 10 minuter eftersom alla hade möjlighet att stanna. 

### Frågor att besvara som grupp

#### Hur tillämpade ni de agila principerna i praktiken? Vad fungerade och vad anpassade ni? Hur och varför anpassade ni?

> *Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.*

Nu var det här en simulering av ett agilt arbete, och vi har förstås inte haft någon kund. Däremot har vi tagit fasta på tanken om MVP, och diskuterat hur vi kan lägga ribban "så lågt som möjligt" för att ha en fungerande produkt som vi kan stå för. Samtidigt finns det tankar kring fortsättningen, där produkten kan berikas med features och utökas under kommande arbete.

> *Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.*

Vi har inte arbetat med en Big Design Up Front. Istället har vi arbetat med inkrement, där vi stegvis har närmat oss slutresultatet. Det gör att processen och leveransen blir mindre känslig för ändringar i krav och förutsättningar.

> *Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.*

Den här har vi maxat, sprintarna blir nog inte kortare än två dagar. Vi fick kläm på definitionen av sprint-leveransen under sista cykeln där vi konkretiserade ett sprintmål; den hade kunnat vara ännu tydligare i början.

> *Business people and developers must work together daily throughout the project.*

Vi hade lite kort om business people i vår projektgrupp. Däremot har vi haft olika ansvarsområden (t.ex. Frontend / Backend), och aktivt sett till att hålla varandra orienterade på en övergripande nivå under processen, för att alla ska kunna vara delaktiga överallt och känna ägandeskap för hela projektet.

> *Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.*

Vi har haft högt i tak, och frikostigt delat med oss av tips och smarta lösningar. Om någon har behövt en spike har det funnits utrymme för att ta sig den tiden. Samtidigt har det funnits fullt förtroende inom gruppen, där var och en har tagit ansvar för att leverera det man har lovat. Nivån av inblandning från övriga har varit i den mån det har önskats eller behövts; vi har inte på något sätt kontrollerat varandra.

> *The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.*

Just därför har vi varit måna om att ses live, i Discord. Vi har i realtid och under samtal kunnat avhandla agendan och förmedla information. I de fall det av privata omständigheter inte har varit möjligt för någon av våra deltagare, har upplevelsen varit att informationsöverföringen har varit svårare. Detta är ett kvitto på att face-to-face fungerar.

> *Working software is the primary measure of progress. Agile processes promote sustainable development.*

Metoderna är inte huvudsyftet och ändamålet (även om de kanske råkar vara det just i den här kursen), de ska vara till hjälp i vår process, vilket vi över tid har upplevt att de har varit. Vi har etablerat mötesformer som har fungerat bra för oss, och jobbat fram en nivå av Epics, Features och Work Items som har hjälpt oss organisera oss och komma framåt. Vi har hjälpts åt att påminna oss om vårt gemensamma fokus, och var insatserna är bäst riktade.

> *The sponsors, developers, and users should be able to maintain a constant pace indefinitely.*

(Inte riktigt tillämpbart här, men i teorin ger det mening.)

> *Continuous attention to technical excellence and good design enhances agility.*

Vi diskuterade tidigt arkitektur och filstruktur, tech stack, vilket har underlättat för projektarbetet. Backend tillämpade layered architecture för läsbarhet och separation of concerns, medan frontend valde en component based arkitektur som är fullt tillräcklig för vår lilla app.

> *Simplicity – the art of maximizing the amount of work not done – is essential.*

Vi lade medvetet ribban på en rimlig nivå, och lyckades framgångsrikt dra en gräns mellan vad som är görbart på den korta allokerade tiden (vår MVP) och vilka features vi sparar till framtiden.

> *The best architectures, requirements, and designs emerge from self-organizing teams.*

Uppenbarligen :D

> *At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.*

Det finns konkreta exempel i våra mötesanteckningar, där utvecklingspunkter identifieras i våra retrospektiv för att sedan omsättas i kommande sprint.

---

#### Hur såg ert agila arbete ut som grupp? Hur utvecklades det över tid?

Vi arbetade med GitHub Projects som kanban board. Vi använde branches per issue och pull requests för att granska varandras kod innan det mergades till main. Det var väldigt smidigt tyckte vi alla när vi kom in i det.

Först var backloggen ganska otydlig och spretig. Efter hand bröt vi ut vilka som faktiskt var våra epics, om de hörde till BE eller FE, och kunde placera features och user stories under våra epics. Från dessa skapade vi specifika work items för vad som behövde göras. Det gav oss en tydligare struktur och vi lade dem som sub-issues i GitHub Projects, vilket var enkelt och tydligt att följa för hela gruppen. Genom hela projektet har vi haft en god kommunikation i gruppen. Vi har informerat varandra vid frånvaro och tagit igen det som behövts, vilket gjort att arbetet kunnat flyta på utan problem för hela gruppen.

Både Frontend/UX-gruppen och Backend hade även egna möten när det behövdes, för att diskutera frågor som inte berörde hela gruppen. Det gjorde att vi kunde fatta snabba beslut utan att ta upp hela gruppens tid. En sak vi märkte under sprint 2 var att frontend hade en tyngre arbetsbelastning mot slutet medan backend hade mer luft, då omfördelade vi några uppgifter så att backend kunde avlasta frontend. Efter sprinterna hade vi retrospektiv där vi reflekterade över vad vi gjort och arbetssättet. Vi hade även "two stars and a wish" vilket gav bra perspektiv och pepp!

---

#### Hur genomförde ni era återkommande möten och vilket värde gav de? Vilka möten hölls?

Vi hade sprint-standups på morgonen för att gå igenom dagens och sprintens agenda, och sprint review samt retrospective vid varje avslutad sprint där vi gick igenom vad vi gjort, vad som funkat bra eller dåligt, och vad vi vill testa och göra härnäst. Vi pratade och reflekterade också om gruppens samarbete och gav, om tid fanns, våra "two stars and a wish" för projektet. Dessa möten genomfördes live i Discord.

---

#### Vilka förbättringar identifierade ni i era retrospektiv, och hur omsatte ni dem i nästa sprint?

**Retro 0:** Det vi identifierade som att fungera bra var tidsestimering, mappstrukturen, GitHub Projects-features såsom branch till varje issue, gruppindelningar och bra kommunikation. Vi lyfte även förbättringspunkterna att vi sprang för fort framåt i sprint 0 och att issues i GitHub inte var indelade i work items och features.

**Sprint 1-planering:** Vi hade en workshop där vi tog fram epics som vi sedan delade upp i user stories, för att sedan ta fram features som i sin tur blev work items. Detta löste flera problem vi kommit fram till, såsom att vi sprang för fort. Vi definierade projektets scope, och issues blev tydligare med features som blev parent issues till work items.

**Retro 1:** Efter att ha skapat mer struktur i kanban-boarden med bestämt issue-format gjorde vi ticket review, kollade vad som var kvar i backloggen som skulle flyttas till sprint 2, och arkiverade sedan färdiga issues.

**Sprint 2:** Inför sprint 2 satte vi upp ett sprintmål och tilldelade work items till hela sprinten, istället för att ge work items dag för dag.

**Retro 2:** Ihopknytning av hela projektet – sista retro, ticket-städning, stänga allt som är klart och arkivera.

---

#### Vad skulle ni göra annorlunda om ni började om? (Med avseende på det agila arbetssättet)

Skulle vi börja om från början hade vi gjort epics, features/user stories och work items direkt. Vi har fått tydligare mallar och rutiner för de olika mötena, vilket vi hade använt oss av från början om vi skulle påbörja ett nytt projekt i den här gruppen.

Vi skulle haft hårdare disciplin med att förekomma konflikter i Git, och inte jobba överlappande samtidigt.

---

#### UTMANING: Hur väl levde gruppen upp till de agila värderingarna enligt Agile Manifesto? Motivera med exempel.

##### Individer och interaktioner framför processer och verktyg

Vi la inte tiden på att sätta oss in i en rigid struktur för att slaviskt följa den. Istället lät vi artefakterna bli ett anpassat stöd för vår uppgift och vår process med våra förutsättningar, och utformade dem efter exakt den nivå vi ansåg att vi behövde för att kunna samarbeta agilt. Processen är ett stöd, inte ett mål.

Ett tydligt exempel på hur detta omsattes i praktik var i händelse av frånvaro. Vi planerade om och fördelade arbetet med hjälp av interaktion och tydlig kommunikation, snarare än att låsa oss vid planer och formatet för artefakter.

##### Fungerande programvara framför omfattande dokumentation

Vi har en omfattande dokumentation av vår process, som i ett "vanligt" projekt vore överflödig. Detta kommer sig förstås av kurskrav och -mål, men det är värt att uppmärksamma.

Dokumentationen av själva projektet är desto lättare. Vi har självförklarande kod, med tydliga variabelnamn och kommentarer där det behövs. Detta kompletteras med bearbetade Epics, Features och Work Items, där vi upplever att vi har hittat en lagom nivå för definition of done samt spårbarhet. Det finns paralleller att dra till branches – issues – work items – pull requests, där allt är kopplat, tack vare GitHub Projects.

##### Kundsamarbete framför kontraktsförhandling

Den här värderingen är svår att konkretisera utan en faktisk kund. I vårt projekt översattes det istället till att vi själva ägde produktbesluten. Vi landade i ett MVP-tänk, och kunde dynamiskt själva resonera kring var ribban skulle ligga.

##### Anpassning till förändring framför att följa en plan

I vårt projekt har vi arbetat inkrementellt utan en Big Design Up Front. Vi har framgångsrikt identifierat nivån för vilka beslut som måste fattas för varje sprint. Våra retrospektiv har lett till konkreta förändringar, vilket kan spåras i dokumentationen för respektive möte. Ett exempel är hur vi i vår första retro identifierade förbättringspotential i förhållande till förarbetet. Det omsattes i nästa sprint med genomarbetade epics och features, och mynnade ut i work items och kanban-disciplin på GitHub. Ett annat exempel är vår anpassningsbarhet i förhållande till den ursprungliga rollindelningen, när resurser behövde omfördelas från BE till FE på slutet.

##### Sammanfattningsvis

Vi upplever att gruppens arbete till slut nått en nivå där vi väl lever upp till de agila värderingarna, utifrån uppgiften och arbetets format.


### Dagens jobb

**Mattias:**

**Linnéa:**

- ✅ Utkast till mall för wrapup-möte  
- ✅ Dagens grupplogg  
- ✅ Utkast till svar på följande frågor: "Hur tillämpade ni de agila principerna i praktiken? Vad fungerade och vad anpassade ni? Hur och varför anpassade ni?" och "Hur väl levde gruppen upp till de agila värderingarna enligt Agile Manifesto? Motivera med exempel."  
- ✅ Readme (utan grafik)
  
**Lisette:**  

**Emelie:**  

**Rebecka:**  




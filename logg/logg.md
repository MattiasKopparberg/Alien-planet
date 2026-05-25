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

Linnéa:  
✅ Grupplogg (est 30m, faktisk tid 45m)  
✅ Skapa api-länk för bild för specifik planet, med route + controller (felhantering, anropa model som i sin tur hämtar static file)  
✅ Skapa api-länk för bild för specifik planet, med route + controller (felhantering, anropa model som i sin tur hämtar static file)  
(Est sammanlagt 2h för bildpunkterna, faktisk tid ca 2h)

Lisette:
✅ - Genererat två fallback bilder ifall Alien- eller Planet bild inte kan laddas.

✅ - Impleterat fallbavk om backend inte kan leverera en bild ska ett placeholder-kort visas. 
AlienCard visar en alien-placeholder och PlanetCard visar en planet-placeholder via onError på img-taggen. (1 h för båda punkter)

Rebecka: ✅ - Implementerat fetch-funktion i api.ts för att hämta alla Aliens med felhantering. Skapade även custom hook useAliens som hämtar api-svaret och sparar i state samt error-state för felhantering. (1 1/2h ca) 

Emelie:

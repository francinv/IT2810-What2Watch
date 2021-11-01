# MERK!!
Av en eller annen grunn vises ikke én av komponentene våre i builden. Vi har prøvd å builde med både react scripts og med webpack uten hell. Når man trykker på "Sign in" vil modulen komme opp, men ikke være synlig. Det går fortsatt an å skrive inn på et usynlig tekstfelt som dere kan finne ved å hovre musa over. Dere kan logge inn ved å skrive et vilkårlig navn og så trykke på knappen under. Under ligger bilde av hvordan det ser ut på lokal server.


![](https://i.imgur.com/L5aQ7eg.png)


[[_TOC_]]

# Om prosjektet
What 2 watch er en filmdatabase. Brukeren har mulighet til å se en stor mengde med filmer, i tillegg favorisere dem. Brukeren har også mulighet til å se detaljert informasjon av ønsket film. Videre har brukeren både sorteringsmuligheter og filtreringsmuligheter. Dette vil drøftes og forklares ytterligere i [Innhold og funksjonalitet](#ihf).

![](https://i.imgur.com/Dc5bgYo.jpg)
## <a id="ihf"></a>Innhold og funksjonalitet

- **Presentasjon av filmer:** Filmene er det som har hovedfokus på siden. Basert på liste (hentet fra database) blir filmene vist i et
pent rutenett. For å gjøre filmene presentable har det blitt brukt CSS-Flexbox layout. Dette gjør at filmene skalerer fint over hvilken som 
helst enheter. Hvert element består av: bilde, tittel, utgivelsesdato, sjanger og favoritt-ikon(kun om bruker er innlogget).
- **Detaljer om film:** Brukeren har mulighet til å lese mer detaljert informasjon om hver film. Dette gjøres ved at brukeren trykker på ønsket film. Det vil da dukke opp en modal, som viser en beskrivelse om filmen. Hvis brukeren er innlogget vil personen kunne se antall personer som har favorisert filmen. 
- **Sortering:** Øverst i høyre hjørne er det en select. Her kan brukeren velge ønsket sorteringsmulighet. Brukeren kan velge mellom: 
    - Tittel (A-Å)
    - Tittel (Å-A)
    - Utgivelsesår (økende)
    - Utgivelsesår (synkende)
- **Filtering:** Brukeren har mulighet til å filtrere basert på utgivelsesår og sjanger. Basert på dette vil visningen av filmene oppdateres. 
- **Søking:** Brukeren har mulighet til å finne en film ved å søke på bestemt film. Søkefeltet er implementert i Headeren som er en MUI komponent. Gruppen har endret komponenten med egen CSS. For å passe ønsket farge og størrelse. 
- **Innlogging:** Brukeren har mulighet til å logge inn på sin bruker for å favorisere ønskede filmer. Favoriserte filmer vil vises med et hjerte om brukeren logger inn med samme brukernavn igjen. Ut fra favorisering vil dette også vises i detaljer om hver film.
- **Pagination:** Filmene på siden lastes dynamisk når brukeren scroller.

## Prosjektstruktur

Nedenfor ligger mappestrukturen til frontend og backend. I frontend har vi lagt hver komponentgruppe i en egen mappe, samt den essensielle mainpagekomponenten som også henter state i en egen mappe under `src`. I backend har vi kun én mappe som inneholder mongoosemodell for datatypen Movie.

# Frontend

    src
    ├─────── components
    |        ├── favButton
    |        ├── moviedetail
    |        ├── moviesview
    |        ├── navbar
    |        ├── sidebar
    |        ├── sortdropdown
    |        └── userDisplay
    ├─────── graphql
    ├─────── pages
    ├─────── services
    └─────── util

# Backend

    src
    └─────── models

## Backend

Backenden består av en MongoDB-database og en kjørende server som hoster GraphQL-endpointet.

### Graphql

Graphql er brukt som spørrespråk. Sammen med mongoose og Apollo, kan man hente nøyaktig den dataen vi selv har definert. Dette gjøres gjennom schemas som vi selv har definert. Mongoose blir brukt som for å modellere og resolve data som sendes som queries til databasen. Vi bruker Apollo client og Apollo server for å kjøre GraphQL-serveren
og for å hente og sende spørringer til GraphQL-serveren
### Database

Vi har hentet data fra datasett tilgjengelig på [kaggle](https://kaggle.com/datasets/) og tilpasset dataen til vår database. Deretter lastet vi dem opp i en database som ligger på IDI sin VM.

## Frontend
What to Watch bruker React for frontend. React er et JavaScript-bibliotek for å lage og bygge brukergrensesnitt. Det vedlikeholdes av Facebook og et fellesskap av ulike utviklere og selskaper. React kan brukes som et utgangspunkt i utviklingen av enkeltside eller mobil applikasjon, da det er optimalisert for å raskt hente skiftende data som må registreres. 
### State management

Vi har valgt å bruke redux toolkit for global state management. Vi har valgt å lagre en stor mengde informasjon i store, slik at komponentene til enhver tid kan være oppdatert på data som er lastet inn. Dette gjør vi også slik at komponentene rendres på riktige tidspunkt med oppdaterte data. Vi bruker selectors for å hente data, og dispatch for å sette data i store. Vi har også brukt lokal react-state der dette er gunstig, når det ikke er behov for andre komponenter å ha tilgang til denne staten. Dette passer bra for en lavskala applikasjon. Redux toolkit har alt redux tilbyr. Redux toolkit er enklere, blant annet fordi man kan definere slicer som fungerer som både reducer og action i ett. Vi har to slices, en som håndterer filmer og filtrering, og en som håndterer brukerdata.

### Komponentvalg
Gruppen har valgt å bruke [MaterialUI](https://mui.com/) og [React Bootstrap](https://react-bootstrap.github.io/) når det kommer til de fleste komponenter som er brukt i prosjektet. Bootstrap er et gratis og åpen kildekode CSS-rammeverk rettet mot responsiv, mobile-first front-end webutvikling. **React-Bootstrap** erstatter Bootstrap JavaScript. Hver komponent er bygget fra bunnen av som en ekte React-komponent, uten unødvendige avhengigheter som jQuery. Istedenfor å bruke klasser for å velge forskjellige komponenter og stiler, brukes React-komponenter som inneholder de forskjellige stilene.

**Material-UI** er ganske enkelt et bibliotek som lar oss importere og bruke forskjellige komponenter for å lage et brukergrensesnitt i våre React-applikasjoner. Dette sparer betydelig tid siden utviklerne ikke trenger å skrive alt fra bunnen av. 

Utover nevnte eksterne bibliotek har gruppen også valgt å utvikle noen egne komponenter. Dette valget ble tatt innad i teamet da det 
viste seg å være fornuftig. 

Gruppen har både brukt ekstern css og styled-komponenter. Dette for å vise kunnskap på begge områder. Der det har vært hensiktsmessig har 
gruppen også brukt egen css. Dette har blitt gjort hovedsakelig for responsivitet.
## Testing
### Enhetstesting
Vi har hovedsakelig basert enhetstestinga vår på "react-testing-library." Alle hovedkomponenter har hver sin egen rendertest. Komponentenes standardfunksjonalitet blir også testet. Kjøres også en enhetstest av App som sjekker at alt av underkomponenter loades og vises på siden. Disse testene finnes i mappen "frontend/src/_tests_". Er også inkludert snapshottest hvor inneholdet testes ved å matche siste snapshot. Dette er bl.a. gjort av App.tsx  Testene kjøres med kommandoen "yarn test" fra frontend-mappen.

### End-to-end-testing
Vi har brukt "Cypress" for end-to-end-testing. Her kjøres detaljerte scenarioer for bruken av appen vår. Testene ligger i filen "frontend/cypress/integration/hompage.spec". Testene kjøres med kommandoen "yarn cypress:run"(Terminalbasert) eller "yarn cypress:open"(nettleserbasert).


### Testing i nettleser
For å kvalitetssikre gruppens produkt har det blitt testet i forskjellige nettlesere og enheter. Teamet har testet i disse nettleserne:

- Google Chrome desktop
- Google Chrome mobile
- Safari desktop
- Safari iOS
- Firefox desktop

Det har i tillegg blitt testet responsivitet ved hjelp av utviklerverktøy. Nedenunder kan dere se ulike enheter og bilder som 
viser at dette har blitt testet:

Enheter som har blitt testet:

:computer: Desktop (vanlig PC-skjerm)

:iphone: (iPad både horisontalt og vertikalt)

:iphone: Smarttelefon (iPhone både horisontalt og vertikalt)

**Det har blitt testet flere enheter men vi har valgt og kun ta med bilder av de viktigste.**

#### Smarttelefon:
![](https://i.imgur.com/aGTuU0r.jpg)
![](https://i.imgur.com/eXfsZ8G.jpg)

### Tablet:
![](https://i.imgur.com/GkquT5Y.jpg)
![](https://i.imgur.com/8XVan49.jpg)

### Desktop:
![](https://i.imgur.com/Dc5bgYo.jpg)

## Dokumentasjon og utvikling
Gjennom prosjektet har gruppen valgt å bruke GitLab flittig. Det har vært fokus på parprogrammering underveis i utviklingen for å forsikre god kodekvalitet til enhver tid. Vi har også hatt fokus på å utvikle komponenter og skrive lesbar kode. Dette har vi også sikret ved å bruke code-review jevnt gjennom utviklingsprosessen. 

Gruppens prosess:
1. Medlem oppretter issue i GitLab: Hver gang man skal starte med en arbeidsoppgave blir det laget en oppgave(issue) som beskriver hva man skal gjøre. Vi har brukt IssueBoard med egne lister slik at resten av teamet har kontroll på hvordan oppgaven ligger an. 
2. Oppretter en branch fra nevnt issue: Hvert medlem lager en ny branch basert på master. Underveis passer medlemmet på at det alltid er oppdatert versjon. Teamet har til enhver tid jobbet i seperate branches. 
3. Commite endringer og referer til issue: For at et annet medlem skal kunne forstå hva det respektive medlemmet har gjort, har det vært høyt fokus på at commit-meldinger skal være beskrivende og referere til riktig issue. 
4. Når oppgaven/issue er fullført: Når oppgavene er løst opprettes en merge request. Når dette er gjort vil de andre gruppemedlemmene se over koden og se at alt fungerer. Om det blir godkjent, blir det merget til master branchen. 
## Kjøre applikasjonen
Under finner du instrukser for hvordan du kjører appen om du ønsker å kjøre denne lokalt på din egen PC.

### Frontend
For å kjøre frontend må man:
1. `cd frontend/`
2. `yarn install`
3. `yarn start`

Ved kjøring som nevnt ovenfor vil appen kjøre på: `localhost:3000/`, dersom annet ikke er spesifisert.
### Backend
For å kjøre backend må man:
1. `cd backend/`
2. `npm install`
3. `npm run dev`

Ved kjøring som nevnt ovenfor vil GraphQL-endpoint kjøres på: `localhost:4000/graphql`, dersom annet ikke er spesifisert.

**MERKNAD: Husk å sette egne variabler i [.env](./backend/.env)**



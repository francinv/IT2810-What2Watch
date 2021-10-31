**Gruppe 29: what2watch**

[[_TOC_]]

## Om prosjektet
What 2 watch er en filmdatabase. Brukeren har mulighet til å se en stor mengde med filmer, i tillegg favorisere dem. Brukeren har også mulighet til å se detaljert informasjon av ønsket film. Videre har brukeren både sorteringsmuligheter og filtreringsmuligheter. Dette vil drøftes og forklares ytterligere i [Innhold og funksjonalitet](#ihf).

![](https://i.imgur.com/Dc5bgYo.jpg)
## <a id="ihf"></a>Innhold og funksjonalitet

- **Presentasjon av filmer:** Filmene er det som har hovedfokus på siden. Basert på liste (hentet fra database) blir filmene vist i et
pent rutenett. For å gjøre filmene presentable har det blitt brukt CSS-Flexbox layout. Dette gjør at filmene skalerer fint over hvilken som 
helst enheter. Hvert element består av: bilde, tittel, utgivelsesdato, sjanger og favoritt-ikon(kun om bruker er innlogget).
- **Detaljer om film:** Brukeren har mulighet til å lese mer detaljert informasjon om hver film. Dette gjøres ved at brukeren trykker på ønsket film. Det vil da dukke opp en modal, som viser en beskrivelse om filmen. Hvis brukeren er innlogget vil personen kunne se antall personer som har favorisert filmen. 
- **Sortering:** Øverst i høyre hjørne er det en select. Her kan brukeren velge ønsket sorteringsmulighet. Brukeren kan velge mellom: 

## Prosjektstruktur
## Backend

### Graphql

### Database


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

### Enhetstesting


### End-to-end testing

## Dokumentasjon og utvikling


## Kjøre applikasjonen

### Frontend


### Backend


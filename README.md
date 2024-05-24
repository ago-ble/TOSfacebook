# Paslagų teikimo sąlygų pateikimas, taikant informacijos vizualizavimo principus

Čia yra įgyvendintas facebook.com programėlės paslaugų teikimo sąlygų vaizdavimas taikant informacijos vizualizavimo principus. Prototipas vaizduoja paskyros kūrimo metu rodomas paslaugų teikimo sąlygas. Paskyos kūrimo eiga pakeista taip, kad pirma yra rodomos sąlygos, o ne prašoma įvesti asmeninius duomenis, kaip šiuo metu yra egzistuojančioje sistemoje. Aplikacija yra skirta mobiliesiams įrenginiams.

## Paleidimas

Norint paleisti programą reikia turėti instaliuotą [node.js](https://nodejs.org/en/download/package-manager) v20.13.1 (LTS). 

1. Instaliuokite reikiamas bibliotekas

   ```bash
   npm install
   ```

2. Paleiskite aplikaciją

   ```bash
    npx expo start
   ```

Paleistą aplikaciją galite peržiūrėti keliais būdais: 

- [Android emuliatoriuje](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS emuliatoriuje](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go programėlėje](https://expo.dev/go). Iš Play store arba App store atsisiųskite Expo Go programėlę, skenuokite QR kodą ir išbandykite.
- Naršyklėje. Terminale paspaudę „w“ raidę klaviatūroje. Atidarius "devTools“ arba "Inspect" pasirinkti mobiliojo įrenginio dimencijas. 

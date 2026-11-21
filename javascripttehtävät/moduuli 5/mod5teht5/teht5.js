// Tee sovellus, joka hakee satunnaisen Chuck Norris -vitsin ja tulostaa sen konsoliin. (2p)
// Käytettävä rajapinta: chucknorris.io
// Lähetä pyyntö osoitteeseen https://api.chucknorris.io/jokes/random ja tulosta konsoliin pelkkä vitsi (eli value-ominaisuuden arvo).
// Lomaketta ei tarvita.

"use strict";
  
async function cnVitsi() {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        if (!response.ok) throw new Error("Virheellinen syöte!");
        const vitsit = await response.json();
        const vitsi = vitsit.value;
        console.log(vitsi);
    } catch (error) {
      console.log(error.message);
    }
}
cnVitsi();
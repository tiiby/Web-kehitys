// Kirjoita ohjelma, joka kysyy käyttäjältä viisi lukua ja tulostaa ne päinvastaisessa järjestyksessä kuin käyttäjä ne syötti
// (ei siis suuruusjärjestyksessä).
// Tulosta tulos konsoliin.
"use strict"

const numerot = [];

for (let i = 1; i <= 5; i++) {
    let numero = prompt("Anna numero")
    numerot.push(numero);
}

document.querySelector("#target").innerHTML =
numerot

for (let i = numerot.length - 1; i >= 0; i--) {
    console.log(numerot[i]);
}
// Kirjoita ohjelma, joka kysyy käyttäjältä osallistujien lukumäärän.
// Tämän jälkeen ohjelma kysyy kaikkien osallistujien nimet.
// Lopuksi ohjelma tulostaa osallistujien nimet verkkosivulle numeroituna luettelona (<ol>) aakkosjärjestyksessä. (2p)
"use strict";

let lukumaara = prompt("Anna osallistujien lukumäärä");
const nimet = [];


for (let i = 0; i < lukumaara; i++) {
    let nimi = prompt("Anna osallistujan nimi:");
    nimet.push(nimi);
}

nimet.sort()

let htmlStr = "";

for ( let i = 0; i < nimet.length; i++) {
  let nimi = nimet[i];
  htmlStr = htmlStr + "<li>" + nimi + "</li>";
}

document.querySelector("#nimilista").innerHTML = htmlStr;

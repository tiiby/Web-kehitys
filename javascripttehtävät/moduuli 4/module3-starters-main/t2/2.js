// Lisää HTML-koodia metodien createElement() ja appendChild() avulla. (2p)
// Lisää seuraava HTML-koodi elementtiin, jolla on id="target":
// <li>First item</li>
// <li>Second item</li>
// <li>Third item</li>
// Lisää luettelon toiselle <li>-elementille luokka my-item.

"use strict";
const lista1 = document.createElement("li");
const teksti1 = document.createTextNode("First item");
lista1.appendChild(teksti1);
document.getElementById("target").appendChild(lista1);

const lista2 = document.createElement("li");
const teksti2 = document.createTextNode("Second item");
lista2.appendChild(teksti2);
document.getElementById("target").appendChild(lista2);

const lista3 = document.createElement("li");
const teksti3 = document.createTextNode("Third item");
lista3.appendChild(teksti3);
document.getElementById("target").appendChild(lista3);

const second = document.querySelectorAll("li")[1];
second.classList.add("my-item");
// Lisää HTML-koodia innerHTML-ominaisuuden avulla. (2p)
// Lisää seuraava HTML-koodi elementtiin, jolla on id="target".
// Lisää names-taulukon arvot <li>-elementteihin for-silmukassa.
// <li>John</li>
// <li>Paul</li>
// <li>Jones</li>

'use strict';
const names = ['John', 'Paul', 'Jones'];

for ( let i = 0; i < names.length; i++) {
    const lista = document.createElement("li");
    const teksti = document.createTextNode(names[i]);
    lista.appendChild(teksti);
    document.getElementById("target").appendChild(lista);
}
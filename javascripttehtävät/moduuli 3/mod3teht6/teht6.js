// Kirjoita funktio, joka palauttaa satunnaisen nopanheiton tuloksen väliltä 1–6.
// Funktiolla ei saa olla parametreja. Kirjoita pääohjelma, joka heittää noppaa, kunnes tulos on 6.
// Pääohjelman on tulostettava jokaisen heiton tulos järjestämättömään luetteloon (<ul>). (2p)

"use strict";

function nopanheitto() {
    let noppa = Math.floor(Math.random() * 6) + 1;
    return noppa;
}

let htmlStr = "";

let numero;

do {
    numero = nopanheitto();
    htmlStr = htmlStr + "<li>" + numero + "</li>";
    document.querySelector("#heitontulos").innerHTML = htmlStr;
} while (numero < 6);
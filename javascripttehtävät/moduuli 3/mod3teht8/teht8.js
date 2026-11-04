"use strict";

function concat(taulukko){
    let merkkijono = "";
    for ( const eläin of taulukko){
        merkkijono = merkkijono + eläin;
    }
    return merkkijono;
}

const taulukko = ["Kissa", "Koira", "Marsu", "Pupu"];

document.querySelector("#elukat").innerHTML = concat(taulukko)
"use strict";

let nimi = prompt("Lajitteluhattu\nAnna nimesi, niin kerron tupasi:");

const tupa = Math.floor(Math.random() * 4) + 1;

switch (tupa) {
  case 1:
    document.querySelector("#target").innerHTML = 
        nimi + ", sinä olet Rohkelikko";
    break;
  case 2:
    document.querySelector("#target").innerHTML =
        nimi + ", sinä olet Korpinkynsi";
    break;
  case 3:
    document.querySelector("#target").innerHTML =
        nimi + ", sinä olet Puuskupuh";
    break;
  default:
    document.querySelector("#target").innerHTML =
        nimi + ", sinä olet Luihuinen";
}
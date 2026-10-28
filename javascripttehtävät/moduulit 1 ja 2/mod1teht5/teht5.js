let vuosiluku = prompt("Anna vuosiluku:");

if (vuosiluku % 4 === 0 && vuosiluku % 100 !== 0) {
    document.querySelector("#karkausvuosi").innerHTML =
    "Vuosi on karkausvuosi"
} else if (vuosiluku % 100 !== 0 && vuosiluku % 400 === 0) {
    document.querySelector("#karkausvuosi").innerHTML =
    "Vuosi on karkausvuosi"
} else {
    document.querySelector("#karkausvuosi").innerHTML =
    "Vuosi ei ole karkausvuosi"
}
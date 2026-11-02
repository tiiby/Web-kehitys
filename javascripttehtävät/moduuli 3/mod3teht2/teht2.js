// Kirjoita ohjelma, joka kysyy käyttäjältä osallistujien lukumäärän.
// Tämän jälkeen ohjelma kysyy kaikkien osallistujien nimet.
// Lopuksi ohjelma tulostaa osallistujien nimet verkkosivulle numeroituna luettelona (<ol>) aakkosjärjestyksessä. (2p)

let lukumaara = prompt("Anna osallistujien lukumäärä");
const nimet = [];

console.log(lukumaara)

for (let i = 0; i < lukumaara; i++) {
    let nimi = prompt("Anna osallistujan nimi:");
    nimet.push(nimi);
}

nimet.sort()
console.log(nimet)

document.querySelector("#nimilista").innerHTML =
    nimet

// Kirjoita ohjelma, joka kysyy kuuden koiran nimet.
// Ohjelma tulostaa koirien nimet järjestämättömään luetteloon (<ul>)
// käänteisessä aakkosjärjestyksessä. (2p)

const koirat = [];

for (let i = 1; i <= 6; i++) {
    let koira = prompt("Anna koiran nimi")
    koirat.push(koira);
}

koirat.sort()
koirat.reverse()


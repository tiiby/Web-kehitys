// Kirjoita ohjelma, joka kysyy käyttäjältä lukuja, kunnes käyttäjä syöttää nollan.
// Ohjelma tulostaa annetut luvut konsoliin suurimmasta pienimpään. (2p)

const luvut = [];

let luku;

do {
    luku = prompt("Anna luku tai lopeta antamalla 0")
    if (luku != 0) {
        luvut.push(luku);
    }
} while (luku != 0);

luvut.sort((a, b) => b - a);

console.log(luvut)

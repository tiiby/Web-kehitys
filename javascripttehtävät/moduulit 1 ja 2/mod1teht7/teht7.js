let heitotStr = prompt("Kuinka monta kertaa heitetään noppaa?");

let heitot = +heitotStr;
let summa = 0;

for (let i = 1; i <= heitot; i++) {
    let noppa = Math.floor(Math.random() * 6) + 1;
    summa += noppa;
    console.log(noppa)
//    document.querySelector("#heitto").innerHTML =
//        `Luvuksi saatiin ${noppa}`
}

document.querySelector("#summa").innerHTML =
    `Heitettyjen silmälukujen summa oli ${summa}`
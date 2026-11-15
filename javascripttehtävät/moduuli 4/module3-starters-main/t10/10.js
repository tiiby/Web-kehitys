// Lue etu- ja sukunimi lomakkeelta ja tulosta ne <p id="target">-elementtiin. (2p)
// Muista estää lomakkeen oletustoiminto eli lomakkeen lähettäminen, joka lataa sivun uudelleen.
// Voit valita <input>-elementit querySelector()-metodilla käyttämällä attribuuttivalitsimia (attribute selector).
// Esimerkkituloste: Nimesi on Luke Skywalker

  const form = document.querySelector("form");
  const enimi = document.querySelector("input[name=firstname]");
  const snimi = document.querySelector("input[name=lastname]");
  const p = document.querySelector("#target");


  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    p.innerText = `Nimesi on ${enimi.value} ${snimi.value}`;
  });
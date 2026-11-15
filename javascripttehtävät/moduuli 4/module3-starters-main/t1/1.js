// Lisää HTML-koodia innerHTML-ominaisuuden (property) avulla. (2p)
// Lisää seuraava HTML-koodi elementtiin, jolla on id="target":
// <li>First item</li>
// <li>Second item</li>
// <li>Third item</li>
// Lisää samalle elementille luokka my-list.

const div = document.querySelector("#target");
const html =
    `<li>First item</li>
    <li>Second item</li>
    <li>Third item</li>`;
div.innerHTML = html;

const targetEle = document.getElementById("target");

targetEle.classList.add("my-list");
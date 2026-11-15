// Tee JavaScriptillä hover-efekti eli muutos, joka tapahtuu, kun hiiri viedään elementin päälle. (2p)
// Kun käyttäjä vie hiiren <p id="trigger">-elementin päälle,
// vaihda <img id="target">-elementin kuva picA.jpg:stä picB.jpg:hen.
// Kun käyttäjä vie hiiren pois elementin päältä, vaihda kuva takaisin alkuperäiseksi.

const hoverEffect = document.querySelector("#trigger");

hoverEffect.addEventListener("mouseover", (event) => {
    document.getElementById("target").src = "img/picB.jpg";
    event.getElementById("target").setAttribute("src", "img/picB.jpg");
});

hoverEffect.addEventListener("mouseout", (event) => {
    document.getElementById("target").src = "img/picA.jpg";
    event.getElementById("target").setAttribute("src", "img/picA.jpg");
});
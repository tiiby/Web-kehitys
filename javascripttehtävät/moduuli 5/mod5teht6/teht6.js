// Kehitä sovellusta eteenpäin. (4p)
// Lisää nyt lomake, johon voit syöttää hakusanan samaan tapaan kuin tehtävissä 1–3.
// Lähetä hakusana fetch()-funktiolla osoitteeseen https://api.chucknorris.io/jokes/search?query=${value_from_input}.
// Tulosta jokainen vitsi tässä muodossa:
// <article>
//   <p>Vitsi tähän</p>
// </article>

async function fetchData(event) {
  event.preventDefault();
  try {
    const value_from_input = document.querySelector("#query");
    const response = await fetch(
      `https://api.chucknorris.io/jokes/search?query=${value_from_input.value}`,
    );
    if (!response.ok) {
      throw new Error("HTTP-virhe! Tilakoodi: " + response.status);
    }
    const data = await response.json();
    let htmlStr = "";
    for (const vitsi of data.result) {
      htmlStr += "<article>" + "<p>" + vitsi.value + "</p>" + "</article>";
    }
    document.querySelector("#hauntulos").innerHTML = htmlStr;
  } catch (error) {
    console.error("Virhe datan haussa:", error);
  }
}
document.querySelector("form").addEventListener("submit", fetchData);
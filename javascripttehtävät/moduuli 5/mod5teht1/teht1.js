// Tee sovellus, joka hakee tietoja syöttämästäsi TV-sarjasta ja tulostaa ne konsoliin. (2p)
// Käytettävä rajapinta (API): TVMaze API
// Tee ensin validi HTML-sivu, jolla on hakulomake. Esimerkkilomake:
// <form action="https://api.tvmaze.com/search/shows">
//  <input id="query" name="q" type="text" />
//  <input type="submit" value="Search" />
// </form>
// Testaa lomaketta. Selaimen pitäisi näyttää sivu, joka on täynnä JSON-muotoista dataa.

async function fetchData() {
  try {
    const response = await fetch(
      "https://api.tvmaze.com/search/shows?q=friends",
    );
    if (!response.ok) {
      throw new Error("HTTP-virhe! Tilakoodi: " + response.status);
    }
    const data = await response.json();
    console.log("Haettu data:", data);
    return data;
  } catch (error) {
    console.error("Virhe datan haussa:", error);
  }
}
fetchData();
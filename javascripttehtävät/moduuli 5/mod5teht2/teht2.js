// Kehitä sovellusta eteenpäin.
// Lisää JavaScript-koodi, joka lukee lomakkeeseen syötetyn arvon ja 
// lähettää fetch-funktiolla pyynnön osoitteeseen https://api.tvmaze.com/search/shows?q=${value_from_input}.
// Tulosta hakutulos konsoliin. (3p)


async function fetchData(event) {
    event.preventDefault()
  try {
    const value_from_input = document.querySelector("#query");
    const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${value_from_input.value}`,
    );
    if (!response.ok) {
      throw new Error("HTTP-virhe! Tilakoodi: " + response.status);
    }
    const data = await response.json();
    console.log("Haettu data:", data);
  } catch (error) {
    console.error("Virhe datan haussa:", error);
  }
}
document.querySelector("form").addEventListener("submit", fetchData);
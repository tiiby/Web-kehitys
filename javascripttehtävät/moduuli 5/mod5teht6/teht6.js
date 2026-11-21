async function fetchData() {
  try {
    const response = await fetch(
      "https://api.chucknorris.io/jokes/search?query=${value_from_input}",
    );
    if (!response.ok) {
      throw new Error("HTTP-virhe! Tilakoodi: " + response.status);
    }
    const data = await response.json();
    document.querySelector("#hauntulos").innerHTML = data;
    return data;
  } catch (error) {
    console.error("Virhe datan haussa:", error);
  }
}
fetchData();
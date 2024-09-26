const countryBanner: HTMLDivElement | null =
  document.querySelector("#countryBanner");

require("dotenv").config();

function fetchUserCountry() {
  fetch(`https://ipinfo.io/json?token=${process.env.IP_INFO_TOKEN}`)
    .then((response) => response.json())
    .then((data) => {
      countryBanner!.innerHTML = `Shipping is avaiable in <a href="#" class="underline">${data.country}</a>.Check out
      <a href="#" class="underline">special deals</a> for your country.`;
    })
    .catch((error) => {
      console.error("Error fetching the data:", error);
    });
}
fetchUserCountry();

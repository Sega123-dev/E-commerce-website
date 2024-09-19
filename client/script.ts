const countryBanner = document.querySelector("#countryBanner");

function fetchUserCountry() {
  fetch("https://ipinfo.io/json?token=9e3d684e965ac5")
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

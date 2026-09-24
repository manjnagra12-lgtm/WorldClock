const pageTitle = document.querySelector("#page-title");

function refreshPage() {
	window.location.reload();
}

pageTitle.addEventListener("click", refreshPage);
pageTitle.addEventListener("keydown", (event) => {
	if (event.key === "Enter" || event.key === " ") {
		event.preventDefault();
		refreshPage();
	}
});

const cityForm = document.querySelector("#city-form");
const cityInput = document.querySelector("#city-input");
const cityResult = document.querySelector("#city-result");
const globeTime = document.querySelector("#globe-time");

cityForm.addEventListener("submit", async (event) => {
	event.preventDefault();
	const city = cityInput.value.trim();

	if (!city) {
		return;
	}

	cityResult.textContent = `Looking for the time in ${city}...`;

	try {
		const geocodingResponse = await fetch(
			`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
		);
		const geocodingData = await geocodingResponse.json();
		const location = geocodingData.results?.[0];

		if (!location?.timezone) {
			throw new Error("City not found");
		}

		const timeResponse = await fetch(
			`https://timeapi.io/api/time/current/zone?timeZone=${encodeURIComponent(location.timezone)}`
		);
		const timeData = await timeResponse.json();

		cityResult.textContent = `The time in ${location.name} is ${timeData.time} (${location.timezone}).`;
		globeTime.textContent = `${location.name}: ${timeData.time}`;
	} catch (error) {
		cityResult.textContent = "We could not find that city. Please try another search.";
		globeTime.textContent = "";
	}
});

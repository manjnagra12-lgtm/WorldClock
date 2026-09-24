// Find the title so it can act as a page refresh control.
const pageTitle = document.querySelector("#page-title");

// Refresh the current page when the title is activated.
function refreshPage() {
	window.location.reload();
}

// Support mouse clicks on the title.
pageTitle.addEventListener("click", refreshPage);

// Support Enter and Space for keyboard users.
pageTitle.addEventListener("keydown", (event) => {
	if (event.key === "Enter" || event.key === " ") {
		event.preventDefault();
		refreshPage();
	}
});

// Find the search form, its input, and both result display areas.
const cityForm = document.querySelector("#city-form");
const cityInput = document.querySelector("#city-input");
const cityResult = document.querySelector("#city-result");
const globeTime = document.querySelector("#globe-time");

// Look up the submitted city and display its current local time.
cityForm.addEventListener("submit", async (event) => {
	event.preventDefault();
	const city = cityInput.value.trim();

	// Ignore empty submissions; the required input also provides browser validation.
	if (!city) {
		return;
	}

	cityResult.textContent = `Looking for the time in ${city}...`;

	try {
		// Convert the city name into a timezone with Open-Meteo geocoding.
		const geocodingResponse = await fetch(
			`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
		);
		const geocodingData = await geocodingResponse.json();
		const location = geocodingData.results?.[0];

		// Stop if the geocoder did not return a usable timezone.
		if (!location?.timezone) {
			throw new Error("City not found");
		}

		// Request the current time for the returned IANA timezone.
		const timeResponse = await fetch(
			`https://timeapi.io/api/time/current/zone?timeZone=${encodeURIComponent(location.timezone)}`
		);
		const timeData = await timeResponse.json();

		// Show the result both below the form and over the globe image.
		cityResult.textContent = `The time in ${location.name} is ${timeData.time} (${location.timezone}).`;
		globeTime.textContent = `${location.name}: ${timeData.time}`;
	} catch (error) {
		// Give the user a clear message when either API request fails.
		cityResult.textContent = "We could not find that city. Please try another search.";
		globeTime.textContent = "";
	}
});

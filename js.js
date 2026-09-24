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

cityForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const city = cityInput.value.trim();
	cityResult.textContent = `Looking for the time in ${city}...`;
});

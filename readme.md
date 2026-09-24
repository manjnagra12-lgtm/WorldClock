# World Clock

## Contents

- [About the App](#about-the-app)
- [Features](#features)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Data Sources](#data-sources)
- [Project Structure](#project-structure)
- [Basic Wireframes](#basic-wireframes)
- [User Stories](#user-stories)
- [Accessibility](#accessibility)
- [Future Improvements](#future-improvements)

## About the App

World Clock is a simple, responsive web app designed to help users explore time around the world. It presents a globe image, a city search field, and clear feedback in a calm, accessible layout that works on desktop and mobile devices.

## Features

- Search for a city by name.
- Display the city's current local time over the globe image.
- Show the matched city, time, and IANA timezone below the search form.
- Provide responsive layouts for desktop and mobile screens.
- Support keyboard activation of the title to refresh the page.
- Include social media links with Bootstrap Icons.

## Getting Started

This is a static HTML, CSS, and JavaScript project, so no build step is required.

1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Start a local server, such as the VS Code Live Server extension.
4. Open `index.html` in the browser through that local server.

The city search uses external APIs, so the browser needs an internet connection.

## How to Use

1. Enter a city name such as `Tokyo`, `London`, or `New York`.
2. Select **Search**.
3. Read the local time shown below the form and on the globe.
4. Hover over the globe to see the time label lift slightly.
5. Select the `World Clock` title to refresh the page and clear the current search.

## Data Sources

- [Open-Meteo Geocoding API](https://geocoding-api.open-meteo.com/) finds a city and its IANA timezone.
- [TimeAPI](https://timeapi.io/) returns the current time for the selected timezone.
- The Earth image is stored locally in `assets/images/earth.jpg`.

Both time services are called from the browser without an API key. Search results depend on the availability of those external services.

## Project Structure

```text
WorldClock/
|-- assets/
|   `-- images/
|       |-- earth.jpg
|       `-- globe.svg
|-- index.html
|-- js.js
|-- readme.md
`-- style.css
```

## Basic Wireframes

### Desktop Layout

```text
+------------------------------------------------------------------+
|              You have all the time in the world!                |
+------------------------------------------------------------------+
|                         World Clock                              |
|                                                                  |
|                         [  GLOBE  ]                              |
|                       [ city: ____ ] [Search]                    |
|                    The time in {city} is {time}                  |
|                                                                  |
+------------------------------------------------------------------+
|                 Connect with World Clock                         |
|                       f       X       Instagram                  |
+------------------------------------------------------------------+
```

### Mobile Layout

```text
+------------------------+
| You have all the time  |
|    in the world!       |
+------------------------+
|      World Clock       |
|                        |
|       [ GLOBE ]        |
|   The time in {city}   |
|                        |
|      Find a city       |
|   [ Enter a city     ] |
|   [      Search      ] |
|                        |
+------------------------+
| Connect with World     |
|       Clock            |
|    f    X    Instagram |
+------------------------+
```

## User Stories

- As a user, I want to see a clear World Clock homepage so that I immediately understand the app's purpose.
- As a user, I want to see an image of the Earth so that the app feels connected to locations around the world.
- As a user, I want to enter a city in the search box so that I can look up a location.
- As a user, I want to submit a city search and receive feedback so that I know my request was received.
- As a user, I want to refresh the page by clicking the title so that I can quickly reset the app.
- As a user, I want to access social media links in the footer so that I can connect with the app online.

## Accessibility

- The page uses semantic HTML elements such as `header`, `main`, `form`, `nav`, and `footer`.
- The globe image has descriptive alternative text.
- The city input has a visible label and browser-required validation.
- Search and time updates use live regions so assistive technologies can announce results.
- The title and form controls can be used with a keyboard.

## Future Improvements

- Add a list of saved favorite cities.
- Show multiple city clocks at the same time.
- Add loading indicators while API requests are in progress.
- Use a server-side proxy or a more resilient time service for production use.
- Add automated tests for city searches and API error states.

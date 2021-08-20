import {setCurrentWeather} from './current.js'
import {setForecastWeather} from './forecast.js'
import {createUnitToggle} from './units.js'


// Show or hide the loading modal
let showModal = (show) => {
	let modal = document.querySelector(`.modal`)

	// If we should show, then show!
	if (show) {
		modal.classList.add(`show`)
	} else {
		modal.classList.remove(`show`)
	}
}


// Given a URL to a JSON file, load it asynchronously
let loadJson = async (url) => {
	let response = await fetch(url)
	return await response.json()
}


let loadDataFile = async (file = `data/toronto.json`) => {

	// Show the loader
	showModal(true)

	// Fetch the data, wait for it to return before proceeding
	let json = await loadJson(file)

	// Build the current weather data
	setCurrentWeather(json)

	// Build the forecast data
	setForecastWeather(json)

	// Toggling the temp
	createUnitToggle(json.unit)

	// Remove the loader
	showModal(false)
}

// Begin the application when the application loads
window.addEventListener(`load`, (event) => loadDataFile())
window.loadDataFile = loadDataFile

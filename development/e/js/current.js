// Setup the current weather UI given the supplied data
let setCurrentWeather = (data) => {

	// Select document elements

	let tempEle = document.querySelector(`#currTemp`)
	let highEle = document.querySelector(`#highTemp`)
	let lowEle = document.querySelector(`#lowTemp`)
	let descEle = document.querySelector(`#desc`)
	let iconSm = document.querySelector(`#iconSm`)
	let iconLg = document.querySelector(`#iconLg`)

	// document.body

	// Dynamically set the page title with the city name
	document.title = `Weatherful weather for ${data.location}`

	// Set the current "time" based on incoming data
	let time = data.current.time.light
	
	// Set the background gradient based on the current time
	// let type = data.current.condition.type
	// if (type === `rainy` || type === `sleety` || type === `snowy`) {
	let precipitation = [`rainy`, `sleety`, `snowy`]
	if (precipitation.includes(data.current.condition.type)) {
		document.body.classList.add(`${time}-precip`)
	} else {
		document.body.classList.add(time)
	}



	// TODO: Explain the different between textContent and innerHTML
	// TODO: Option + shift + 8 = °,   Windows: Alt + 0176
	// Current temp
	if (data.unit === "metric") {
		tempEle.innerHTML = `${data.current.temp}&deg;<abbr title="Degrees celsius" class="unit">C</abbr>`
	} else if (data.unit === "imperial") {
		tempEle.innerHTML = `${data.current.temp}&deg;<abbr title="Degrees fahrenheit" class="unit">F</abbr>`
	}
	tempEle.setAttribute(`value`, data.current.temp)

	// Daily high
	highEle.innerHTML = `${data.current.high}&deg;`
	highEle.setAttribute(`value`, data.current.high)

	// Daily low
	lowEle.innerHTML = `${data.current.low}&deg;`
	lowEle.setAttribute(`value`, data.current.low)

	// Assign the weather description
	descEle.textContent = data.current.condition.desc

	// Condition image (large)
	iconLg.setAttribute(`srcset`, `img/${time}-${data.current.condition.type}-lg.svg`)

	// Condition image (small)
	iconSm.setAttribute(`src`, `img/${time}-${data.current.condition.type}-sm.svg`)
	iconSm.setAttribute(`alt`, data.current.condition.desc)
}

export {setCurrentWeather}



let current = {
	time: {
		hour: 14,
		minute: 25,
		light: "day"
	},
	condition: {
		desc: "Get your shovels ready, Toronto. Today it's going to snow!",
		type: "snow"
	},
	temp: 0,
	high: 3,
	low: -1
}


let setCurrentWeather = (data) => {

	//! NOTE: date -> data.current

	// Select document elements
	let iconSm = document.querySelector(`.icon-sm`)
	let iconLg = document.querySelector(`.icon-lg`)
	let desc = document.querySelector(`.desc`)
	let temp = document.querySelector(`.temp`)
	let high = document.querySelector(`.high`)
	let low = document.querySelector(`.low`)

	// Set the current "time" based on incoming data
	// let time = `day`  //! HERE
	
	// Set the background gradient based on the current time
	//document.body.classList.add(`${time}-precip`) //! HERE (precip or not)  //! Actually, leave this out until E

	// Condition image (large)
	iconLg.setAttribute(`srcset`, `img/${data.time.light}-${data.condition.type}-lg.svg`)

	// Condition image (small)
	iconSm.setAttribute(`src`, `img/${data.time.light}-${data.condition.type}-sm.svg`)
	iconSm.setAttribute(`alt`, data.condition.desc)

	// Assign the weather description
	desc.textContent = data.condition.desc

	// TODO: Explain the different between textContent and innerHTML
	// TODO: Option + shift + 8 = °,   Windows: Alt + 0176
	// Current temp
	temp.innerHTML = `${data.temp}&deg;<abbr title="Degrees celsius" class="unit">C</abbr>` //! HERE
	temp.setAttribute(`value`, data.temp)

	// Daily high
	high.innerHTML = `${data.high}&deg;`
	high.setAttribute(`value`, data.high)

	// Daily low
	low.innerHTML = `${data.low}&deg;`
	low.setAttribute(`value`, data.low)

}

// App is loaded...
setCurrentWeather(current)





// Select the unit buttons
let setF = document.querySelector(`#setF`)
let setC = document.querySelector(`#setC`)

// Convert from C to F
let toFahrenheit = (celsius) => {
  return celsius * 9/5 + 32
}

// Convert from F to C
let toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5/9
}
/*
// Convert everything to F
let displayImperialUnits = () => {
  // Remove the "active" from the "C" button and make ready for an upcoming click
	setC.classList.remove(`active`)
	setC.addEventListener(`click`, displayMetricUnits)

	// Add the "active" to the "F" button and make sure we can't click it again
	setF.classList.add(`active`)
	setF.removeEventListener(`click`, displayImperialUnits)

	var convertToF = (ele) => {
		let value = ele.getAttribute(`value`) // Get the value stored in the element
		let tempInF = toFahrenheit(value) 		// Convert
		ele.setAttribute(`value`, tempInF)  	// The real value, not rounded

		// For the main temp, add the unit with it
		ele.innerHTML = `${Math.round(tempInF)}&deg;<abbr title="Degrees fahrenheit" class="unit">F</abbr>`
	}

	// Find all of the <data> elements and convert them
	//! These, replace: document.querySelectorAll(`data`).forEach(convertToF)
	let temp = document.querySelector(`.temp`)
	let high = document.querySelector(`.high`)
	let low = document.querySelector(`.low`)
	let forecastTemp = document.querySelector(`.ranges data`)
	convertToF(temp)
	convertToF(high)
	convertToF(low)
	convertToF(forecastTemp)

	// Maybe merge these??
}

// Convert everything to C
let displayMetricUnits = () => {
  // Remove the "active" from the "F" button and make ready for an upcoming click
	setF.classList.remove(`active`)
	setF.addEventListener(`click`, displayImperialUnits)

	// Add the "active" to the "C" button and make sure we can't click it again
	setC.classList.add(`active`)
	setC.removeEventListener(`click`, displayMetricUnits)
	
	var convertToC = (ele) => {
		let value = ele.getAttribute(`value`) // Get the value stored in the element
		let tempInC = toCelsius(value) 				// Convert
		ele.setAttribute(`value`, tempInC)  	// The real value, not rounded

		// For the main temp, add the unit with it
		ele.innerHTML = `${Math.round(tempInC)}&deg;<abbr title="Degrees celsius" class="unit">C</abbr>`
	}

	// Find all of the <data> elements and convert them
	//! These, replace: document.querySelectorAll(`data`).forEach(convertToC)
	let temp = document.querySelector(`.temp`)
	let high = document.querySelector(`.high`)
	let low = document.querySelector(`.low`)
	let forecastTemp = document.querySelector(`.ranges data`)
	convertToC(temp)
	convertToC(high)
	convertToC(low)
	convertToC(forecastTemp)
}


setC.classList.add(`active`)
setF.addEventListener(`click`, displayImperialUnits)
*/

let tempEle = document.querySelector(`.temp`)
let highEle = document.querySelector(`.high`)
let lowEle = document.querySelector(`.low`)


let setTempToUnit = (ele, toUnit, unit=``) => {
	let currValue = ele.getAttribute(`value`) // Get the value stored in the element
	let newValue = toUnit(currValue) 				  // Convert

	ele.setAttribute(`value`, newValue)  	// The real value, not rounded
	ele.innerHTML = `${Math.round(newValue)}&deg;${unit}` // For the main temp, add the unit with it

	// return Math.round(newTemp)
}


let displayMetricUnits = () => {
	setF.classList.remove(`active`)
	setC.classList.add(`active`)
	setC.removeEventListener(`click`, displayMetricUnits)
	setF.addEventListener(`click`, displayImperialUnits)
	// temp.innerHTML = `${setTempToUnit(temp, toCelsius)}&deg;<abbr title="Degrees celsius" class="unit">C</abbr>`
	// high.innerHTML = `${setTempToUnit(high, toCelsius)}&deg;`
	// low.innerHTML = `${setTempToUnit(low, toCelsius)}&deg;`
	setTempToUnit(tempEle, toCelsius, `<abbr title="Degrees celsius" class="unit">C</abbr>`)
	setTempToUnit(highEle, toCelsius)
	setTempToUnit(lowEle, toCelsius)
}
let displayImperialUnits = () => {
	setC.classList.remove(`active`)
	setF.classList.add(`active`)
	setF.removeEventListener(`click`, displayImperialUnits)
	setC.addEventListener(`click`, displayMetricUnits)
	// temp.innerHTML = `${setTempToUnit(temp, toFahrenheit)}&deg;<abbr title="Fahrenheit celsius" class="unit">F</abbr>`
	// high.innerHTML = `${setTempToUnit(high, toFahrenheit)}&deg;`
	// low.innerHTML = `${setTempToUnit(low, toFahrenheit)}&deg;`
	setTempToUnit(tempEle, toFahrenheit, `<abbr title="Degrees fahrenheit" class="unit">F</abbr>`)
	setTempToUnit(highEle, toFahrenheit)
	setTempToUnit(lowEle, toFahrenheit)
}

setC.classList.add(`active`)
// setC.addEventListener(`click`, displayMetricUnits)
setF.addEventListener(`click`, displayImperialUnits)

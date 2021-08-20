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
		if (ele.matches(`.temp`)) {
			ele.innerHTML = `${Math.round(tempInF)}&deg;<abbr title="Degrees fahrenheit" class="unit">F</abbr>`
		} else {
			ele.innerHTML = `${Math.round(tempInF)}&deg;`
		}
	}

	// Find all of the <data> elements and convert them
	document.querySelectorAll(`data`).forEach(convertToF)
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
		if (ele.matches(`.temp`)) {
			ele.innerHTML = `${Math.round(tempInC)}&deg;<abbr title="Degrees celsius" class="unit">C</abbr>`
		} else {
			ele.innerHTML = `${Math.round(tempInC)}&deg;`
		}
	}

	// Find all of the <data> elements and convert them
	document.querySelectorAll(`data`).forEach(convertToC)
}

let createUnitToggle = (unit) => {
	// Where will this event occur?           setF / setC
  // What type of event will it be?         `click`
	// How do we handle it, when it occurs?   displayImperialUnits / displayMetricUnits

	// If the unit is metric, add the appropriate listener
	if (unit === `metric`) {
		setC.classList.add(`active`)
		setF.addEventListener(`click`, displayImperialUnits)
	} else {
		setF.classList.add(`active`)
		setC.addEventListener(`click`, displayMetricUnits)
	}
}

export {createUnitToggle}
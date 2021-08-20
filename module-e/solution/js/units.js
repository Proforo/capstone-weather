//******* SELECTED ELEMENTS ******* 
let setC = document.querySelector(`#setC`)
let setF = document.querySelector(`#setF`)

// Convert F to C
let toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5/9
}

// Convert C to F
let toFahrenheit = (celsius) => {
  return celsius * 9/5 + 32
}

let setTempToUnit = (ele, toUnit, unit=``) => {
  let currValue = ele.getAttribute(`value`)
  let newValue = toUnit(currValue)

  // Set the new value to the value attribute of the data element
  ele.setAttribute(`value`, newValue)
  // Assign the rounded temp to the UI
  ele.innerHTML = `${Math.round(newValue)}&deg;${unit}`
}

let displayMetricUnits = () => {
  setF.classList.remove(`active`)
  setC.classList.add(`active`)

  // Move the event listeners
  setC.removeEventListener(`click`, displayMetricUnits)
  setF.addEventListener(`click`, displayImperialUnits)

  // Do the conversions
  let convertToC = (ele) => {
    if (ele.matches(`#currTemp`)) {
      setTempToUnit(ele, toCelsius, `<abbr title="Degrees celsius" class="unit">C</abbr>`)
    } else {
      setTempToUnit(ele, toCelsius)
    }
  }
  document.querySelectorAll(`data`).forEach(convertToC)
}

let displayImperialUnits = () => {
  // Move the "active" UI
  setC.classList.remove(`active`)
  setF.classList.add(`active`)

  // Move the event listeners
  setF.removeEventListener(`click`, displayImperialUnits)
  setC.addEventListener(`click`, displayMetricUnits)

  // Do the conversions
  let convertToF = (ele) => {
    if (ele.matches(`#currTemp`)) {
      setTempToUnit(ele, toFahrenheit, `<abbr title="Degrees fahrenheit" class="unit">F</abbr>`)
    } else {
      setTempToUnit(ele, toFahrenheit)
    }
  }
  document.querySelectorAll(`data`).forEach(convertToF)
}

let setUnitToggle = (unit) => {
  // Determine the starting unit
  if (unit === `metric`) {
    setC.classList.add(`active`)
    setF.addEventListener(`click`, displayImperialUnits) 
  } else if (unit === `imperial`) {
    setF.classList.add(`active`)
    setC.addEventListener(`click`, displayMetricUnits) 
  }
}

export {setUnitToggle}
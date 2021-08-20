//******* SAMPLE DATA SET ******* 
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


//******* SELECTED ELEMENTS ******* 
let tempEle = document.querySelector(`#currTemp`)
let highEle = document.querySelector(`#highTemp`)
let lowEle = document.querySelector(`#lowTemp`)
let descEle = document.querySelector(`#desc`)
let iconSm = document.querySelector(`#iconSm`)
let iconLg = document.querySelector(`#iconLg`)


//******* CURRENT TEMP ******* 
let setCurrentWeather = (data) => {

  // Assign the current day's temp
  tempEle.innerHTML = `${data.temp}&deg;<abbr title="Degrees celsius" class="unit">C</abbr>`
  tempEle.setAttribute(`value`, data.temp)

  highEle.innerHTML = `${data.high}&deg;`
  highEle.setAttribute(`value`, data.high)

  lowEle.innerHTML = `${data.low}&deg;`
  lowEle.setAttribute(`value`, data.low)

  // Assign the weather condition
  descEle.textContent = data.condition.desc

  // Condition image (large)
  iconLg.setAttribute(`srcset`, `img/${data.time.light}-${data.condition.type}-lg.svg`)

  // Condition image (small)
  iconSm.setAttribute(`src`, `img/${data.time.light}-${data.condition.type}-sm.svg`)
  iconSm.setAttribute(`alt`, data.condition.desc)
}

// Execute
setCurrentWeather(current) // Dataset for Toronto weather



//////////////////////////////////////////////////


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
  setTempToUnit(tempEle, toCelsius, `<abbr title="Degrees celsius" class="unit">C</abbr>`)
  setTempToUnit(highEle, toCelsius)
  setTempToUnit(lowEle, toCelsius)
}


let displayImperialUnits = () => {
  // Move the "active" UI
  setC.classList.remove(`active`)
  setF.classList.add(`active`)

  // Move the event listeners
  setF.removeEventListener(`click`, displayImperialUnits)
  setC.addEventListener(`click`, displayMetricUnits)

  // Do the conversions
  setTempToUnit(tempEle, toFahrenheit, `<abbr title="Degrees fahrenheit" class="unit">F</abbr>`)
  setTempToUnit(highEle, toFahrenheit)
  setTempToUnit(lowEle, toFahrenheit)
}

// Execute
setC.classList.add(`active`)
setF.addEventListener(`click`, displayImperialUnits) // F

<!-- 
1. Creating elements 🎥
1. Arrays 🎥
1. Booleans and conditions 🎥
1. Event delegation 🎥
1. JSON: JavaScript Object Notation 🎥
1. Asynchronous data fetching 🎥
1. Module import 🎥 
-->


Welcome back! We're on the home stretch of the Weatherful Weather application development.

In this lesson we'll be looking at incorporating data and finalizing the remaining interactions in our UI.
- We'll simulate a live weather data source using a local JSON file
- That data will be used to build the rest of the interface
- Which will also include building the forecasted weather table

So if you're ready, let's jump right into our code!


# Current file

<!-- *************************************** -->
1. Introduce and load the JSON file

```js
// Given a URL to a JSON file, load it asynchronously
let loadJson = async (url) => {
	let response = await fetch(url)
	return await response.json()
}

let appIsLoaded = async (event) => {
   let json = await loadJson(`data/forecast.json`)
   console.log(json)
}

// Begin the application when the application loads
window.addEventListener(`load`, appIsLoaded)
```


<!-- *************************************** -->
1. Split up files (import/export)

```js
let setCurrentWeather = (data) => {

	// Move these into the function
	let tempEle = document.querySelector(`#currTemp`)
	let highEle = document.querySelector(`#highTemp`)
	let lowEle = document.querySelector(`#lowTemp`)
	let descEle = document.querySelector(`#desc`)
	let iconSm = document.querySelector(`#iconSm`)
	let iconLg = document.querySelector(`#iconLg`)

   // ...
}

export {setCurrentWeather}
```

<!-- current.js -->
```js
import {setCurrentWeather} from './current.js'

let appIsLoaded = async (event) => {
   // ...

   // Build the current weather data
   setCurrentWeather(json)

   // ...
}
```


<!-- *************************************** -->
1. Update `data.*` to `data.current.*`
<!-- 1. Update main image `alt` descriptions -->
1. Update metric/imperial starting point

```js
	// Current temp
	if (data.unit === "metric") {
		tempEle.innerHTML = `${data.current.temp}&deg;<abbr title="Degrees celsius" class="unit">C</abbr>`
	} else if (data.unit === "imperial") {
		tempEle.innerHTML = `${data.current.temp}&deg;<abbr title="Degrees fahrenheit" class="unit">F</abbr>`
	}
```


<!-- *************************************** -->
1. Precipitation
```css
.day {
	--grad-light:rgb(90, 154, 232);
	--grad-dark:rgb(21, 101, 162);
}
.day-precip {
	--grad-light: rgb(53, 84, 131);
	--grad-dark: rgb(51, 82, 120);
}
.night {
	--grad-light: rgb(63, 113, 205);
	--grad-dark: rgb(28, 19, 40);
}
.night-precip {
	--grad-light: rgb(45, 58, 74);
	--grad-dark: rgb(29, 38, 51);
}
body {
   /* linear-gradient(var(--grad-light), var(--grad-dark)) */
}
```
```js
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
```

-------

# Forecast

<!-- *************************************** -->
1. Iterate the ranges

```js
// Build the forecast table
let setForecastWeather = (data) => {

	// ********** RANGE TABLE ***********

   // Select the table
	//let table = document.querySelector(`.ranges`)


	// Run one for each of ranges: Hourly, Tomorrow, Week
	let addForecastRange = (type, i) => { 

		// FOR EACH RANGE
		// 1. Build a tbody, give it an id
		// 2. Add a "tab" and button
      // 3. Build rows (forEach)
      //    1. Insert row
		//    2. 4 cells
		//	4. "Woops, now it loads it all together", incorporate .range
		// 	1. Explain `aria-controls` and `aria-label`
		//		2. Make buttons functional
   }

	// For each of the weather-range types
	data.forecast.ranges.forEach(addForecastRange)

	// *********** TABLE TABS ***********

	// Find the existing button tabs
	let tabs = document.querySelector(`.tabs`)
}

export {setForecastWeather}
```

1. Remove the HTML stuff
PASTE IN THE HTML TO THE JS SO IT'S VIEWABLE



<!-- *************************************** -->
```js
```
```css
.range {
	display: none;
	/* font-size: 1.25rem; */
}
.range.active {
	display: table-row-group;
}
.ranges th:nth-child(1) {
	width: 30%;
}
```



-------


# Units


<!-- *************************************** -->
1. Import/export unit.js: setUnitToggle()

```js
let setUnitToggle = (unit) => {

}

export {setUnitToggle}
```


<!-- *************************************** -->
1. Import/export unit.js: setUnitToggle()

```js
let setUnitToggle = (unit) => {
	// If the unit is metric, add the appropriate listener
	if (unit === `metric`) {
		setC.classList.add(`active`)
		setF.addEventListener(`click`, displayImperialUnits)
	} else {
		setF.classList.add(`active`)
		setC.addEventListener(`click`, displayMetricUnits)
	}
}
```


<!-- *************************************** -->
1. Use a loop to get all <data> (DO THIS FOR METRIC AND IMPERIAL)
```js
// setTempToUnit(tempEle, toFahrenheit, `<abbr title="Degrees fahrenheit" class="unit">F</abbr>`)
// setTempToUnit(highEle, toFahrenheit)
// setTempToUnit(lowEle, toFahrenheit)

var convertToF = (ele) => {
	setTempToUnit(ele, toFahrenheit)
}
document.querySelectorAll(`data`).forEach(convertToF)
```

<!-- *************************************** -->
1. Make sure that the `.temp` has the appropriate tail (generalize?)

```js
var convertToF = (ele) => {
	if (ele.matches(`.temp`)) {
		setTempToUnit(ele, toFahrenheit, `<abbr title="Degrees fahrenheit" class="unit">F</abbr>`)
	} else {
		setTempToUnit(ele, toFahrenheit)
	}
}

document.querySelectorAll(`data`).forEach(convertToF)
```



-------


# Other?


<!-- *************************************** -->
1. Modal?
```js
```

<!-- *************************************** -->
```js
	// Dynamically set the page title with the city name
	document.title = `Weatherful weather for ${data.location}`
```







```css


/* MODAL */
/* .modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.9);
	font-size: 2rem; */
	/* --- */
	/* display: none; */
	/* --- */
	/* display: flex;
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.3s; */
	/* --- */
	/* justify-content: center;
	align-items: center; */
	/* --- */
/* } */
/* .modal.show { */
	/* --- */
	/* display: flex; */
	/* --- */
	/* opacity: 1; */
	/* --- */
/* } */
```



# Final Code


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weatherful Weather</title>
    <meta name="description" content="A weatherful weather application interface">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <div class="layout">
      <header class="header container">
        <a href="index.html" class="logo"><img src="img/weather-logo.svg" height="46" width="160" alt="Weatherful Weather logo"></a>
        <ul class="no-markers units">
          <li><button class="btn" id="setC"><abbr title="Degrees celsius">C</abbr></button></li>
          <li><button class="btn" id="setF"><abbr title="Degrees fahrenheit">F</abbr></button></li>
        </ul>
      </header>
      <main class="container weather">
        <article class="current">
          <picture>
            <source srcset="" media="(min-width: 50rem)" id="iconLg">
            <img src="" alt="" id="iconSm">
          </picture>
          <h1 class="heading">Current Conditions</h1>
          <p class="desc" id="desc"></p>
          <data value="" class="temp" id="currTemp"></data>
          <ul class="no-markers high-low">
            <li class="low">
              <img src="img/temp-low.svg" alt="Daily low">
              <data value="" id="highTemp"></data>
            </li>
            <li class="high">
              <data value="" id="lowTemp"></data>
              <img src="img/temp-high.svg" alt="Daily hight">
            </li>
          </ul>
        </article>
        <aside class="forecast">
          <ul class="no-markers tabs" id="tabs">
          </ul>
          <table class="ranges" id="ranges">
            <thead>
              <tr>
                <th>Time</th>
                <th>Conditions</th>
                <th><abbr title="Probability of precipitation">PoP</abbr></th>
                <th><abbr title="Temperature">Temp</abbr></th>
              </tr>
            </thead>
          </table>
        </aside>
      </main>
      <footer class="footer">
        <div class="container footer-group">
          <p class="tagline">It's not always wonderful, but it is always Weatherful!</p>
          <p class="madeby">Created with ❤️ by You!</p>
        </div>
      </footer>
    </div>

    <script src="js/script.js" type="module"></script>
  </body>
</html>
```

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

:root {
  --col-a: rgb(255, 255, 247);
  --col-b: rgb(177, 213, 255);
  --col-c: rgb(184, 187, 205);
  --shade-dark: rgba(0, 0, 0, 0.1);
  --shade-light: rgba(255, 255, 255, 0.1);
}
html {
  height: 100%;
}
body {
  background-color: rgb(90, 154, 232);
  background-image:
    repeating-linear-gradient(
      45deg,
      rgba(255,255,255,0.03) 0,
      rgba(255,255,255,0.03) 1px,
      transparent 1px,
      transparent 4px
    ),
    linear-gradient(
      var(--grad-light), 
      var(--grad-dark)
    );
  background-attachment: fixed;
  font: normal 400 1rem/1 'Roboto', helvetica, arial, sans-serif;
  color: var(--col-a);
  text-align: center;
  height: 100%;
  margin: 0;
}
.day {
	--grad-light:rgb(90, 154, 232);
	--grad-dark:rgb(21, 101, 162);
}
.day-precip {
	--grad-light: rgb(53, 84, 131);
	--grad-dark: rgb(51, 82, 120);
}
.night {
	--grad-light: rgb(63, 113, 205);
	--grad-dark: rgb(28, 19, 40);
}
.night-precip {
	--grad-light: rgb(45, 58, 74);
	--grad-dark: rgb(29, 38, 51);
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

/******** UTILITY ********/
.container {
  width: 100%;
  max-width: 70rem;
  padding: 0 1rem;
  margin: 0 auto;
}
.no-markers {
  list-style-type: none;
  padding: 0;
}
.btn {
  background-color: transparent;
  font: normal 400 1rem/1 'Roboto', helvetica, arial, sans-serif;
  color: var(--col-a);
  padding: 0.75rem 1rem;
  border: 3px solid transparent;
  border-radius: 0.25rem;
  text-transform: capitalize;
}
.btn:hover {
  background-color: var(--shade-light);
}
.btn:focus {
  background-color: var(--shade-light);
  border-color: var(--col-b);
  outline: none;
}
.btn.active {
  border-color: var(--col-a);
  font-weight: 700;
}

/******** HEADER ********/
.header {
  display: flex;
  justify-content: space-between;
}
.logo {
  margin: 1rem 1rem 1rem 0;
}
.units {
  display: flex;
}


/******** WEATHER ********/
.weather {
  flex-grow: 1;
}
/******** CURRENT ********/
.current {
  max-width: 20rem;
  margin: 0 auto;
}
.current::after {
  content: "";
  display: block;
  background-image: url('../img/squiggly-line.svg');
  background-repeat: no-repeat;
  background-position: center center;
  height: 1rem;
  margin: 2rem 0;
}
.heading {
  font-size: 1rem;
  color: var(--col-b);
  text-transform: uppercase;
}
.desc {
  font-size: 1.25rem;
}
.temp {
  display: block;
  font-size: 2.75rem;
  font-weight: 700;
  margin: 1rem 0;
}
.unit {
  font-size: 2rem;
}
.high-low {
  font-size: 2rem;
}
.low {
  color: var(--col-b);
  display: inline;
}
.high {
  display: inline;
}

/******** FORECAST ********/
.tabs {
  display: flex;
  justify-content: space-around;
}
.ranges {
  background-color: var(--shade-dark);
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  border-spacing: 0;
}
.ranges th {
  font-weight: 400;
  color: var(--col-b);
  line-height: 2;
}
.range tr:hover {
  background-color: var(--shade-dark);
}
.range {
  font-size: 1.25rem;
  display: none;
}
.range.active {
  display: table-row-group;
}
.range-temp {
  font-size: 1.5rem;
  font-weight: 700;
}
.ranges th:nth-child(1) {
  width: 30%;
}

/******** FOOTER ********/
.footer {
  background-color: var(--shade-dark);
  color: var(--col-c);
  line-height: 1.5;
  padding: 1rem 0 2rem 0;
  margin-top: 2rem;
}
.tagline, .madeby {
  margin: 0;
}

@media screen and (min-width: 50rem) {
  .weather {
    display: flex;
  }
  .current {
    max-width: none;
    flex-grow: 1;
    margin-right: 2rem;
  }
  .ranges {
    min-width: 25rem;
  }
  .footer {
    padding: 1rem 0;
    line-height: 1;
  }
  .footer-group {
    display: flex;
    justify-content: space-between;
  }
}
```


```js
/************ SCRIPT.JS ************/
import {setCurrentWeather} from './current.js'
import {setForecastWeather} from './forecast.js'
import {setUnitToggle} from './units.js'

let appIsLoaded = async () => {

  // fetch the data
  let response = await fetch(`data/london.json`)
  let json = await response.json()

  // Execute
  setCurrentWeather(json)
  setForecastWeather(json)
  setUnitToggle(json.unit)
}

window.addEventListener(`load`, appIsLoaded)



/************ CURRENT.JS ************/
//******* SELECTED ELEMENTS ******* 
let tempEle = document.querySelector(`#currTemp`)
let highEle = document.querySelector(`#highTemp`)
let lowEle = document.querySelector(`#lowTemp`)
let descEle = document.querySelector(`#desc`)
let iconSm = document.querySelector(`#iconSm`)
let iconLg = document.querySelector(`#iconLg`)


//******* CURRENT TEMP ******* 
let setCurrentWeather = (data) => {

  let unit = data.unit
  let time = data.current.time.light
  let condition = data.current.condition.type

  // let precipitation = [`rain`, `sleet`, `snow`]
  // if (precipitation.includes(condition))

  // Set the current background based on the light condition (day/night)
  if (condition === `rain` || condition === `sleet` || condition === `snow`) {
    document.body.classList.add(`${time}-precip`)
  } else {
    document.body.classList.add(time)
  }

  // Assign the current day's temp
  if (unit === `metric`) {
    tempEle.innerHTML = `${data.current.temp}&deg;<abbr title="Degrees celsius" class="unit">C</abbr>`
  } else if (unit === `imperial`) {
    tempEle.innerHTML = `${data.current.temp}&deg;<abbr title="Degrees fahrenheit" class="unit">F</abbr>`
  }
  tempEle.setAttribute(`value`, data.current.temp)

  // Set the high temp for the day
  highEle.innerHTML = `${data.current.high}&deg;`
  highEle.setAttribute(`value`, data.current.high)

  // Set the low temp for the day
  lowEle.innerHTML = `${data.current.low}&deg;`
  lowEle.setAttribute(`value`, data.current.low)

  // Assign the weather condition
  descEle.textContent = data.current.condition.desc

  // Condition image (large)
  iconLg.setAttribute(`srcset`, `img/${time}-${condition}-lg.svg`)

  // Condition image (small)
  iconSm.setAttribute(`src`, `img/${time}-${condition}-sm.svg`)
  iconSm.setAttribute(`alt`, data.current.condition.desc)
}

export {setCurrentWeather}


/************ FORECAST.JS ************/
let setForecastWeather = (data) => {

  // Selected elements
  let table = document.querySelector(`#ranges`)
  let tabs = document.querySelector(`#tabs`)

  let addForecastRange = (type, i) => { // for each of the 3 ranges
    // Create the tbody for one of the ranges
    let tbody = document.createElement(`tbody`)
    tbody.setAttribute(`id`, type.mode)
    tbody.classList.add(`range`)

    // Create the tab control buttons
    let tab = document.createElement(`li`)
    let mode = document.createElement(`button`)
    mode.classList.add(`btn`)
    mode.textContent = type.mode
    mode.setAttribute(`aria-controls`, type.mode)
    tab.append(mode) // <button> into <li>
    tabs.append(tab) // <li> into <ul>

    let addForecastRow = (row) => { // for each "record" in a range
      // Create a row (<tr>) and append the new row
      let tr = tbody.insertRow()

      // 1st column
      tr.insertCell().textContent = row.time.label

      // 2nd column
      let img = document.createElement(`img`)
      img.setAttribute(`src`, `img/${row.time.light}-${row.condition.type}-xs.svg`)
      img.setAttribute(`alt`, row.condition.desc)
      img.setAttribute(`height`, `48`)
      img.setAttribute(`width`, `60`)
      tr.insertCell().append(img)

      // 3rd column
      tr.insertCell().textContent = `${row.precipitation * 100}%`

      // 4th column
      let data = document.createElement(`data`)
      data.setAttribute(`value`, row.temp)
      data.innerHTML = `${row.temp}&deg;`
      data.classList.add(`range-temp`)
      tr.insertCell().append(data)
    }
    type.records.forEach(addForecastRow)

    // If this is the first weather range, have it be .active
    if (i === 0) {
      tbody.classList.add(`active`)
      mode.classList.add(`active`)
    }

    table.append(tbody)
  }
  data.forecast.ranges.forEach(addForecastRange)

  // When a tab button is cliked...
  let handleModesClicked = (event) => {
    let modeBtn = event.target

    if (modeBtn.matches(`button.btn`)) {
      // Remove the active class from the previously active button
      let prevActiveTab = document.querySelector(`.tabs .btn.active`)
      prevActiveTab.classList.remove(`active`)
      // Add the active class to the new button target
      modeBtn.classList.add(`active`)

      // Remove the active class from the previously active tbody
      let prevActiveTbody = document.querySelector(`.range.active`)
      prevActiveTbody.classList.remove(`active`)
      // Find the associated tbody, select it, make it active
      let tbodyId = modeBtn.getAttribute(`aria-controls`)
      let tbodyRange = document.querySelector(`#${tbodyId}`)
      tbodyRange.classList.add(`active`)
    }
  }
  tabs.addEventListener(`click`, handleModesClicked)
}

export {setForecastWeather}


/************ UNITS.JS ************/
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


```

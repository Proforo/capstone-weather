/* Reminders or questions for me
- datetime format: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#Valid_datetime_Values
- Would it be easier to convert the units by just changing a class (::after)?
- Image names should be brought in from the JSON on the forecast, not determined dynamically based on time
- Does attr around C and F create clickable issues?
- Before and after? Was covered (for the thermometer icons)
- Does converting the C/F create a lot of work to reload the table?
*/

/* "Questioms"
- Regarding current-weather "day" vs "night" icons
	- Should the icon be determined by the true time (requires code that wasn't previously discuses, though not challenging), or simply provide a fake `currentTime` in the JSON file (typical of weather data)?
- "Helvetica Neue" is used in he Zeplin, but is a paid Linotype font.
	- Do the designers have a preferred Google Font to use in place?
- Zeplin does not show a forecast view other than "Hourly", but also has tabs for "Tomorrow" and "Week"
	- Can I assume 12 hours is enough for hourly (or is less better here?)
	- "Tomorrow" might have "Morning", "Afternoon", "Evening", "Night", but that's only 4, so when flipping from one tab to another, the table size (and page length) will contract in height. "Week" also would only have 6 at most. Any preference from the designers for how to deal with that?
	- Table have both "CoP" (Chance) and "PoP" (Percent) on different versions, any preference?


----- NEW
	- Should we crop height of big images?
	- This assumes "metric" by default, need to work that out.
*/
 




// https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
// 
// let current = document.querySelector(`.current`)
let condition = document.querySelector(`.condition`)
let city = document.querySelector(`.city`)
let unit = document.querySelector(`.unit`)
let temp = document.querySelector(`.number`)
let high = document.querySelector(`.high`)
let low = document.querySelector(`.low`)


let modes = document.querySelector(`.forecast-range`)
let table = document.querySelector(`.forecast`)


let loadJson = async (url) => {
	let response = await fetch(url)
	return await response.json()
}

let setCurrentWeather = (data) => {
	/* 
	"location": "Toronto, ON",
  "current": {
    "condition": {
      "desc": "Cloudy conditions",
      "icon": "cloudy"
    },
    "temp": 12,
    "highTemp": 50,
    "lowTemp": -10
	} */

	/* 
	<main class="current">
		<img src="img/day-clear-lg.svg" alt="Sunny with some clouds" class="condition">		
		<h1 class="weather">Current conditions in <strong class="city">Toronto, ON</strong></h1>
		<div class="temp"><data value="30" class="number">30&deg;</data><abbr title="Degrees celsius" class="unit">C</abbr></div>
		<footer class="range">
			<data value="34" class="high">34&deg;</date>
			<data value="26" class="low">26&deg;</data>
		</footer>
	</main> */
	let time = `night`

	if (data.current.time.hour >= 8 && data.current.time.hour < 20) {
		time = `day`
	}
	
	// Great example of AND vs OR (start with nested, first)
	
	
	
	
	// let type = data.current.condition.type
	// if (type === `rainy` || type === `sleety` || type === `snowy`) {
	let precipitation = [`rainy`, `sleety`, `snowy`]
	if (precipitation.includes(data.current.condition.type)) {
		document.body.classList.add(`${time}-precip`)
	} else {
		document.body.classList.add(time)
	}
	


	// <img srcset="img/mixing-ingredients-480w.jpg 480w, img/mixing-ingredients-960w.jpg 960w, img/mixing-ingredients-1920w.jpg 1920w" src="img/mixing-ingredients-960w.jpg" alt="All ingredients mixed to form a shaggy dough">

	let img = document.createElement(`img`)
	img.setAttribute(`src`, `img/${time}-${data.current.condition.type}-sm.svg`)
	// img.setAttribute(`sizes`, `(max-width: 639px) 640px, 960px`)
	img.setAttribute(`srcset`, `
		img/${time}-${data.current.condition.type}-sm.svg 640w,
		img/${time}-${data.current.condition.type}-lg.svg 1960w`)
	img.setAttribute(`alt`, data.current.condition.desc)
	// img.classList.add(`condition`)
	condition.append(img)

	city.textContent = data.location


	// Explain the different between textContent and innerHTML
	temp.innerHTML = `${data.current.temp}&deg;`
	temp.setAttribute(`value`, data.current.temp)
	high.innerHTML = `${data.current.high}&deg;`
	high.setAttribute(`value`, data.current.high)
	low.innerHTML = `${data.current.low}&deg;`
	low.setAttribute(`value`, data.current.low)


	if (data.unit === "metric") {
		// unit.textContent = `C`
		temp.innerHTML += `<abbr title="Degrees celcius" class="unit">C</abbr>`
	} else if (data.unit === "imperial") {
		// unit.textContent = `F`
		temp.innerHTML += `<abbr title="Degrees farenheit" class="unit">F</abbr>`
	}

}


let buildForecastTableHeader = () => {

	// Sort this out...
	let headings = [
		{label:`Time`, full:null}, 
		{label:`Conditions`, full:null},
		{label:`PoP`, full:`Probability of precipitation`},
		{label:`Temp`, full: `Temperature`}
	]

	// Table Head
	let thead = table.createTHead() // Both creates and inserts! (because they don't hold content)
	let tr = thead.insertRow() // Both creates and inserts! (because they don't hold content))

	headings.forEach((heading) => {
		let th = document.createElement("th")

		if (heading.full) {
			let abbr = document.createElement(`abbr`)
			abbr.append(heading.label)
			abbr.setAttribute(`title`, heading.full)
			th.append(abbr)
		} else {
			th.append(heading.label)
		}

		tr.append(th)
	})
}


let buildForecastTableBody = (data) => {
	// is a <tbody> necessary here?
	// let hourly = document.createElement(`tbody`)
	// let week = document.createElement(`tbody`)
	// let tomorrow = document.createElement(`tbody`)

	//let div = document.createElement(`tbody`)

	// This has to be explained: "An array is an object" (aka, Associative array)
	// Don't bother with the loop, just hit the three objects
	// for (let key in data.forecast) {
		// console.log(key, data.forecast[key]) // We can access the values this way
		
		// tbody.classList.add(key)
		// tbody.toggleAttribute(`hidden`, true) // or do this with a class?

	
	let addForecastType = (type, i) => { // Hourly, Tomorrow, Week

		// CAN I HAVE A DIV IN A TBODY
		let tbody = document.createElement(`tbody`)
		tbody.setAttribute(`id`, type.mode)

		let tab = document.createElement(`li`)
		tab.classList.add('tab')
		let mode = document.createElement('button')
		mode.classList.add(`btn`)
		mode.textContent = type.mode
		mode.setAttribute(`aria-controls`, type.mode)
		mode.setAttribute(`aria-label`, type.mode)
		tab.append(mode)
		modes.append(tab)

		let addForecastRows = (row) => {

			let tr = tbody.insertRow()

			// Time
			// let td = tr.insertCell()
			// td.append(row.time)
			tr.insertCell().textContent = row.time.label

			let time = `day` // (or `night`)

			// Icon
			let img = document.createElement(`img`)
			img.setAttribute(`src`, `img/${time}-${row.condition.type}-xs.svg`)
			img.setAttribute(`alt`, row.condition.desc)
			img.classList.add(`icon-xs`)
			tr.insertCell().append(img)

			// CoP
			tr.insertCell().textContent = `${row.chanceOfPrecipitation * 100}%`

			// Temp
			// tr.insertCell().append(`${row.temp}&deg;`)
			tr.insertCell().innerHTML = `<data value="${row.temp}">${row.temp}&deg;</data>`

			// Add the "panel" for this forecast type to the tbody
		}

		type.record.forEach(addForecastRows)

		// Add the panel to the ~<tbody>~ <table>
		console.log(i);
		if (i === 0) {
			mode.classList.add(`active`)
			tbody.classList.add(`active`)
		}
		table.append(tbody)
	}

	data.forecast.forEach(addForecastType)
	// table.querySelector('tbody').classList.add(`shown`) // First one
	// table.querySelector('tbody').toggleAttribute(`hidden`, false)
}




// When the button controls list is clicked, determine the button and image and make them active
let handleModesClicked = (event) => {
  // The element that was clicked
  let modelBtn = event.target

  // Ensure the element was a .gallery-btn, if so...
  if (modelBtn.matches(`.tab .btn`)) {
    // Remove ".active" from the button and the tbody
    let prevActiveTab = document.querySelector('.tab .btn.active')
    let prevActiveTbody = document.querySelector('tbody.active')
    prevActiveTab.classList.remove('active')
    prevActiveTbody.classList.remove('active')

    // Add ".active" to the desired image and btn-control
    let tbodyId = modelBtn.getAttribute(`aria-controls`)
    let tbodyPanel = document.querySelector(`#${tbodyId}`)
    tbodyPanel.classList.add(`active`)
    modelBtn.classList.add(`active`)
  }
}
modes.addEventListener(`click`, handleModesClicked)


// **********************************************


let toFahrenheit = (celcius) => {
  return celcius * 9/5 + 32
}

// Gets a qty in g, returns a formatted string in lbs,oz
let getImperialStr = (qty, withUnit=true) => {
	let tempInF = toFahrenheit(qty)  // Convert g to oz
	if (withUnit) {
		return `${Math.floor(tempInF)}&deg;<abbr title="Degrees farenheit" class="unit">F</abbr>`
	} else {
		return `${Math.floor(tempInF)}&deg;`
	}
	/*
	BETTER TO DO THESE WITH THE UNIT AS A VARIABLE, SINGLE RETURN?
	WHAT ABOUT IF WE DONT SET =true AND JUST USE THE NULL CASE?
	*/
}

// Gets a qty in g, returns a formatted string in lbs,oz
let getMetricStr = (qty, withUnit=true) => {
	if (withUnit) {
		return `${qty}&deg;<abbr title="Degrees celcius" class="unit">C</abbr>`
	} else {
		return `${qty}&deg;`
	}
}

let setF = document.querySelector(`#setF`)
let setC = document.querySelector(`#setC`)

let displayImperialUnits = () => {
  // Update the .switch button UI
  setC.classList.remove(`active`)
	setF.classList.add(`active`)

	document.querySelectorAll(`data`).forEach((ele) => {
		// .value needs to be set as well
		if (ele.matches(`.number`))
			ele.innerHTML = getImperialStr(ele.value, true)
		else
			ele.innerHTML = getImperialStr(ele.value, false)
	})
}

let displayMetricUnits = () => {
  // Update the .switch button UI
  setF.classList.remove(`active`)
	setC.classList.add(`active`)

	document.querySelectorAll(`data`).forEach((ele) => {
		// .value needs to be set as well
		if (ele.matches(`.number`))
			ele.innerHTML = getMetricStr(ele.value, true)
		else
			ele.innerHTML = getMetricStr(ele.value, false)
	})
}

let createUnitToggle = () => {
  // Where will this event occur?           btnImperial
  // What type of event will it be?         `click`
  // How do we handle it, when it occurs?   displayImperialUnits
  setF.addEventListener(`click`, displayImperialUnits)
  setC.addEventListener(`click`, displayMetricUnits)
}

// **********************************************





window.addEventListener(`load`, async (event) => {
	let json = await loadJson(`/data/forecast.json`)
	
	createUnitToggle()

	buildForecastTableHeader()  // Put this in the table
	buildForecastTableBody(json)
	setCurrentWeather(json)
})





/* 
<thead>
	<tr>
		<th>Time</th>
		<th>Conditions</th>
		<th><abbr title="Chance of precipitation">CoP</abbr></th>
		<th><abbr title="Temperature">Temp</abbr></th>
	</tr>
</thead>
<tbody>
	<tr>
		<td class="forecast-time"><time datetime="2011-11-18 14:00">2<small>pm</small></time></td>
		<td><img src="img/sunny-clouds-copy-2.svg" alt="" class="fore-icon"></td> <!-- add alts -->
		<td>0%</td>
		<td class="forecast-temp">30&deg;</td>
	</tr>
	<tr>
		<td class="forecast-time"><time datetime="2011-11-18 15:00">3<small>pm</small></time></td>
		<td><img src="img/sunny-clouds-copy-2.svg" alt="" class="fore-icon"></td> <!-- add alts -->
		<td>0%</td>
		<td class="forecast-temp">30&deg;</td>
	</tr>
</tbody>
*/

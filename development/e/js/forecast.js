/* let buildForecastTableHeader = (table, data) => {

	// Table Head
	let thead = table.createTHead() // Both creates and inserts! (because they don't hold content)
	let tr = thead.insertRow() // Both creates and inserts! (because they don't hold content))

	data.forecast.columns.forEach((heading) => {
		// Create a <th> (note that heading data doesn't have its own method - we'll need to append)
		let th = document.createElement("th")

		// If there is a "full" version of the weather condition, use it
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
} */

// Build the forecast table body, given a table reference and a dataset
let buildForecastTableBody = (data) => {

	// Select the table
	let table = document.querySelector(`.ranges`)	
	// table.innerHTML = ``
	table.querySelectorAll(`.range`).forEach(tbody => table.removeChild(tbody))

	// Find the existing button tabs
	let tabs = document.querySelector(`.tabs`)
	tabs.innerHTML = ``

	// Run one for each of ranges: Hourly, Tomorrow, Week
	let addForecastRange = (type, i) => { 

		// ************* TABLE
		// Build a tbody for the range
		let tbody = document.createElement(`tbody`)
		tbody.setAttribute(`id`, type.mode)
		tbody.classList.add(`range`)

		// ************* BUTTON
		// Create a corresponding "tab" button to be added to the list
		let tab = document.createElement(`li`)
		tab.classList.add(`tab`)

		let mode = document.createElement('button')
		mode.classList.add(`btn`)
		mode.textContent = type.mode
		mode.setAttribute(`aria-controls`, type.mode)
		mode.setAttribute(`aria-label`, type.mode)

		tab.append(mode) // <button> -> <li>
		tabs.append(tab) // <li> -> <ul>

		// ************* ROWS
		// Build a <tr> row from each record
		let addForecastRow = (row) => {

			let tr = tbody.insertRow()  // Creat and add

			// FIRST column (time)
			// Could be this way first, then...
			// let td = tr.insertCell()
			// td.textContent = row.time
			tr.insertCell().textContent = row.time.label

			// SECOND column (condition)
			let img = document.createElement(`img`)
			img.setAttribute(`src`, `img/${row.time.light}-${row.condition.type}-xs.svg`)
			img.setAttribute(`alt`, row.condition.desc)
			img.setAttribute(`height`, `48`) //explain this
			img.setAttribute(`width`, `60`) //explain this
			img.classList.add(`icon-xs`)
			tr.insertCell().append(img)

			// THIRD column (precipitation)
			tr.insertCell().textContent = `${row.precipitation * 100}%`

			// FOURTH column (temperature)
			let data = document.createElement(`data`)
			data.setAttribute(`value`, row.temp)
			data.classList.add(`range-temp`)
			data.innerHTML = `&deg;`
			data.prepend(row.temp)
			tr.insertCell().append(data)
		}

		// For each record in the range array, create a table row
		type.records.forEach(addForecastRow)

		// If this is the first weather range, have it be displayed
		if (i === 0) {
			mode.classList.add(`active`)
			tbody.classList.add(`active`)
		}

		// Add the weatherrange to the <table>
		table.append(tbody)
	}

	// For each of the weather-range types
	data.forecast.ranges.forEach(addForecastRange)

 	// When the button controls list is clicked, determine the button and image and make them active
	let handleModesClicked = (event) => {

		// The button element that was clicked
		let modelBtn = event.target

		// Ensure the element was a .btn, if so...
		if (modelBtn.matches(`.btn`)) {
			// Remove ".active" from the button
			let prevActiveTab = document.querySelector('.tab .btn.active')
			prevActiveTab.classList.remove('active')

			// Remove ".active" from the tbody
			let prevActiveTbody = document.querySelector('tbody.active')
			prevActiveTbody.classList.remove('active')

			// Add ".active" to the desired image and btn-control
			let tbodyId = modelBtn.getAttribute(`aria-controls`)  // Which .range is this controlling?
			let tbodyRange = document.querySelector(`#${tbodyId}`)  // Find it!
			tbodyRange.classList.add(`active`) // Make the range active
			modelBtn.classList.add(`active`) // Make the button active to match
		}
	}

	// If the entire .tabs control is clicked
	tabs.addEventListener(`click`, handleModesClicked)
}


// Build the forecast table
let setForecastWeather = (data) => {

	// Build the header
	//buildForecastTableHeader(table, data)

	// Build the body
	buildForecastTableBody(data)
}


// DO THE BODY FIRST TO SHOW HOW INSERTCELL WORKS!!
export {setForecastWeather}

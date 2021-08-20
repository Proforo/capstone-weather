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
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
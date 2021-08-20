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
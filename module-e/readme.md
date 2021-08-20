# Module E

## Starting code

### HTML (`index.html`)

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
          <ul class="no-markers tabs">
            <li><button class="btn active">Hourly</button></li>
            <li><button class="btn">Tomorrow</button></li>
            <li><button class="btn">Week</button></li>
          </ul>
          <table class="ranges">
            <thead>
              <tr>
                <th>Time</th>
                <th>Conditions</th>
                <th><abbr title="Probability of precipitation">PoP</abbr></th>
                <th><abbr title="Temperature">Temp</abbr></th>
              </tr>
            </thead>
            <tbody class="range">
              <tr>
                <td>3:00 pm</td>
                <td><img src="img/day-snow-xs.svg" height="48" width="60" alt="Snow"></td>
                <td>100%</td>
                <td class="range-temp"><data value="-1">-1&deg;</data></td>
              </tr>
              <tr>
                <td>4:00 pm</td>
                <td><img src="img/day-sleet-xs.svg" height="48" width="60" alt="Sleet"></td>
                <td>90%</td>
                <td class="range-temp"><data value="0">0&deg;</data></td>
              </tr>
              <tr>
                <td>5:00 pm</td>
                <td><img src="img/day-rain-xs.svg" height="48" width="60" alt="Rain"></td>
                <td>80%</td>
                <td class="range-temp"><data value="0">0&deg;</data></td>
              </tr>
              <tr>
                <td>6:00 pm</td>
                <td><img src="img/day-foggy-xs.svg" height="48" width="60" alt="Foggy"></td>
                <td>50%</td>
                <td class="range-temp"><data value="1">1&deg;</data></td>
              </tr>
              <tr>
                <td>7:00 pm</td>
                <td><img src="img/day-windy-xs.svg" height="48" width="60" alt="Windy"></td>
                <td>25%</td>
                <td class="range-temp"><data value="1">1&deg;</data></td>
              </tr>
              <tr>
                <td>8:00 pm</td>
                <td><img src="img/night-cloudy-xs.svg" height="48" width="60" alt="Cloudy"></td>
                <td>10%</td>
                <td class="range-temp"><data value="2">2&deg;</data></td>
              </tr>
              <tr>
                <td>9:00 pm</td>
                <td><img src="img/night-partlycloudy-xs.svg" height="48" width="60" alt="Partly Cloudy"></td>
                <td>0%</td>
                <td class="range-temp"><data value="2">2&deg;</data></td>
              </tr>
              <tr>
                <td>10:00 pm</td>
                <td><img src="img/night-clear-xs.svg" height="48" width="60" alt="Clear"></td>
                <td>0%</td>
                <td class="range-temp"><data value="3">3&deg;</data></td>
              </tr>
            </tbody>
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

    <script src="js/script.js"></script>
  </body>
</html>
```

### CSS (`style.css`)

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
      rgb(90, 154, 232), 
      rgb(21, 101, 162)
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
}
.range-temp {
  font-size: 1.5rem;
  font-weight: 700;
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

### JS (`script.js`)

```js
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

```



## Steps

### Part 1: Setup script

#### A. Loading data as JSON

1. Write an `async` function named `appIsLoaded`, then attach to the `window` using `addEventListener()` for the `load` event
   ```javascript
   let appIsLoaded = async () => {

   }
   window.addEventListener(`load`, appIsLoaded)
   ```

1. Within `appIsLoaded`, `await fetch()` one of the data files (`data/london.json` for example), then `await` the `response.json()`
   ```javascript
   let appIsLoaded = async () => {
      let response = await fetch(`data/london.json`)
      let json = await response.json()
   }
   window.addEventListener(`load`, appIsLoaded)
   ```

1. Move the previous call to `setCurrentWeather()` into the `appIsLoaded` function, passing `json` as the argument
   ```javascript
   setCurrentWeather(json)
   ```

1. Remove the `current` sample data set from the top of the file `js/script.js`


### Part 2: Current weather

#### A. Export/import

1. Within the `js` folder, create a new file named `current.js`. Move the entire function `setCurrentWeather`, and all of the relevant element references

   ```javascript
   // current.js
   let tempEle = document.querySelector(`#currTemp`)
   let highEle = document.querySelector(`#highTemp`)
   let lowEle = document.querySelector(`#lowTemp`)
   let descEle = document.querySelector(`#desc`)
   let iconSm = document.querySelector(`#iconSm`)
   let iconLg = document.querySelector(`#iconLg`)

   let setCurrentWeather = (data) => {
   // MOVE THE ENTIRE FUNCTION
   }
   ```

1. At the bottom of `js/current.js`, `export` the `setCurrentWeather` function
   ```javascript
   export {setCurrentWeather}
   ```

1. At the stop of `js/script.js`, `import` the `setCurrentWeather` function from `./current.js`
   ```javascript
   import {setCurrentWeather} from './current.js'
   ```

1. Update the `<script>` from `index.html` to include the attribute `type="module"`
   ```javascript
   <script src="js/script.js" type="module"></script>
   ```

#### B. Update data

1. Update all of the references to the `data` parameter within `setCurrentWeather` to be `data.current`:
   ```javascript
   let setCurrentWeather = (data) => {

      // Assign the current day's temp
      tempEle.innerHTML = `${data.current.temp}&deg;<abbr title="Degrees celsius" class="unit">C</abbr>`
      tempEle.setAttribute(`value`, data.current.temp)

      highEle.innerHTML = `${data.current.high}&deg;`
      highEle.setAttribute(`value`, data.current.high)

      lowEle.innerHTML = `${data.current.low}&deg;`
      lowEle.setAttribute(`value`, data.current.low)

      // Assign the weather condition
      descEle.textContent = data.current.condition.desc

      // Condition image (large)
      iconLg.setAttribute(`srcset`, `img/${data.current.time.light}-${data.current.condition.type}-lg.svg`)

      // Condition image (small)
      iconSm.setAttribute(`src`, `img/${data.current.time.light}-${data.current.condition.type}-sm.svg`)
      iconSm.setAttribute(`alt`, data.current.condition.desc)
   }
   ```
 1. The cities loaded may default to either metric (C) or imperial (F). Within `setCurrentWeather`, store `data.unit` as a new variable simply named `unit` and then write a condition statement checking for the value of either `"metric"` or `"imperial"`, and assign the appropriate `<abbr>` element (for "C" or "F") to `tempEle.innerHTML`:
   ```javascript
   let unit = data.unit
   
   if (unit === `metric`) {
      tempEle.innerHTML = `${data.current.temp}&deg;<abbr title="Degrees celsius" class="unit">C</abbr>`
   } else if (unit === `imperial`) {
      tempEle.innerHTML = `${data.current.temp}&deg;<abbr title="Degrees fahrenheit" class="unit">F</abbr>`
   }
   ```

#### C. Dynamic background gradient

1. Review the new rules added to `css/style.css` for classes `day`, `day-precip`, `night` and `night-precip`. Modify the `linear-gradient()` to have `var(--grad-light)` replacing the first color and `var(--grad-dark)` replacing the second color:
   ```css
   body {
      /* Existing properties */

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

      /* Existing properties */
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
   ```

1. Within `setCurrentWeather`, assign `data.current.time.light` and `data.current.condition.type` to variables `time` and `condition` respectively (making it easier to reference the data)
   ```javascript
   let time = data.current.time.light
   let condition = data.current.condition.type
   ```

1. Write an `if` statement to check if the `condition` variable matches either `"rain"`, `"sleet"` or `"snow"`. If so, `add()` the class name of the string value of `time`, appended with `-precip` to the `document.body`. Or `else`, simply add the string value stored within the variable `time`
   ```javascript
   // Set the current background based on the light condition (day/night)
   if (condition === `rain` || condition === `sleet` || condition === `snow`) {
      document.body.classList.add(`${time}-precip`)
   } else {
      document.body.classList.add(time)
   }
   ```


### Part 3: Forecast weather

#### A. Export/import

1. Within the `js` folder, create a new file named `forecast.js`

1. Inside of the new document `forecast.js`, write a new function named `setForecastWeather`, which will receive one argument, saving it to function's incoming parameter `data`
   ```javascript
   let setForecastWeather = (data) => {

   }
   ```
1. As the last line of `forecast.js`, write an `export` statement for `setForecastWeather`
   ```javascript
   export {setForecastWeather}
   ```
   
1. Back in `script.js`, directly below the existing `import` statement at the top of the document, `import {setForecastWeather}` from the file `./forecast.js`
   ```javascript
   import {setForecastWeather} from './forecast.js'
   ```
1. At the bottom of `appIsLoaded` (in `script.js`), call the function `setForecastWeather`, passing it the `json` object as an argument
   ```javascript
   let appIsLoaded = async () => {
      let response = await fetch(`data/london.json`)
      let json = await response.json()

      setCurrentWeather(json)
      setForecastWeather(json)
   }
   ```

#### B. Prepare the HTML

1. Remove the existing `<tbody>` element (currently holding sample forecast data) from within the `<table>` element, sitting inside of the `<aside class="forecast">`
   - Be sure to leave the `<thead>` in place to keep the column headings for the table
   ```html
   <table class="ranges">
      <thead>
         <tr>
            <th>Time</th>
            <th>Conditions</th>
            <th><abbr title="Probability of precipitation">PoP</abbr></th>
            <th><abbr title="Temperature">Temp</abbr></th>
         </tr>
      </thead>
      <!-- removed <tbody class="range">...</tbody> -->
   </table>
   ```

1. Add an `id` attribute to the forecast `<table>`, giving it a value of `ranges`
   ```html
   <table class="ranges" id="ranges">
      ...
   </table>
   ```
1. The function `addForecastRange` should be called once `forEach()` of the `data.forecast.ranges` objects
   ```js
   data.forecast.ranges.forEach(addForecastRange)
   ```
1. Within the new function `setForecastWeather`, write a function (yes, a function within a function!) named `addForecastRange`, that will receive a single argument, storing it as the incoming parameter `type`
   ```js
   let addForecastRange = (type) => {

   }
   ```
1. Create one `tbody` elements for each range, by using `document.createElement()` within the  `addForecastRange` function, storing the element reference as `tbody` and assigning it the `type.mode` value as its `id` using `setAttribute()`
   ```javascript
   let tbody = document.createElement(`tbody`)
   tbody.setAttribute(`id`, type.mode)
   ```

1. Within the definition for the new function `setForecastWeather()`, `querySelector` the element with `id="ranges"` from the `document`, storing the reference as a variable named `table`
   ```js
   let table = document.querySelector(`#ranges`)
   ```
   
1. Append the new `<tbody>` element created, to the `table` element, at the bottom of the `addForecastRange` function
   ```javascript
   table.append(tbody)
   ```

1. Remove the three `<li>` elements from the `<ul>` with the class `tabs` (used to hold the tabs labeled "Hourly", "Tomorrow" and "Week") from within `<aside class="forecast">`, leaving the `<ul>` itself in place
   ```html
   <aside class="forecast">
      <ul class="no-markers tabs">
         <!-- removed three <li> elements-->
      </ul>
      ...
   </aside>
   ```   

1. Add an `id` attribute to the `<ul>` that was holding the tabs, giving it a value of `tabs`
   ```html
   <ul class="no-markers tabs" id="tabs"></ul>
   ```

1. Within the definition for the new function `setForecastWeather()`, `querySelector` the element with `id="tabs"` from the `document`, storing the reference as a variable named `tabs`
   ```js
   let tabs = document.querySelector(`#tabs`)
   ```

#### C. Create range tables and rows

1. To setup for the dynamic weather range panels:
   1. Update the definition for the rule that selects the `.range` elements in `style.css`, setting `display: none`, so they're all hidden by default
  
1. Create one more nested function (_a function, in a function, in a function!_) named `addForecastRow` that will receive a single argument, caught as the parameter `row`, then place it within the existing `addForecastRange`
   ```javascript
   let addForecastRow = (row) => { 

   }
   ```
1. The function `addForecastRow` should be called once `forEach()` of the `type.records` objects
   ```javascript
   type.records.forEach(addForecastRow)
   ```

1. At the top of the new `addForecastRow` function, create a table row (<tr>) that will self-append itself to the table, using the `tbody` method `insertRow()`, storing its reference to a variable `tr` (so that we can add `<td>` columns to it)
   ```javascript
   let tr = tbody.insertRow()
   ```

#### D. Populate columns

The method `insertCell()` (which is a method of a table row: `<tr>`) will be used for all four columns of data to both create and append a new cell to each table row being built.

1. Insert a cell using `tr.insertCell()`, immediately assigning its `textContent` the value of `row.time.label`
   ```javascript
   // 1st column
   tr.insertCell().textContent = row.time.label
   ```

1. Create an `<img>` element using `document.createElement()`, assigning it to a variable `img`, then add the following attributes (using `setAttribute()` for each):
   1. `src`: `img/${row.time.light}-${row.condition.type}-xs.svg`
   1. `alt`: `row.condition.desc`
   1. `height`: `48`
   1. `width`: `60`
   
   Once created, insert a cell into the row using `tr.insertCell()`, then append to it the new `img` element just created

   ```javascript
   // 2nd column
   let img = document.createElement(`img`)
   img.setAttribute(`src`, `img/${row.time.light}-${row.condition.type}-xs.svg`)
   img.setAttribute(`alt`, row.condition.desc)
   img.setAttribute(`height`, `48`)
   img.setAttribute(`width`, `60`)
   tr.insertCell().append(img)
   ```

1. Insert a cell using `tr.insertCell()`, immediately assigning its `textContent` the formatted percentage value of `${row.precipitation * 100}%`
   ```javascript
   // 3rd column
   tr.insertCell().textContent = `${row.precipitation * 100}%`
   ```

1. Create a `<data>` element using `document.createElement()`, adding to it:
   1. The `value` attribute, assigning it `row.temp`
   1. Applying the `innerHTML` value of `${row.temp}&deg;`
   1. Adding the `range-temp` class to the `classList`

   Once created, insert a cell into the row using `tr.insertCell()`, then append to it the new `data` element just created

   ```javascript
   // 4th column
   let data = document.createElement(`data`)
   data.setAttribute(`value`, row.temp)
   data.innerHTML = `${row.temp}&deg;`
   data.classList.add(`range-temp`)
   tr.insertCell().append(data)
   ```
1. Within the  `addForecastRange` function, `add()` the class `range` to the element's `classList`
   ```javascript
   let tbody = document.createElement(`tbody`)
   tbody.setAttribute(`id`, type.mode)
   tbody.classList.add(`range`)
   ```
1. Write a new rule for `.range` panels that are also `.active`, which will overwrite the `display: none` declaration, by setting the `tbody` back to its default `display: table-row-group`

      ```css
      .range {
         font-size: 1.25rem;
         display: none;
      }
      .range.active {
         display: table-row-group;
      }
      ```


#### E. Tab control buttons

1. Update the `addForecastRange` function definition, adding a second parameter named `i`, which will automatically be stored with a Number representing the number of times the `forEach()` loop has run (starting from `0` for the first time)

   ```javascript
   let addForecastRange = (type, i) => {

   }
   ```

1. Within the `addForecastRange` function (directly above the `addForecastRow` function), create a `<li>` and a `<button>`, giving the button:
   1. The class `btn` 
   1. The `textContent` a value of `type.mode`
   1. The `aria-controls` attribute a value of `type.mode`

   Once complete, `append()` the `button` within the `li`, then `append()` the `li` to the `tabs` element (stored in a previous step)

   ```javascript
   // Create the tab control buttons
   let tab = document.createElement(`li`)
   let mode = document.createElement(`button`)
   mode.classList.add(`btn`)
   mode.textContent = type.mode
   mode.setAttribute(`aria-controls`, type.mode)
   tab.append(mode) // <button> into <li>
   tabs.append(tab) // <li> into <ul>
   ```

1. Within the `addForecastRange` function (directly below the `addForecastRow` function), write a condition statement that checks if the `i` (representing the loop iteration number) exactly matches `0`, meaning its the first time the function is being called for this loop. In the condition block:

   1. Add the class `active` to the `tbody` element's `classList`
   1. Add the class `active` to the `mode` element's `classList`

   ```javascript
   if (i === 0) {
      tbody.classList.add(`active`)
      mode.classList.add(`active`)
   }
   ```

1. Within `setForecastWeather` (directly under the function `addForecastRange`), write a function named `handleModesClicked`. This is the event handler for a `click` of the entire `tabs` unordered list that was just constructed. It should also catch the details of the click to a parameter named `event`

   ```javascript
   let handleModesClicked = (event) => {

   }
   tabs.addEventListener(`click`, handleModesClicked)
   ```

1. Within the `handleModesClicked` function, store the `event.target` as a variable `modeBtn`. Then, write a condition statement to check if `modeBtn.matches('button.btn')`., if what was clicked is a `<button>` with a class of `btn`
   ```javascript
   let modeBtn = event.target
   if (modeBtn.matches(`button.btn`)) {

   }
   ```

1. Inside of the condition statement written in the previous step, do the following:
   
   1. Query the `document` for any `.btn` within `.tabs` that's current `.active` (`.tabs .btn.active`), then remove the `active` class from the element's `classList`, and `add()` the `active` class to the `modeBtn` that was clicked

      ```javascript
      let prevActiveTab = document.querySelector(`.tabs .btn.active`)
      prevActiveTab.classList.remove(`active`)
      modeBtn.classList.add(`active`)
      ```

   2. Query the `document` for any `.range` element that's currently `.active` (`.range.active`), then remove the `active` class from the element's `classList`

      ```js
      let prevActiveTbody = document.querySelector(`.range.active`)
      prevActiveTbody.classList.remove(`active`)
      ```

   3. Activate the `tbody` that corresponds with the tab button clicked by storing the value of `getAttribute('aria-controls')` as a variable (`tbodyId`). Combine that `id` with a `#` symbol to build a selector query that will find the matching `tbody`. Once found, `add()` the `active` class to the `classList` of the `tbody`

      ```javascript
      let tbodyId = modeBtn.getAttribute(`aria-controls`)
      let tbodyRange = document.querySelector(`#${tbodyId}`)
      tbodyRange.classList.add(`active`)
      ```

1. Adjust the width of the new columns to better accommodate the information, by writing a new rule in `style.css` that will select the first `th` of the `.ranges` table, giving it a `width: 30%`:

   ```css
   .ranges th:nth-child(1) {
      width: 30%;
   }
   ```

### Part 4: Units weather

#### A. Export/import

1. Within the `js` folder, create a new file named `units.js`

1. In `script.js`, cut all of the code that pertains to the `unit` conversion, then paste it into `units.js`:
   1. The function `toCelsius`
   1. The function `toFahrenheit`
   1. The function `setTempToUnit`
   1. The function `displayMetricUnits`
   1. The function `displayImperialUnits`
   1. The two element references `setC` and `setF`
   1. The line of code that adds the `active` class to `setC`
   1. The `addEventListener()` that adds a `click` to the `setF` element

   All together, the file will look like this:
      ```javascript
      let setC = document.querySelector(`#setC`)
      let setF = document.querySelector(`#setF`)

      let toCelsius = (fahrenheit) => {
         // ...
      }
      let toFahrenheit = (celsius) => {
         // ...
      }
      let setTempToUnit = (ele, toUnit, unit=``) => {
         // ...
      }
      let displayMetricUnits = () => {
         // ...
      }
      let displayImperialUnits = () => {
         // ...
      }

      setC.classList.add(`active`)
      setF.addEventListener(`click`, displayImperialUnits)
      ```

1. At the bottom of the new document `units.js`, write a new function named `setUnitToggle` which will receive one argument, saving it to function's incoming parameter `unit`
   ```javascript
   let setUnitToggle = (unit) => {
     
   }
   ```

1. As the last line of `units.js`, write an `export` statement for `setUnitToggle`
   ```javascript
   export {setUnitToggle}
   ```

1. Back in `script.js`, directly below the two existing `import` statement at the top of the document, `import {setUnitToggle}` from the file `./units.js`
   ```javascript
   import {setUnitToggle} from './units.js'
   ```

1. At the bottom of `appIsLoaded` (in `script.js`), call the function `setUnitToggle`, passing it the `json.unit` object as an argument
   ```javascript
   let appIsLoaded = async () => {
      let response = await fetch(`data/london.json`)
      let json = await response.json()

      setCurrentWeather(json)
      setForecastWeather(json)
      setForecastWeather(json.unit)
   }
   ```

#### B. Assign starting unit

1. In the new function named `setUnitToggle`, write a condition statement that will first check `if (unit === 'metric')`. Otherwise, it will catch the case where `else if (unit === 'imperial')`

   ```javascript
   let setUnitToggle = (unit) => {
      if (unit === `metric`) {
        
      } else if (unit === `imperial`) {
         
      }
   }
   ```

2. Within the `units.js` file, there are two lines of code written in a previous lesson that will `add('active')` to the `C` button, and add a `click` listener to the `F` button. Move both of these lines (cut/paste) into the first condition (where `unit === 'metric'`)
   ```javascript
   if (unit === `metric`) {
      setC.classList.add(`active`)
      setF.addEventListener(`click`, displayImperialUnits)
   } else if (unit === `imperial`) {
         
   }
   ```

3. Complete the code for the `else if` condition block by inverting the procedures:
   1. `add('active')` to the `classList` of the `setF` button
   1. Add a `click` listener to the `setC` button that will call `displayMetricUnits` when it occurs
      ```javascript
      if (unit === `metric`) {
         setC.classList.add(`active`)
         setF.addEventListener(`click`, displayImperialUnits) 
      } else if (unit === `imperial`) {
         setF.classList.add(`active`)
         setC.addEventListener(`click`, displayMetricUnits) 
      }
      ```

#### C. Generalize conversions

1. Within the existing function `displayMetricUnits`, replace the final three lines (that convert units for only `tempEle`, `highEle` and `lowEle`) with a function named `convertToF`, that will be called once `forEach()` element that's found in a query of all `data` elements (`document.querySelectorAll('data')`) and catches a reference to the found element as the parameter `ele`

   ```javascript
   let convertToF = (ele) => {

   }
   document.querySelectorAll(`data`).forEach(convertToF)
   ```

1. Within the function `convertToF`, write a condition statement that will check if the `ele` element passed to the function `matches()` the selector `#currTemp` (it has `id="currTemp"`):
   1. If it does match, call `setTempToUnit` as we did before, passing the third parameter to append the `<abbr>` element to the end, displaying the unit
   2. If it does NOT match, simply call `setTempToUnit` with only the first two parameters: `(ele, toFahrenheit)`
   
      ```javascript
      if (ele.matches(`#currTemp`)) {
         setTempToUnit(ele, toFahrenheit, `<abbr title="Degrees fahrenheit" class="unit">F</abbr>`)
      } else {
         setTempToUnit(ele, toFahrenheit)
      }
      ```

1. Finally, replicate the previous two steps within the function `displayImperialUnits`, creating a new function named `convertToC`, this time checking the exact same parameters, but converting the opposite direction (from fahrenheit, `toCelsius`)
   
   ```javascript
   let convertToC = (ele) => {
      if (ele.matches(`#currTemp`)) {
      setTempToUnit(ele, toCelsius, `<abbr title="Degrees celsius" class="unit">C</abbr>`)
      } else {
      setTempToUnit(ele, toCelsius)
      }
   }
   document.querySelectorAll(`data`).forEach(convertToC)
   ```




## Final code

### HTML (`index.html`)

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

### CSS (`style.css`)

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

### JS (`script.js`, `current.js`, `forecast.js`, `units.js`)

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
```

```js
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
```

```js
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
```

```js
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


# Module D

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
          <li><button class="btn active"><abbr title="Degrees celsius">C</abbr></button></li>
          <li><button class="btn"><abbr title="Degrees fahrenheit">F</abbr></button></li>
        </ul>
      </header>
      <main class="container weather">
        <article class="current">
          <picture>
            <source srcset="img/day-snow-lg.svg" media="(min-width: 50rem)">
            <img src="img/day-snow-sm.svg" alt="Snowy weather in Toronto">
          </picture>
          <h1 class="heading">Current Conditions</h1>
          <p class="desc">Get your shovels ready, Toronto. Today it's going to snow!</p>
          <data value="0" class="temp">0&deg;<abbr title="Degrees celsius" class="unit">C</abbr></data>
          <ul class="no-markers high-low">
            <li class="low">
              <img src="img/temp-low.svg" alt="Daily low">
              <data value="-1">-1&deg;</data>
            </li>
            <li class="high">
              <data value="3">3&deg;</data>
              <img src="img/temp-high.svg" alt="Daily hight">
            </li>
          </ul>
        </article>
        <!-- <img src="img/squiggly-line.svg" alt="A squiggly line"> -->
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


## Steps

### Part 1: Setup script

1. Create a folder named `js` in the project root and add a new file named `script.js` to it

1. Add the `<script src=""></script>` element to the bottom of the `<body>` (directly before the closing `</body>` tag) in `index.html`, assigning the new file’s relative path (`js/script.js`) to the value of the `src` attribute
```html
<script src=""></script>
```

Optionally, you may test to ensure the script is attached by writing `console.log(‘Hello world’)` in the script, saving, then checking your browser’s "Console" tab in the developer tools for the message "Hello world"
   - Remember to remove this before proceeding


### Part 2: Current weather

#### A. Prepare static HTML elements

1. In preparation for dynamic content, make the following modifications to elements within the `.current` article block in `index.html`

    1. Remove the contents and `value` attribute of the `.temp` data, then add an `id`:
      ```html
      <data value="" class="temp" id="currTemp"></data>
      ```
    1. For both the `.low` and `.high` list-items, remove the contents and `value` attribute of the `<data>` elements, then add an `id` to them both:
      ```html
      <li class="low">
         <img src="img/temp-low.svg" alt="Daily low">
         <data value="" id="lowTemp"></data>
      </li>
      <li class="high">
         <data value="" id="highTemp"></data>
         <img src="img/temp-high.svg" alt="Daily high">
      </li>
      ```
    1. Remove the contents of the `.desc` paragraph, then add an `id`:
      ```html
      <p class="desc" id="desc"></p>
      ```

    1. Remove the static `srcset` and `src` values, the `alt` value, and add `id` attributes for the two children of the `<picture>` element:
      ```html
      <picture>
         <source srcset="" media="(min-width: 50rem)" id="iconLg">
         <img src="" alt="" id="iconSm">
      </picture>
      ```

1. In `js/script.js`, write a `document.querySelector()` for each of the modified elements, storing each reference as a variable
   ```javascript
   let tempEle = document.querySelector(`#currTemp`)
   let highEle = document.querySelector(`#highTemp`)
   let lowEle = document.querySelector(`#lowTemp`)
   let descEle = document.querySelector(`#desc`)
   let iconSm = document.querySelector(`#iconSm`)
   let iconLg = document.querySelector(`#iconLg`)
   ```

#### B. Building content dynamically

1. To help build the dynamic user interface, copy and paste the given sample data set at the top of `js/script.js`
   ```js
   let current = {
      time: {
         hour: 14,
         minute: 25,
         light: "day"
      },
      condition: {
         desc: "Get your shovels ready, Toronto. Today it’s going to snow!",
         type: "snow"
      },
      temp: 0,
      high: 3,
      low: -1
   }
   ```

1. Write a function named `setCurrentWeather` that will receive an Object parameter named `data`, then call the new function directly below the definition, passing the `current` object holding the data as the argument:
   ```js
   let setCurrentWeather = (data) => {

   }
   setCurrentWeather(current)
   ```

1. Within the `setCurrentWeather` function, assign the numerical temperatures stored in the Object's `temp`, `high` and `low` properties to the appropriate elements as both content and the `value` attribute
   - Note: The degrees symbol (°) can be shown using the HTML special character short-code `&deg;`. Be sure to assign the element's content to the `.innerHTML` property instead of `.textContent` as it will render HTML as elements and symbols, rather than as plain text
   ```javascript
   // Current temp
   tempEle.innerHTML = `${data.temp}&deg;<abbr title="Degrees celsius" class="unit">C</abbr>`
   tempEle.setAttribute(`value`, data.temp)

   // Daily high
   highEle.innerHTML = `${data.high}&deg;`
   highEle.setAttribute(`value`, data.high)

   // Daily low
   lowEle.innerHTML = `${data.low}&deg;`
   lowEle.setAttribute(`value`, data.low)
   ```

1. Within the `setCurrentWeather` function, assign the `condition.desc` to the appropriate HTML element:
   ```javascript
   descEle.textContent = data.condition.desc
   ```

1. Using the `time.light` and `condition.type` values within the `setCurrentWeather` function, build a string that will point to the images in both `-lg` and `-sm` form. Then, apply the path to the `srcset` and `src` attribute values of the current weather condition images (don't forget to update the `alt` as well with the `condition.desc`!):

```js
// Condition image (large)
iconLg.setAttribute(`srcset`, `img/${data.time.light}-${data.condition.type}-lg.svg`)

// Condition image (small)
iconSm.setAttribute(`src`, `img/${data.time.light}-${data.condition.type}-sm.svg`)
iconSm.setAttribute(`alt`, data.condition.desc)
```


### Part 3: Converting temperature units

#### A. Prepare static HTML elements

1. In preparation for dynamic content, make the following modifications to elements within the `.units` unordered list in `index.html`

   1. Add an `id` attribute with values `setC` and `setF` for both of the respective `<button>` elements nested within the list-items:
      ```html
      <ul class="no-markers units">
         <li><button class="btn active" id="setC"><abbr title="Degrees celsius">C</abbr></button></li>
         <li><button class="btn" id="setF"><abbr title="Degrees fahrenheit">F</abbr></button></li>
      </ul>
      ```

   1. Remove the `active` class value from the "C" button, as it will be set dynamically:
      ```html
      <li><button class="btn" id="setC"><abbr title="Degrees celsius">C</abbr></button></li>
      ```

1. In `js/script.js`, write a `document.querySelector()` for each of the modified elements, storing each reference as a variable:
   ```javascript
   let setC = document.querySelector(`#setC`)
   let setF = document.querySelector(`#setF`)
   ```

#### B. Button events

1. Write a function for each of the conversions from F-to-C and from C-to-F, named `displayMetricUnits` and `displayImperialUnits` respectively:
   ```javascript
   let displayMetricUnits = () => {
   }
   let displayImperialUnits = () => {
   }
   ```

1. Write an `addEventListener` for the two unit buttons (`setC` and `setF`), associating the corresponding functions (`displayMetricUnits` and `displayImperialUnits`) to their respective buttons to handle their `click`
   ```javascript
   setC.addEventListener(`click`, displayMetricUnits)
   setF.addEventListener(`click`, displayImperialUnits)
   ```

1. Within each handler function, `add()` the `active` class to the `classList` of the `<button>` that triggered the event handler, and `remove()` it from the opposite button:
   ```javascript
   let displayMetricUnits = () => {
      setF.classList.remove(`active`)
      setC.classList.add(`active`)
   }
   let displayImperialUnits = () => {
      setC.classList.remove(`active`)
      setF.classList.add(`active`)
   }
   ```

1. Before testing the toggling of the units visually, assign `active` to the `setC` button using JavaScript, on the line immediately before the recently assigned listeners:
   ```javascript
   setC.classList.add(`active`)
   ```

#### C. Unit conversion

1. Write a function named `toCelsius` that will receive a `fahrenheit` Number as an argument, and will `return` the result of `(fahrenheit - 32) * 5/9` - which is the equivalent celsius value
   ```javascript
   // Convert F to C
   let toCelsius = (fahrenheit) => {
      return (fahrenheit - 32) * 5/9
   }
   ```

1. Write a function named `toFahrenheit` that will receive a `celsius` Number as an argument, and will `return` the result of `celsius * 9/5 + 32` - which is the equivalent fahrenheit value
   ```javascript
   // Convert C to F
   let toFahrenheit = (celsius) => {
      return celsius * 9/5 + 32
   }
   ```

#### D. Update the current temperature

1. Write a function named `setTempToUnit`
   ```javascript
   let setTempToUnit = () => {

   }
   ```

1. Update the `setTempToUnit` function definition to accept a parameter named `ele` (a reference to an element to update), then within `setTempToUnit`, store the `value` attribute value of the `ele` to a variable named `currValue`
   ```javascript
   let setTempToUnit = (ele) => {
      let currValue = ele.getAttribute(`value`)
   }
   ```

1. Update the `setTempToUnit` function definition to accept a second parameter named `toUnit` (a reference to one of the previously defined `toCelsius` or `toFahrenheit` functions). Then within `setTempToUnit`, call `toUnit()` as a function, passing it the previously stored `currValue` and saving the result as `newValue`
   ```javascript
   let setTempToUnit = (ele, toUnit) => {
      let currValue = ele.getAttribute(`value`)
      let newValue = toUnit(currValue)
   }
   ```

1. Assign the `newValue` (the newly converted temperature) back to the `ele` element as both its content and `value` attribute. Be sure to use `Math.round()` when assigning the content value, as temperature decimal are not a necessary part of the UI, but should remain part of the `value` attribute
   ```javascript
   let setTempToUnit = (ele, toUnit) => {
      let currValue = ele.getAttribute(`value`)
      let newValue = toUnit(currValue)

      ele.setAttribute(`value`, newValue)
      ele.innerHTML = `${Math.round(newValue)}&deg;`
   }
   ```

1. Update the `setTempToUnit` function definition to accept a third parameter named `unit` (will receive the string `"F"` or `"C"`), then append the value at the end of the content assignment.
   ```javascript
   let setTempToUnit = (ele, toUnit, unit) => {
      let currValue = ele.getAttribute(`value`)
      let newValue = toUnit(currValue)

      ele.setAttribute(`value`, newValue)
      ele.innerHTML = `${Math.round(newValue)}&deg;${unit}`
   }
   ```

1. Finally, update the function definition for `setTempToUnit`, adding `=""` to the incoming parameter `unit`, which will make it an optional argument. This will assign a blank string to `unit` if a third argument is not supplied when calling the function. This is necessary for assigning to temperatures in the UI without a unit (specifically, the high and low):
   ```javascript
   let setTempToUnit = (ele, toUnit, unit=``) => {
      let currValue = ele.getAttribute(`value`)
      let newValue = toUnit(currValue)

      ele.setAttribute(`value`, newValue)
      ele.innerHTML = `${Math.round(newValue)}&deg;${unit}`
   }
   ```
#### E. Execute the conversions

1. At the bottom of the function definition for `displayImperialUnits`, make three calls to `setTempToUnit` for `tempEle`, `highEle` and `lowEle`, each sending `toFahrenheit` as the second argument, and a "F" `<abbr>` for only `tempEle`:

   ```javascript
   setTempToUnit(tempEle, toFahrenheit, `<abbr title="Degrees fahrenheit" class="unit">F</abbr>`)
   setTempToUnit(highEle, toFahrenheit)
   setTempToUnit(lowEle, toFahrenheit)
   ```

1. At the bottom of the function definition for `displayMetricUnits`, make three calls to `setTempToUnit` for `tempEle`, `highEle` and `lowEle`, each sending `toCelsius` as the second argument, and a "C" `<abbr>` for only `tempEle`:

   ```javascript
   setTempToUnit(tempEle, toCelsius, `<abbr title="Degrees celsius" class="unit">C</abbr>`)
   setTempToUnit(highEle, toCelsius)
   setTempToUnit(lowEle, toCelsius)
   ```

#### F. Event management

Given that the interface will begin displaying in metric units (`C`), the only option to click should be to set fahrenheit (and the inverse when `F` units are set). Optimize the interface by using `addEventListener` and `removeEventListener` to only have one unit button listening for a click at any given time.

1. Move the previously written event listener for `setC` into the `displayImperialUnits` function definition, leaving only the listener for `setF` in the global space:
   ```javascript
   let displayMetricUnits = () => {
      setF.classList.remove(`active`)
      setC.classList.add(`active`)
   }
   let displayImperialUnits = () => {
      setC.classList.remove(`active`)
      setF.classList.add(`active`)

      setC.addEventListener(`click`, displayMetricUnits)
   }
   
   setF.addEventListener(`click`, displayImperialUnits)
   ```

1. Directly above the `addEventListener` within the `displayImperialUnits` function definition, use `removeEventListener()` for the `setF` element to make "F" un-clickable immediately before making "C" clickable
   ```javascript
   let displayImperialUnits = () => {
      setC.classList.remove(`active`)
      setF.classList.add(`active`)

      setF.removeEventListener(`click`, displayImperialUnits)
      setC.addEventListener(`click`, displayMetricUnits)
   }
   ```

1. Replicate the above `addEventListener()` and `removeEventListener()` process within the function `displayMetricUnits`
   ```javascript
   let displayMetricUnits = () => {
      setF.classList.remove(`active`)
      setC.classList.add(`active`)

      setC.removeEventListener(`click`, displayMetricUnits)
      setF.addEventListener(`click`, displayImperialUnits)
   }
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

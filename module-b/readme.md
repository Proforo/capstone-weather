# Module B

## Starting code

### HTML (`index.html`)
```html
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title></title>
      <meta name="description" content="">
   </head>
   <body>
   </body>
</html>
```


## Steps

### Part 1: HTML (`index.html`)

Before beginning the project, ensure you download the browser previous add-on for VSCode.

#### A. Document setup
1. To the `<title>` element within the `<head>`, add the content: "Weatherful Weather"
1. To the `<meta name="description">` element within the `<head>`, update its `content=""` attribute to have a value of "A weatherful weather application interface"
1. Add `<header>`, `<main>` and `<footer>` elements to the existing `<body>` in the given template, adding the following classes to each:
   - `<header>`: `class="container"`
   - `<main>`: `class="container"`
   - `<footer>`: `class="footer container"`

#### B. Header
1. Add a clickable image to the `<header>` 
   ```html
   <a href="index.html" class="logo"><img src="img/weather-logo.svg" height="46" width="160" alt="Weatherful Weather logo"></a>
   ```
1. Also within the `<header>`, add the code below. Note the inclusion of abbreviations, which will make your code semantically legible while optimizing the user reading experience.
   ```html
   <ul class="no-markers">
      <li><button class="btn active"><abbr title="Degrees celsius">C</abbr></button></li>
      <li><button class="btn"><abbr title="Degrees fahrenheit">F</abbr></button></li>
   </ul>
   ```

#### C. Main (Current weather & Forecast)
1. Add an `<article>` to the `<main>`, which will hold the current weather. Also add an `<aside>` which will be used to hold the forecast condition
1. Within the `<article>`, add a sample weather condition image:
   ```html
   <img src="img/day-snow-sm.svg" width="320" height="384" alt="Snowy weather in Toronto">
   ```
1. Below the current condition image, add the following heading and description:
   ```html
   <h1 class="heading">Current Conditions</h1>
   <p class="desc">Get your shovels ready, Toronto. Today it's going to snow!</p>
   ```
1. To represent the current temp, as well as the high/low, add the following below the condition description paragraph (still within the `<article>`):
   ```html
   <data value="0" class="temp">0&deg;<abbr title="Degrees celsius" class="unit">C</abbr></data>
   <ul class="no-markers high-low">
      <li>
         <img src="img/temp-low.svg" alt="Daily low">
         <data value="-1" class="low">-1&deg;</data>
      </li>
      <li>
         <data value="3" class="high">3&deg;</data>
         <img src="img/temp-high.svg" alt="Daily high">
      </li>
   </ul>
   ```
1.  Below the `<article>` (but still within the `<main>`) add an image to separate the current condition from the forecast
   ```html
   <img src="img/squiggly-line.svg" alt="A squiggly line">
   ```
1. Within the new `<aside>`, add three buttons structured within an unordered list, which will be used to toggle between condition ranges
   ```html
   <ul class="no-markers">
      <li><button class="btn active">Hourly</button></li>
      <li><button class="btn">Tomorrow</button></li>
      <li><button class="btn">Week</button></li>
   </ul>
   ```
1. Add a forecast `<table class="ranges">` to hold the forecast data
1. The table should have the following row of column headings (wrapped within a `<thead>`):
   ```html
   <thead>
      <tr>
         <th>Time</th>
         <th>Conditions</th>
         <th><abbr title="Probability of precipitation">PoP</abbr></th>
         <th><abbr title="Temperature">Temp</abbr></th>
      </tr>
   </thead>
   ```
1. Add `<tbody class="range">` to the table, which will hold all the forecast weather temperatures
1. Add the following sample rows to the new `<tbody>`:
   ```html
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
   ```

#### D. Footer
1. In the `<footer>` of the document, add the following elements:
   ```html
   <p class="tagline">It's not always wonderful, but it is always Weatherful!</p>
   <p class="madeby">Created with ❤️ by You!</p>
   ```


### Part 2: CSS (`style.css`)

#### A. Styling setup and defaults
1. Create a folder named `css` in the project root and add a new file named `style.css` within it

1. Use the `<link>` element in the `<head>` of `index.html` to attach the new stylesheet from its relative path at `css/style.css`

1. Setup a few variables in a `:root` rule that will store colors to be used for the gradient and accents:
   - `--col-a: rgb(255, 255, 247);`
   - `--col-b: rgb(177, 213, 255);`
   - `--col-c: rgb(184, 187, 205);`
   - `--shade-dark: rgba(0, 0, 0, 0.1);`
   - `--shade-light: rgba(255, 255, 255, 0.1);`

1. At the very top of the new `style.css` document (line 1), import the `Roboto` font in both `400` (normal) and `700` (bold) weights: 
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
   ```

1. Establish some default styling properties with a rule that applies to the `body`, setting the following properties:
   1. `background-color` with a value `rgb(90, 154, 232)`
   1. `font` with the value `normal 400 1rem/1 'Roboto', helvetica, arial, sans-serif`, representing `font-style`, `font-weight`, `font-size` and `line-height`, then a `font-family` set
   2. `color` value that is set with `var(--col-a)`
   3. `text-align` the document to `center`
   4. Remove all existing `margin` by setting it to a value `0`
      ```css
      body {
         background-color: rgb(90, 154, 232);
         font: normal 400 1rem/1 'Roboto', helvetica, arial, sans-serif;
         color: var(--col-a);
         text-align: center;
         margin: 0;
      }
      ```

#### B. Write utility class rules
1. Write a rule to select `no-marker` elements to clear default list styling
   ```css
   .no-markers {
      list-style-type: none;
      padding: 0;
   }
   ```
1. Add a `.btn` rule to transform the default styling of the many `<button>` elements that exist in the document
   ```css
   .btn {
      background-color: transparent;
      font: normal 400 1rem/1 'Roboto', helvetica, arial, sans-serif;
      color: var(--col-a);
      padding: 0.75rem 1rem;
      border: 3px solid transparent;
      border-radius: 0.25rem;
   }
   ```
1. Write a class for `.active` elements that, when combined with `.btn` elements, will change the background colour slightly. This will bring attention to the element being "active"
   ```css
   .btn.active {
      border-color: var(--col-a);
      font-weight: 700;
   }
   ```
1. Ensure the `.logo` has adequate spacing above and below to match the unit buttons:
   ```css
   .logo {
      margin: 1rem 0;
   }
   ```

#### C. Current weather
1. Style the "Current conditions" heading and the description below with the following rules
   ```css
   .heading {
      font-size: 1rem;
      color: var(--col-b);
      text-transform: uppercase;
   }
   .desc {
      font-size: 1.25rem;
   }
   ```
1. Style the current `.temp` as well the `.unit` of measurement (C or F) using the following rules:
   ```css
   .temp {
     font-size: 2.75rem;
     font-weight: 700;
     margin: 1rem 0;
   }
   .unit {
     font-size: 2rem;
   }
   ```
1. Set the styling of the daily `.high-low` temperatures, then overwrite the `.low` temperature to a slightly lighter colour:
   ```css
   .high-low {
     font-size: 2rem;
   }
   .low {
     color: var(--col-b);
   }
   ```

#### D. Forecast 
1. Style the `<table>` with a rule that selects it by its class `.ranges`, setting a few basic properties:
   ```css
   .ranges {
      background-color: var(--shade-dark);
      border-radius: 0.5rem;
      margin: 1rem 0;
   }
   ```
1. Quickly style the `<th>` (table headings) to look like the sample design by selecting `.ranges th` (table headings that descend from a `.range` element):
   ```css
   .ranges th {
     font-weight: 400;
     color: var(--col-b);
     line-height: 2;
   }
   ```
1. Size-up the text within the `.range` table body `<tbody>` using the following rule:
   ```css
   .range {
     font-size: 1.25rem;
   }
   ```
1. Further increase the size of the temperature on each row of the forecast, as well as bolding it, using:
   ```css
   .range-temp {
      font-size: 1.5rem;
      font-weight: 700;
   }
   ```

#### E. Header and footer

1. Setup the `.footer` to have a shaded (translucent) background to sit over the gradient background of the body, as well as some other spacing and font styles:
   ```css
   .footer {
     background-color: var(--shade-dark);
     color: var(--col-c);
     line-height: 1.5;
     padding: 1rem 0 2rem 0;
     margin-top: 2rem;
   }
   ```
1. Remove the margin from the `.tagline` and `.madeby` to prepare them for future styling. This can be done in one single rule:
   ```css
   .tagline, .madeby {
     margin: 0;
   }
   ```
1. The `<header>`, `<main>` and `<footer>` all use the `.container` class to add padding to the elements, add the following class definition to create uniform spacing around those elements:
   ```css
   .container {
      padding: 0 1rem;
   }
   ```

#### F. Background gradient

1. To create a gradient that will reflect the weather condition and add some visual interest to the document, add a `background-image` property to the `body` rule (near the top of `style.css`), setting its value to a `linear-gradient()` that goes from colour `rgb(90, 154, 232)` to `rgb(21, 101, 162)`

```css
body {
  /* previous declarations */
  background-image: linear-gradient(rgb(90, 154, 232), rgb(21, 101, 162));
}
```

1. To ensure the gradient is omnipresent, to the same `body` rule, set the `background-attachment` to a value of `fixed`

```css
body {
  /* previous declarations */
  background-image: linear-gradient(rgb(90, 154, 232), rgb(21, 101, 162));
  background-attachment: fixed;
}
```


## Final Code

### HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Weatherful Weather</title>
    <meta name="description" content="A weatherful weather application interface">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <header class="container">
      <a href="index.html" class="logo"><img src="img/weather-logo.svg" height="46" width="160" alt="Weatherful Weather logo"></a>
      <ul class="no-markers">
        <li><button class="btn active"><abbr title="Degrees celsius">C</abbr></button></li>
        <li><button class="btn"><abbr title="Degrees fahrenheit">F</abbr></button></li>
      </ul>
    </header>
    <main class="container">
      <article>
        <img src="img/day-snow-sm.svg" width="320" height="384" alt="Snowy weather in Toronto">
        <h1 class="heading">Current Conditions</h1>
        <p class="desc">Get your shovels ready, Toronto. Today it's going to snow!</p>
        <data value="0" class="temp">0&deg;<abbr title="Degrees celsius" class="unit">C</abbr></data>
        <ul class="no-markers high-low">
          <li>
            <img src="img/temp-low.svg" alt="Daily low">
            <data value="-1" class="low">-1&deg;</data>
          </li>
          <li>
            <data value="3" class="high">3&deg;</data>
            <img src="img/temp-high.svg" alt="Daily hight">
          </li>
        </ul>
      </article>
      <img src="img/squiggly-line.svg" alt="A squiggly line">
      <aside>
        <ul class="no-markers">
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
    <footer class="footer container">
      <p class="tagline">It's not always wonderful, but it is always Weatherful!</p>
      <p class="madeby">Created with ❤️ by You!</p>
    </footer>
  </body>
</html>
```

### CSS (`css/style.css`)
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

:root {
  --col-a: rgb(255, 255, 247);
  --col-b: rgb(177, 213, 255);
  --col-c: rgb(184, 187, 205);
  --shade-dark: rgba(0, 0, 0, 0.1);
  --shade-light: rgba(255, 255, 255, 0.1);
}

body {
  background-color: rgb(90, 154, 232);
  background-image: linear-gradient(rgb(90, 154, 232), rgb(21, 101, 162));
  background-attachment: fixed;
  font: normal 400 1rem/1 'Roboto', helvetica, arial, sans-serif;
  color: var(--col-a);
  text-align: center;
  margin: 0;
}

/******** UTILITY ********/
.container {
  padding: 0 1rem;
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
.btn.active {
  border-color: var(--col-a);
  font-weight: 700;
}

/******** HEADER ********/
.logo {
  margin: 1rem 0;
}

/******** CURRENT ********/
.heading {
  font-size: 1rem;
  color: var(--col-b);
  text-transform: uppercase;
}
.desc {
  font-size: 1.25rem;
}
.temp {
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
}

/******** FORECAST ********/
.ranges {
  background-color: var(--shade-dark);
  border-radius: 0.5rem;
  margin: 1rem 0;
}
.ranges th {
  font-weight: 400;
  color: var(--col-b);
  line-height: 2;
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
```

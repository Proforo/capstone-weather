Alright, welcome to the first coding video of this series where we'll be building the Weatherful Weather application interface together.

There are a few quick things I want to go over, and then then we'll jump right into the code and get started.


## Setup

1. Intro
2. VS Code layout
   1. Show sample site (360px)
   2. Browser testing (mobile only)
3. Show files within the folder
4. Starting code

## HTML
1. Head stuff
2. Header/Main/Footer
3. FOCUS: Semantics first!
4. Header full
5. Current (article) + SQUIGGLE + Forecast (aside)
6. Current
   1. Outline/heading structure
7. Forecast

## CSS
1. Attach CSS
2. Body bg colour
3. Create comment bones
   1. Utility, header, current, forecast, footer
4. :root colours
5. Body
6. no-markers
7. buttons
8. General top-down styling
9. Container 
10. Gradient


In this lesson....
Prototyped the entire mobile interface and layout, aside from inlining a few components...
- We started with some semantic HTML, building out the entire document to match a sample rendering of the site
- Then I applied the styling, starting from the top and working my way down, and organizing the document into discreet blocks separated by comment labels.



<!-- 

Get your shovels ready, Toronto. Today it's going to snow :snowman:
Don't forget your umbrellas, London. It's going to be brisk and rainy tonight!
Dress lightly tonight, Lagos. It's going to be clear and hot.
It's cloudy today, Kyoto. Don't forget to dress warmly.
Hang onto your hats, San Francisco. No, seriously. It's a windy day. -->


# Final Code

## HTML
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

## CSS
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
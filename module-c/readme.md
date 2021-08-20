# Module C

## Starting code

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

### CSS (`style.css`)

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


## Steps

### Part 1: Layout

#### A. Document header
1. In `index.html`, add value `units` to the `class` attribute for the `<ul>` that is within the `<header>`, then in `style.css`, write a rule to convert the element to a `flex` container:
   ```css
   .units {
      display: flex;
   }
   ```
   
1. Add the class value `header` to the `<header>` element at the top of the `<body>` in `index.html`, then write a rule to convert the element to a `flex` container with its two items weighted to each end of the container:
   ```css
   .header {
      display: flex;
      justify-content: space-between;
   }
   ```

1. Write a rule for the `.logo` element to add space around the element using the `margin` box-model property
   ```css
   .logo {
      margin: 1rem 1rem 1rem 0;
   }
   ```

#### B. Current Weather
1. Update the `.temp` rule to convert the `<data>` element (an `inline` element) to a `block`:
   ```css
   .temp {
      font-size: 2.75rem; /* existing declaration */
      font-weight: 700;   /* existing declaration */
      margin: 1rem 0;     /* existing declaration */
      display: block;
   }
   ```

1. Align the `<li>` within the `.high-low` element by adding a `high` and `low` class value to the items, then write a rule for the `.high` and update the existing `.low` rule to make them both `inline` elements
   ```css
   .high {
      display: inline; 
   }
   .low {
      color: var(--col-b); /* existing declaration */
      display: inline; 
   }
   ```

#### C. Forecast Weather
1. Add a `tabs` class attribute value to the `<ul>` element at the start of the `<aside>` holding the weather forecast, then add this rule to setup the `tabs` element as a flex container with the items holding tab buttons, giving them `space-around`
   ```css
   .tabs {
      display: flex;
      justify-content: space-around;
   }
   ```
1. Stretch the `width` of the `<table>` to use `100%` of the available space, add some `padding` around the inside, and remove spaces between the cells. Do this by updating the `.ranges` rule:
   ```css
   .ranges {
      background-color: var(--shade-dark); /* existing declaration */
      border-radius: 0.5rem;  /* existing declaration */
      margin: 1rem 0;         /* existing declaration */
      width: 100%;
      padding: 1rem;
      border-spacing: 0;
   }
   ```


### Part 2: Responsive

#### A. Layout

1. Set an upper limit to the size of the `.container` elements, and ensure the content is centered horizontally using `margin`:
   ```css
   .container {
      padding: 0 1rem;  /* existing declaration */
      width: 100%;
      max-width: 70rem;
      margin: 0 auto;
   }
   ```
1. Ensure the `padding` values are kept within the `width` of the containers (and all future elements) within a `*` (all elements) rule written at the top of the document:
   ```css
   * {
      box-sizing: border-box;
   }
   ```

#### B. Media query

1. Create a breakpoint at `min-width: 50rem` by adding a `@media` query
   ```css
   @media screen and (min-width: 50rem) {

   }
   ```
1. Add the `<meta>` tag for `name="viewport"` to the top of `index.html` within the `<head>`:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
1. Assign classes to the `<main>` element and its two children so they can be selected for styling:
   - `<main>`: `class="container weather"`
   - `<article>`: `class="current"`
   - `<aside>`: `class="forecast"`
1. Within the `@media` query, write a rule to select the `.weather` element, setting it to a `flex` container:
   ```css
   .weather {
		display: flex;
   }
   ```
1. Within the `@media` query, write a rule to select the `.current` element, setting it to take the most width possible using `flex-grow: 1`, as well as margin on the right side:
   ```css
   .current {
		flex-grow: 1;
		margin-right: 2rem;
   }
   ```
1.  Within the `@media` query, write a rule to select the `.ranges` element, setting it to have a `min-width`
   ```css
   .ranges {
      min-width: 25rem;
   }
   ```

#### C. Responsive image

---
**Note**: This exercises makes use of the `<picture>` element for responsive images, rather than simply updating the `srcset` of an `<img>`, as was demonstrated in the lesson videos. While the techniques have similarities and can often accomplish the same goal, it's more appropriate to use the `<picture>` element for this specific use case, as we are not just changing images to optimize download size for smaller screen sizes. Rather, we are actually loading a completely different graphic with a different aspect ratio (the ratio of width:height).

The `<picture>` element gives greater control for changing the image from one source to another at a specific breakpoint, forcing the `<source>` image to be activated at the breakpoint set by its `media` attribute. Simply providing additional source values to the `<img>` through the `srcset` method alone (as was shown in the lessons) allows the *browser* to make the decision about which image to use. In that case, it balances the files' download size with the quality required to fit the layout, based on what's been downloaded by the browser already. In this case, that is not sufficient to ensure the wrong image will not break the layout, as they have very different aspect ratios.

For more information on the topic, [please read MDN's documentation on the `<picture>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture).
---


1. Within `index.html`, remove the `height` and `width` properties from the current weather `<img>` (with the `src="img/day-snow-sm.svg"`), and then wrap in a set of `<picture></picture>` tags. Once complete, add a `<source>` element within it that will be displayed when the viewport is at `min-width: 50rem`, like this:
   ```html
   <picture>
      <source srcset="img/day-snow-lg.svg" media="(min-width: 50rem)">
      <img src="img/day-snow-sm.svg" alt="Snowy weather in Toronto">
   </picture>
   ```

1. Outside of the `@media` query, write a rule for the `.current` element that's wrapping around the weather condition image, to control its width and center it when slimmer than its parent:
   ```css
   .current {
      max-width: 20rem;
      margin: 0 auto;
   }
   ```

1. Within the `@media` query, update the existing rule that selects `.current` by reverting the `max-width` back to `auto`:
   ```css
   .current {
      flex-grow: 1;      /* existing declaration */
		margin-right: 2rem;  /* existing declaration */
      max-width: none;
   }
   ```
1. Have the color of each table row highlight when hovered over, by setting a rule for `range tr:hover`:
   ```css
   .range tr:hover {
      background-color: var(--shade-dark);
   }
   ```
#### D. Buttons

1. Write a rule that applies to `.btn` elements when they are in **both** the `:hover` and `:focus` pseudo state to update their `background-color`:
   ```css
   .btn:hover, .btn:focus {
      background-color: var(--shade-white);
   }
   ```

1. Write another rule that only selects the `.btn` in the `:focus` pseudo state, adding a border to accentuate the elements:
   ```css
   .btn:focus {
      border: 3px solid var(--col-b);
      outline: none;
   }
   ```

#### D. Footer

1. Re organize the `<footer>` element in `index.html` so that the contents of the footer (two paragraphs) are wrapped in a `<div>` with a class attribute value of `footer-group`. Then move the `container` class to the new `<div>` from the `<footer>`, to create a footer-bar that uses the entire width of the viewport, but whose content is restricted by the `.container` definition to the center of the layout:
   ```html
   <footer class="footer">
      <div class="container footer-group">
         <p class="tagline">It's not always wonderful, but it is always Weatherful!</p>
         <p class="madeby">Created with ❤️ by You!</p>
      </div>
   </footer>
   ```

1. Also within the `@media` query, write the rules to set the two `<p>` elements within the `.footer-group` on the outer edges:
   ```css
	.footer-group {
		display: flex;
		justify-content: space-between;
	}
   ```
   
1. Within the `@media` query, write a rule for the `.footer` to adjust its `padding` and `line-height`:
   ```css
   .footer {
		padding: 1rem 0;
		line-height: 1;
	}
   ```

**Note**: Getting the `<footer>` to stick to the bottom of the viewport when the page is shorter than the full viewport can be accomplished a few ways, but one is to use a slight variation of the `flex` lessons where the flex container is turned sideways using `flex-direction: column` (the default is `flex-direction: row`). You can read more about [the `flex-direction` property here on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction).

1. Both the `html` and `body` elements need to take the full height of the viewport:
   ```css
   html {
      height: 100%;
   }
   body {
      background-color: rgb(90, 154, 232);
      background-image: linear-gradient(rgb(90, 154, 232), rgb(21, 101, 162));
      background-attachment: fixed;
      font: normal 400 1rem/1 'Roboto', helvetica, arial, sans-serif;
      color: var(--col-a);
      text-align: center;
      margin: 0;
      /* all declarations above are previously existing */

      height: 100%;
   }
   ```

1. In `index.html` wrap the entire content within the `<body>` in a `<div>`, with a class of `layout` (this element will be the vertical `flex` container):
   ```html
   <body>
      <div class="layout">
         <!-- The entire site's content -->
      </div>
   </body>
   ```

1. Write a rule for the `.layout` to make it a vertical flex container (`column` direction) that uses *at least* the full viewport height:
   ```css
   .layout {
      display: flex;
      flex-direction: column;
      min-height: 100%;
   }
   ```

1. Write a rule for the `.weather` element to have it grow if there is available space at the end of the container:
   ```css
   .weather {
      flex-grow: 1;
   }
   ```


### Part 3: Wrap-up styling

#### A. Pinstripe pattern

1. Update the `background-image` for the `body` to also include a `repeating-linear-gradient()` before the existing `linear-gradient()` to add a pinstripe to the background:
   ```css
   body {
      background-color: rgb(90, 154, 232);
      background-image: /* only this property is updated */
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
      margin: 0;
      height: 100%;
   }
   ```

#### B. Dividing line

1. Remove the "squiggly line" `<img>` dividing the current and forecast weather from `index.html`
   ```html
   <!-- <img src="img/squiggly-line.svg" alt="A squiggly line">  -->
   ```

1. Rather than an HTML element, a pseudo element can do the job, since this line is purely ornamental. Write an `::after` rule for the `.current` element that will display a `1rem` tall `block` element with a `background-image` that points to the `../img/squiggly-line.svg` image file:
   ```css
   .current::after {
      content: "";
      display: block;
      background-image: url('../img/squiggly-line.svg');
      background-position: center center;
      background-repeat: no-repeat;
      height: 1rem;
      margin: 2rem 0;
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





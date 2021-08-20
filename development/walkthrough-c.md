1. Show the browser first, review with dev tools on
2. Browser preview will be less useful


```css

/* FLEX STUFF */

/* ---- header */
.units {
	display: flex;
}
.header { /* put above!! */
	display: flex;
	justify-content: space-between;
}
.logo {
   margin: 1rem 1rem 1rem 0; /* margin-right */
   display: block; /* unnecessary, but mention it */
}


/* ---- current */
.high-low li {
	display: inline;  /* could also use a flex */
}
.temp {
	display: block;
}

/* ---- forecast */
.tabs {
	display: flex;
	justify-content: space-around;
}
.ranges {
   width: 100%;
}



/* RESTRICT CONTAINER WIDTH */
.container {
   width: 100%;
   max-width: 70rem;
	margin: 0 auto;
	/* padding: 0 1rem; */
}
* {
	box-sizing: border-box;
}


/* RESPONSIVE */
@media screen and (min-width: 50rem) {
   /* IN ORDER... */
   .weather {
		display: flex;
   }
   .current {
		max-width: none; /* do the <picture> first! */
		flex-grow: 1;
		margin-right: 2rem;
   }
   .ranges {
		min-width: 25rem;
	}
}



/* THE PICTURE (<picture>) ELEMENT */
.current {
	max-width: 20rem;
	margin: 0 auto;
}



/* BUTTON STATES */
.btn:hover, .btn:focus {
	background-color: var(--shade-white);
}
.btn:focus {
	border: 3px solid var(--col-b);
	outline: none;
}
.btn.active {
	background-color: transparent;
	/* border-color: var(--col-a);
	font-weight: 700; */
}



/* FULL HEIGHT FOOTER (use zoom-out) */
html {
   height: 100%;
}
body {
   height: 100%;
}
.layout {
	display: flex;
	flex-direction: column;
	min-height: 100%;
}
.weather {
	flex-grow: 1;
}

@media screen and (min-width: 50rem) {
/*************** FOOTER ***************/
	.footer {
		padding: 1rem 0; /* cleans bottom 2rem */
		line-height: 1;
	}
	.footer-group {
		display: flex;
		justify-content: space-between;
	}
} 



/* TOUCHUPS */


/* FORECAST TABLE */
.ranges {
   /* background-color: var(--shade-dark); */
   width: 100%;
   padding: 1rem;
   /* border-radius: 0.5rem; */
   /* margin: 1rem 0; */
   border-spacing: 0;
      /* In lessons we used `border-collapse: collapse;`, but makes it lose padding here! */
}

.range tr:hover {
	background-color: var(--shade-dark);
}

/* 
html {
	background-color: rgb(90, 154, 232);
} */

```


## Fixed script

"Let's go back to the editor and get that container-width fix into our css".


```css
.container {
   width: 100%;
   max-width: 70rem;
}
```

We pretty much have everything done at this point, just two minor finishing detailed, both of which are somewhat new to you, just given we covered related topics, but didn't cover these *exact* techniques in these *exact* ways in our lessons to date. Neither will be critical aspects of our design, but both are fun ways to improve on our styling details. 

First, I'll add a subtle background stripe pattern, which I'll using a gradient to solve.

Then to close off, I'll use a CSS pseudo selector to replace our missing squiggly line.


```css
body {
   background-image:
		repeating-linear-gradient(
			45deg,
			rgba(255,255,255,0.03),
			rgba(255,255,255,0.03) 1px,
			transparent 2px,
			transparent 4px
		),
      linear-gradient(rgb(90, 154, 232), rgb(21, 101, 162));
}

/* 

1. white 0-10px, red 10px-20px
2. red 10px-40px
3. transparent
4. rotate
5. alpha 0.03
6. 0, 1px, 1px, 4px

*/


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

One final test...

That is it, we are done the design prototype. In this lesson, we worked through completing the layout of this project with a specific focus on the responsive aspects. That will ensure we can server this site in any viewport size on almost almost any device.

The next time we'll be together to work on this project together, we'll be talking about making it interactive with some Javascript!

So keep learning and practicing, and I'll look forward to working with you then!



# Final Code

## HTML

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



## CSS

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


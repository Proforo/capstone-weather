# Weather (design only)

## Presentation

- "Now we will", think of it like a slide with points
- Get clean screenshots of the design ahead of time - put in the folder?
- Guiding with comments in place already?
- Will quick page transitions be an issue?
- ° or &deg;


## Older notes

Reminders or questions for me
- datetime format: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#Valid_datetime_Values
- Would it be easier to convert the units by just changing a class (::after)?
- Image names should be brought in from the JSON on the forecast, not determined dynamically based on time
- Does attr around C and F create clickable issues?
- Before and after? Was covered (for the thermometer icons)
- Does converting the C/F create a lot of work to reload the table?
*/

/* "Questioms"
- Regarding current-weather "day" vs "night" icons
	- Should the icon be determined by the true time (requires code that wasn't previously discuses, though not challenging), or simply provide a fake `currentTime` in the JSON file (typical of weather data)?
- "Helvetica Neue" is used in he Zeplin, but is a paid Linotype font.
	- Do the designers have a preferred Google Font to use in place?
- Zeplin does not show a forecast view other than "Hourly", but also has tabs for "Tomorrow" and "Week"
	- Can I assume 12 hours is enough for hourly (or is less better here?)
	- "Tomorrow" might have "Morning", "Afternoon", "Evening", "Night", but that's only 4, so when flipping from one tab to another, the table size (and page length) will contract in height. "Week" also would only have 6 at most. Any preference from the designers for how to deal with that?
	- Table have both "CoP" (Chance) and "PoP" (Percent) on different versions, any preference?


----- NEW
	- Should we crop height of big images?
	- This assumes "metric" by default, need to work that out.




## Questions

- "Weather Logo" (replacing the "search", looked naked without it)
- Hold the header (logo and units) to the same max width as the rest of the content in large screens?
- Graphic have two versions for the main part `lg` vs `sm`. Problem is that the browser won't swap SVGs with srcset based on the size, but SVGs are already efficient. Any other means would be new material (and also not "clean" or simple). Do we *need* two different images?
- Check all viewport widths and comment if problematic
      - Too little margin (buffer space from content to viewport edge) left/right between widths 640px and 1120px specifically? What about mobile (< 640px)
- FYI: Need the white squiggle graphic (will ask Nat), put in a black one as a placeholder
- There was no definition for `:hover` states, I put a few in (buttons/tabs, rows in the table), but if you have any direction, please provide
- Abbreviations on "PoP", "Temp" and "C"/"F" - useful or needless? (Or indifferent)
- `Roboto, helvetica, arial, sans-serif` being used here, please confirm Roboto as primary over `HelveticaNeue`
- We need an informal API document to provide/show, or a JSON of this many values just might seem confusing
- Does the current "time" have to be the real time (user computer)? Or fine to put that in the JSON (as is currently being done)?
- Should I make additional docs for multiple "cities" (data files)? If so, any specific way you want them switched? (Or just users can try it manually? Think about what that looks/feels like - does it feel cheap?)
      - If not, how are we showing day/night and different conditions? Or who cares?
      - Should I just position this again as "an example of what a REAL dataset might look?"
- Fine to define "day" as 8am-8pm? Keep in mind daylight savings, and people in cities with more/less day/night
- Is "Current conditions" supposed to be replaced with the condition description, ie "Clear skies in Toronto, ON"?
- Having a high/low for days of the week makes the code more complex, can we leave that out and just have a single temp?
- Is the column width change on the "Tomorrow" tab distracting? Or fine?
- The tabs on the "forecast" are not spread to the ends (ie, `space-evenly` on the mobile view, rather than `space-between`), as per the design. Should they be spread full width?


## Gradients

There are 4 separate background gradients to use. Below is the logic for when to choose what gradient to use.

1. daytime clear conditions includes:
   - clear
   - windy
   - partlycloudy

   use background gradient called "background_gradient":
   - `rgb(90, 154, 232)`
   - `rgb(21, 101, 162)`


2. daytime precipitation conditions include:
	- cloudy
	- rainy
	- sleety
	- snowy
	- foggy

   use background gradient called "background_gradient_precip"
   - `rgb(51, 82, 120)`
   - `rgb(53, 84, 131)`


3. nighttime clear conditions includes:
	- clear
	- windy
	- partlycloudy

   use background gradient called "background_gradient_night"
   - `rgb(63, 113, 205)`
   - `rgb(28, 19, 40)`


4. nighttime precipitation conditions include:
	- cloudy
	- rainy
	- sleety
	- snowy
	- foggy

   use background gradient called "background_gradient_precip_night"
   - `rgb(45, 58, 74)`
   - `rgb(29, 38, 51)`




# NgChoice

Case Study
Jamie's vacation is about to end. She works at an international company, so she can choose another office to work from: either Amsterdam, Madrid, or Budapest. Help her choose which office to go to – she’d like someplace with good weather or cheap flights (or both).

Assumptions:
1. 3 locations of current vacation for Jamie have been added statically for now. Can use locations API later
2. Months is calculated as 3 months from current date to fetch flights. Can be enhanced with a datepicker later
3. OpenWeather API (https://openweathermap.org/api) is used to fetch current weather condition of the target destinations as Accuweather API key keep on expiring. Also, Accuweather doenst have free API access on https
4. Kiwi has been used to fetch flight offer details. 3 fields have been selectively picked to show to Jamie

Development:
3 Cards each showing the work location offerred to Jamie

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

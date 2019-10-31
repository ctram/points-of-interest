# Nearby Venues

This application lets the user search for nearby venues/business based upon a location (e.g. New York, San Jose) and search term (e.g. Diners, Bars, Shopping Mall)

The application utilizes the Four Square API to receive results based on the user's input.

## Technologies

- React for views
- Redux for state management.
- Bootstrap for styling.
- Jest for testing.
- Parcel for bundling JavaScript.
- Express for server.

## Installation

- Export Four Square API credentials into your environment. The following is just an example. Refer to the file 'FOUR_SQUARE_CREDENTIALS.txt' within this project to obtain the actual Four Square's API credentials.

  `export FOUR_SQUARE_CREDENTIALS="client_id=5CU42VV&client_secret=KD89asd"`

* Clone this repo

  `git clone git@github.com:ctram/points-of-interest.git`.

* Change into repo directory

  `cd points-of-interest/`

* Install dependencies,

  `npm install`

* Bundle JavaScript

  `npm run build`.

* Start server

  `npm start`.

* Open browser and navigate to `localhost:3000`

# Pogoda

Simple weather lookup app built with Express, Pug, Bootstrap, and the OpenWeather API.

## Tech Stack

- JavaScript
- Express
- Pug
- Bootstrap
- OpenWeather API

## Prerequisites

- Node.js (recommended: modern LTS version)
- npm
- Internet access (the app requests weather data from OpenWeather)

## Installation

```bash
npm install
```

## Run the Project

```bash
npm start
```

The server starts on port `3000` by default.

- Local URL: `http://localhost:3000`
- Custom port (optional): set `PORT` before starting the app

Example:

```bash
PORT=3001 npm start
```

## How to Use

1. Open the app in your browser.
2. Enter a city name in the input field.
3. Click `Search` (or press `Enter`).
4. The app will display the current weather data for the city.

## Available Scripts

- `npm start` - starts the Express server (`node ./bin/www`)

## Troubleshooting

## `npm start` fails with missing modules

Run:

```bash
npm install
```

## Port `3000` is already in use

Start the app on another port:

```bash
PORT=3001 npm start
```

## City not found / weather is not displayed

- Check the city name spelling.
- Check your internet connection.
- The current OpenWeather API key may be invalid, expired, or rate-limited.

## Known Limitations

- The OpenWeather API key is currently hardcoded in frontend code (not secure for production).
- The weather API request is made from the browser instead of the backend.
- Error handling and validation are minimal (educational project state).


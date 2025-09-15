# Movie Search App (OMDb)

React app to search movies via the OMDb API. Enter a title to fetch matching movies with posters and basic info. Includes loading and error states and a responsive grid layout.

## Features

- Search movies by title using OMDb
- Loading and error handling
- Responsive card grid
- Axios for HTTP requests
- Tailwind CSS styling

## Tech Stack

- React (Create React App)
- Axios
- Tailwind CSS
- OMDb API

## Scripts

- `npm start`: start dev server at `http://localhost:3000`
- `npm run build`: production build to `build/`
- `npm test`: run tests in watch mode
- `npm run eject`: expose CRA config (one-way)

## Dependencies

- App: `react`, `react-dom`, `react-router-dom`, `axios`
- Build: `react-scripts`
- Styling: `tailwindcss`, `postcss`, `autoprefixer`
- Testing: `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/dom`, `@testing-library/user-event`, `web-vitals`

## Prerequisites

- Node.js 16+ and npm
- An OMDb API key (free): request at `https://www.omdbapi.com/apikey.aspx`

## Setup

1. Clone the repo and install dependencies:

   ```bash
   git clone <repo-url>
   cd movie-search
   npm install
   ```

2. Configure your OMDb API key.

   Quick option (edit code):

   - Open `src/pages/Home.js`
   - Replace the value of `API_KEY` with your key

   Optional .env approach (requires a tiny code change):

   - Create a `.env` file at the project root with:

     ```env
     REACT_APP_OMDB_API_KEY=your_key_here
     ```

   - Update `API_KEY` usage in code to read `process.env.REACT_APP_OMDB_API_KEY`
   - Ensure `.env` is git-ignored (common default)

## Run the app

```bash
npm start
```

Open `http://localhost:3000`.

## Build for production

```bash
npm run build
```

Outputs to the `build` folder.

## Usage

- Type a movie title into the search bar and submit.
- Results show as cards. Errors (e.g., no results) display under the search bar.

## Routing

- Uses `react-router-dom` for navigation.
- Typical routes: `/` → `Home`, `/movie/:imdbID` → `MovieDetails`.

## Project Structure (excerpt)

```
src/
  App.js           // root component & routing
  index.js         // React entry
  index.css        // global styles (Tailwind utilities used)
  components/
    SearchBar.js   // input + submit
    MovieCard.js   // result card
  pages/
    Home.js        // search logic and results grid
    MovieDetails.js// detailed view (if routed)
```

## Notes

- The code includes Tailwind utility classes; ensure Tailwind is configured if you move this into a different starter.
- OMDb rate-limits free keys; if you hit limits, try again later or upgrade your key.

## Troubleshooting

- Missing API key: add `REACT_APP_OMDB_API_KEY` to `.env` and restart `npm start`.
- Network errors or throttling: OMDb free tier can rate-limit; try again later.
- Tailwind classes not applied: verify Tailwind/PostCSS setup aligns with CRA.
"# Movie-Search-App" 

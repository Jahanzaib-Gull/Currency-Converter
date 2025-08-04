# Currency Converter
A modern, responsive currency converter web application built with React and Vite. This app fetches the latest exchange rates from a public API to provide real-time currency conversion.

Live Demo:
    https://jahanzaib-gull.github.io/Currency-Converter/

## Features
* Real-time Conversion: Fetches and displays up-to-date currency exchange rates.

* Responsive Design: A clean, mobile-friendly user interface built with Tailwind CSS.

* Interactive: Easily select "from" and "to" currencies and input the amount for instant conversion.

* Light/Dark Mode: Automatically adapts to the user's system theme for a comfortable viewing experience.

## Technologies Used
* React: A JavaScript library for building user interfaces.

* Vite: A fast build tool that provides a leaner and quicker development experience.

* Tailwind CSS: A utility-first CSS framework for rapid styling.

* CurrencyFreaks API: A third-party service for fetching currency exchange rates.

## Setup and Installation
Follow these steps to get a local copy of the project up and running on your machine.

### Prerequisites
* Node.js (version 14 or higher)

* npm or yarn

### Installation
Clone the repository:
```
git clone https://github.com/Jahanzaib-Gull/Currency-Converter/
cd your-repo-name
```

### Install dependencies:
```
npm install
# or
# yarn install
```

### Run the development server:
```
npm run dev
# or
# yarn dev
```

The application will be available at http://localhost:5173.

## Deployment to GitHub Pages
This project is configured to be deployed to GitHub Pages using the gh-pages package.

1. Ensure you have the gh-pages package installed:
```
npm install gh-pages --save-dev
```

2. Verify your package.json and vite.config.js are configured correctly:

* package.json should have homepage, predeploy, and deploy scripts.

* vite.config.js should have the base property set to your repository name.

3. Deploy the application:
```
npm run deploy
```

4. Finalize settings on GitHub:
Go to your repository's Settings > Pages and set the source branch to gh-pages.

Contributing
Contributions are welcome! If you have suggestions or find a bug, please feel free to open an issue or create a pull request.

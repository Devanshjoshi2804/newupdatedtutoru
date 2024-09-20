import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from "react-ga4";
import App from './App';

// Initialize Google Analytics
ReactGA.initialize("G-HELZ0K4C1C");

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Send pageview with a custom path
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

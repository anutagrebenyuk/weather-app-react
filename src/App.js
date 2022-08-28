import React from "react";
import "./App.css";
import Search from "./Search";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container card">
        <div className="card-body">
          <Search />
        </div>

        <Weather />

        <br />
        <div className="forecast-container" id="forecast"></div>
        <footer>
          This is an{" "}
          <a
            href="https://github.com/anutagrebenyuk/Final-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-source
          </a>{" "}
          code by Hanna Hrebeniuk
        </footer>
      </div>
    </div>
  );
}

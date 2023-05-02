import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather React</h1>
        <Weather />
        <small>
          <a
            rel="noreferrer"
            href="https://github.com/olayemiajayi/weather-react-app"
            target="_blank"
          >
            {" "}
            Open-Source code
          </a>{" "}
          By Yetunde Ajayi
        </small>
      </header>
    </div>
  );
}

export default App;

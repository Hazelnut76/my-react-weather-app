import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">


      </div>
  
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by Emmah Nyashanu and is{" "}
        <a
          href="https://github.com/Hazelnut76/my-react-weather-app"
          target="-blank"
        >
          open-source on GitHub
        </a>
      </footer>
    </div>
  );
}

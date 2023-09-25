import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
 
  const codeMapping = {
    "01d": "CLEAR",
    "01n": "CLEAR",
    "02d": "PARTLY_CLOUDS",
    "02n": "PARTLY_CLOUDS",
    "03d": "PARTLY_CLOUDS",
    "03n": "PARTLY_CLOUDS",
    "04d": "CLOUDS",
    "04n": "CLOUDS",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#eb6e4b"
      size={52}
      animate={true}
    />
  );
}

import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
    console.log(props.code);
const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDS_DAY",
    "02n": "PARTLY_CLOUDS_NIGHT",
    "03d": "PARTLY_CLOUDS_DAY",
    "03n": "PARTLY_CLOUDS_DAY",
    "04d": "CLOUDS_DAY",
    "04n": "CLOUDS_DAY",
    "09d": "RAIN_DAY",
    "09n": "RAIN_NIGHT",
    "10d": "RAIN_DAY",
    "10n": "RAIN_NIGHT",
    "11d": "RAIN_DAY",
    "11n": "RAIN_NIGHT",
    "13d": "SNOW_DAY",
    "13n": "SNOW_NIGHT",
    "50d": "FOG_DAY",
    "50n": "FOG_NIGHT",
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
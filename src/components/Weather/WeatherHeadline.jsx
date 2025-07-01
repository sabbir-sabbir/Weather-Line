import React, { useContext } from "react";
import { getFormattedDate } from "../../utils/date-util";
import cloud from "../../assets/cloudicon.svg";
import haze from "../../assets/hazeicon.svg";
import snow from "../../assets/snowicon.svg";
import sunny from "../../assets/sunnyicon.svg";
import rain from "../../assets/rainicon.svg";
import thunder from "../../assets/thundericon.svg";
import mist from "../../assets/misticon.svg"
import pin from "../../assets/pinicon.svg";

import { WeatherContext } from "../../context";

const WeatherHeadline = () => {
  const { weatherData } = useContext(WeatherContext);
  const { climate, location, temperature, time } = weatherData;

  const getWeatherIcon = (climate) => {
    switch (climate) {
      case "Rain":
        return rain;
      case "Clouds":
        return cloud;
      case "Clear":
        return sunny;
      case "Snow":
        return snow;
      case "Thunder":
        return thunder;
      case "Fog":
        return haze;
      case "Haze":
        return haze;
      case "Mist":
        return mist;
      default:
        return sunny   

    }
  };
  return (
    <>
      <div className=" w-1/2  flex flex-col justify-start gap-2">
      <div className="flex items-center gap-3"><img className="w-7 h-7" src={getWeatherIcon(climate)} alt="Weather icon" />
      <span>{climate}</span>
      </div>
        
        <h3>{Math.round(temperature)}°</h3>
        <p className="flex items-center gap-3">
          {" "}
          <span>
            <img className="w-8 h-8" src={pin} alt="location" />
          </span>{" "}
          {location}
        </p>
        <div>
          <p>
            {getFormattedDate(time, "time", false)} -{" "}
            {getFormattedDate(time, "date", false)}
          </p>
        </div>
      </div>
    </>
  );
};

export default WeatherHeadline;

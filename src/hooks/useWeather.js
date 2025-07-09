import { useState, useEffect, useContext } from "react";
import { LocationContext } from "../context";

const useWeather = () => {
const {selectedLocation} = useContext(LocationContext);
console.log(selectedLocation);



  // weather data storing state
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudpercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  // loading state
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  // err state
  const [error, setError] = useState(null);
  
  // data fetching function
  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching weather data...............!!!",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const updatedWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudpercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        latitude: latitude,
       longitude: longitude,
      };

      setWeatherData(updatedWeatherData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };
  
  useEffect(() => {
  setLoading({
    state: true,
    message: "Finding Location"
  });

  if (selectedLocation?.latitude && selectedLocation?.longitude) {
    fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude);
  } else {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.error("Geolocation error:", error);
        setError(error);
        setLoading({
          state: false,
          message: "Failed to get location",
        });
      }
    );
  }
}, [selectedLocation.latitude, selectedLocation.longitude]);

  return {
    weatherData,
    error,
    loading,
  }

};

export default useWeather;
import {createContext} from "react"

const WeatherContext = createContext("");
const FavouriteContext = createContext("");
const LocationContext = createContext({
  selectedLocation: {
    location: "",
    latitude: 0,
    longitude: 0,
  },
  setSelectedLocation: () => {},
});
export {WeatherContext, FavouriteContext, LocationContext}
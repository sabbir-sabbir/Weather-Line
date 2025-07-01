import { WeatherContext } from "../context";
import {useWeather} from "../hooks";

// provider component
const WeatherProviderComponent = ({children})=> {
    const {weatherData, error, loading} = useWeather();
    return (
        <WeatherContext.Provider value={{weatherData, error, loading}}>
         {children}
        </WeatherContext.Provider>
    )

}
export default WeatherProviderComponent;
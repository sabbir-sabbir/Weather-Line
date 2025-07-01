import React, {useContext} from 'react'
import { WeatherContext } from "../../context";
import maxtemp from "../../assets/maxtemp.svg"
import mintemp from "../../assets/mintemp.svg"
import humidityIcon from "../../assets/humidity.svg"
import cloudper from "../../assets/cloudper.svg"
import windIcon from "../../assets/wind.svg"
import climateIcon from "../../assets/climate.svg"

const WeatherCondition = () => {
    const {weatherData} = useContext(WeatherContext);
    const {maxTemperature, minTemperature, humidity, cloudpercentage, wind, climate} = weatherData;
  return (
   <>
   <div className="w-1/2 flex flex-col gap-3">
    <div className="mt-5"><h3>Today's Climate Is {climate}</h3></div>
    <div>
        <ul className="space-y-8">
            <li className=" w-full flex justify-between ">
                <span>Temp max</span>
                <div className="flex items-center gap-2">
                 <span>{Math.round(maxTemperature)}°</span>
                 <img className="w-3 h-3" src={maxtemp} alt="temperature icon" />
                </div>
            </li>
            <li className=" w-full flex justify-between ">
                <span>Temp min</span>
                <div className="flex items-center gap-2">
                 <span>{Math.round(minTemperature)}°</span>
                 <img className="w-3 h-3" src={mintemp} alt="temperature icon" />
                </div>
            </li>
            <li className=" w-full flex justify-between ">
                <span>Humidity</span>
                <div className="flex items-center gap-2">
                 <span>{Math.round(humidity)}°</span>
                 <img className="w-3 h-3" src={humidityIcon} alt="temperature icon" />
                </div>
            </li>
            <li className=" w-full flex justify-between ">
                <span>Cloud Percentage</span>
                <div className="flex items-center gap-2">
                 <span>{cloudpercentage} %</span>
                 <img className="w-3 h-3" src={cloudper} alt="temperature icon" />
                </div>
            </li>
            <li className=" w-full flex justify-between ">
                <span>Wind</span>
                <div className="flex items-center gap-2">
                 <span>{wind} km/h</span>
                 <img className="w-3 h-3" src={windIcon} alt="temperature icon" />
                </div>
            </li>
            <li className=" w-full flex justify-between ">
                <span>Climate</span>
                <div className="flex items-center gap-2">
                 <span>{climate}</span>
                 <img className="w-3 h-3" src={climateIcon} alt="temperature icon" />
                </div>
            </li>
        </ul>
    </div>

   </div>
   </>
  )
}

export default WeatherCondition
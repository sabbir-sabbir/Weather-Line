import React from 'react'
import demo from "../../assets/demo.svg"
const WeatherHeadline = () => {
  return (
    <>
    <div className=" w-1/2  flex flex-col justify-start gap-2">
     <img className="w-7 h-7" src={demo} alt="Weather icon" />
     <h3>
        {Math.round(23)}°
     </h3>
     <p> <span><img src="" alt="" /></span> Dhaka</p>
     <div>
        {/* {getFormattedDate(12, "time", false)} -{" "}
         {getFormattedDate(12, "date", false)} */}
     </div>
    </div>
    </>
  )
}

export default WeatherHeadline
import React from 'react'

const WeatherCondition = () => {
  return (
   <>
   <div className=" w-1/2 flex flex-col gap-3">
    <div><h3>Main title</h3></div>
    <div>
        <ul>
            <li className=" w-full flex justify-between ">
                <span>Temp Max</span>
                <span>45%</span>
            </li>
        </ul>
    </div>

   </div>
   </>
  )
}

export default WeatherCondition
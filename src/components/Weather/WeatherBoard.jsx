import React from 'react'
import Addtofavorite from './Addtofavorite'
import WeatherHeadline from './WeatherHeadline'
import WeatherCondition from './WeatherCondition'

import { useWeather } from '../../hooks'

const WeatherBoard = () => {
  const {loading, error, weatherData} = useWeather();
  console.log(loading, error, weatherData);
  
  return (
    <>
    <section className=" bg-red-400 w-full h-auto  px-28 py-12">
    <Addtofavorite/>
    <div className="flex justify-between items-center ">
      <WeatherHeadline/>
      <WeatherCondition/>
    </div>
    </section>
    </>
  )
}

export default WeatherBoard
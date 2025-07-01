import React, { useContext } from "react";
import Addtofavorite from "./Addtofavorite";
import WeatherHeadline from "./WeatherHeadline";
import WeatherCondition from "./WeatherCondition";

import { WeatherContext } from "../../context";

const WeatherBoard = () => {
  // Extract data from context
  const {  loading } = useContext(WeatherContext);

  return (
    <>
      <section className="w-full h-auto  px-32 py-10">
        {loading.state ? (
          <p>{loading.message}</p>
        ) : (
          <>
          <section className="border-2 border-sky-500">
            <Addtofavorite />
            <div className="flex justify-between items-center ">
              <WeatherHeadline />
              <WeatherCondition />
            </div>
          </section>
            
          </>
        )}
      </section>
    </>
  );
};

export default WeatherBoard;

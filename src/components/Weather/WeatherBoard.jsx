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
      <section className="  w-full h-auto  px-28 py-12">
        {loading.state ? (
          <p>{loading.message}</p>
        ) : (
          <>
            <Addtofavorite />
            <div className="flex justify-between items-center ">
              <WeatherHeadline />
              <WeatherCondition />
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default WeatherBoard;

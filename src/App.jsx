import React from "react";
import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";
import {
  WeatherProviderComponent,
  FavouriteProviderComponent,
  LocationProviderComponent,
} from "./provider";

const App = () => {
  return (
    <>
      <WeatherProviderComponent>
        <FavouriteProviderComponent>
          <LocationProviderComponent>
            <Header />
            <WeatherBoard />
          </LocationProviderComponent>
        </FavouriteProviderComponent>
      </WeatherProviderComponent>
    </>
  );
};

export default App;

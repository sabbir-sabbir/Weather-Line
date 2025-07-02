import React from 'react'
import Header from './components/Header/Header'
import WeatherBoard from './components/Weather/WeatherBoard'
import { WeatherProviderComponent, FavouriteProviderComponent } from './provider'

const App = () => {
  return (
    <>
   <WeatherProviderComponent>
     <FavouriteProviderComponent>
      <Header/>
      <WeatherBoard/>
     </FavouriteProviderComponent>
   </WeatherProviderComponent>
    </>
  )
}

export default App
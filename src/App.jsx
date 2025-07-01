import React from 'react'
import Header from './components/Header/Header'
import WeatherBoard from './components/Weather/WeatherBoard'
import { WeatherProviderComponent } from './provider'

const App = () => {
  return (
    <>
   <WeatherProviderComponent>
     <Header/>
     <WeatherBoard/>
   </WeatherProviderComponent>
    </>
  )
}

export default App
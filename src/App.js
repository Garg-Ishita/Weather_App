import './App.css';
import TopButtons from './components/TopButtons'

import Inputs from './components/Inputs.js';
import Time from './components/Time'
import TempAndDetails from './components/TempAndDetails'
import getFormattedWeatherData from './services/WeatherServices';
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react';
import ForecastHourly from './components/ForecastHourly';
import DailyForecast from './components/DailyForecast';

function App() {

  const[query, setQuery]= useState({q:"delhi"})
  const[unit, setUnit]= useState("metric") 
  const[weather, setWeather]= useState(null) 


  useEffect(()=>{
    const fetchWeather=async()=>{
      // const data = await getFormattedWeatherData( {q:"london"});
     await  getFormattedWeatherData( {...query , unit}).then((data)=>{setWeather(data)});
      // console.log(data);
    }; 

    fetchWeather();
  },[query , unit])

  // const changeBackground=()=>{
  //   if(!weather) return (
  //     <img src="https://cdn-icons-gif.flaticon.com/8722/8722704.gif" alt=""/>
  //   )

  //   if(weather.temp <=200) return (
  //     <img src="https://cdn-icons-gif.flaticon.com/8722/8722704.gif" alt="love"/>
  //   )
  //   else return (
  //     <img src="https://cdn-icons-gif.flaticon.com/8722/8722704.gif" alt="love"/>
  //   )
  // }
  
  return (
    <div className="App " >
    <Navbar/>
    <TopButtons setQuery={setQuery} />
    <Inputs setQuery={setQuery} unit={unit} setUnit={setUnit} />

{weather && (
  <>    
  <Time weather={weather}/>
    <TempAndDetails  weather={weather} />

    <ForecastHourly weather={weather}/>
    <DailyForecast weather={weather}/> 
  </>
    )}
  </div>
  )
};
export default App;
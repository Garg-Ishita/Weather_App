
import React, { useEffect, useState } from "react";
import "./TempAndDetails.css";
import { UilTemperatureHalf } from "@iconscout/react-unicons";
import { UilWind } from "@iconscout/react-unicons";
import { UilTear } from "@iconscout/react-unicons";
import { UilBrightness } from '@iconscout/react-unicons';
import { UilSunset } from '@iconscout/react-unicons';
import { UilArrowUp } from '@iconscout/react-unicons';
import { UilArrowDown } from '@iconscout/react-unicons';
// import ForecastHourly from './ForecastHourly';
// import DailyForecast from './DailyForecast'
import { formatToLocalTime, iconUrlFromCode } from "../services/WeatherServices";
// import formatForecastWeather from '../services/WeatherServices'


// import getNewWeatherData, { formatToLocalTime, iconUrlFromCode } from "../services/WeatherServices";
function TempAndDetails({ weather: { details, icon, temp, temp_min, temp_max, sunrise, sunset, humidity,
  feels_like, timezone, speed } }) {

  // const[query, setQuery]= useState({q:'berlin'})
  // const[unit, setUnit]= useState('metric') 
  // const[weather, setWeather]= useState(null) 


  // useEffect(()=>{
  //   const fetchweather=async()=>{
  //    await getFormattedWeatherData ( {...query , unit}).then((data)=>{setWeather(data)});
  //     // console.log(data);
  //   }; 

  //   fetchweather();
  // },[query , unit])

  return (

    <div className="outerBot">
      <div className="first">
        {/* Clear */}
        {details}
      </div>

      <div className="second">
        {/* <img
          src="https://cdn-icons-png.flaticon.com/512/2698/2698194.png"
          alt="image"
          className="mainPic"
        /> */}
        <img src={iconUrlFromCode(icon)} alt="image" className="mainPic" />

        <p className="temp">{`${(temp - 273.15).toFixed(1)}°`}</p>
        <div className="side">
          <div className="sideText">
            <UilTemperatureHalf size={18} />
            Real Feel :<span className="smallData">{`${(feels_like -273.15).toFixed(1)}°`}</span>
          </div>
          <div className="sideText ">
            <UilTear size={18} />
            Humidity :<span className="smallData">{`${humidity.toFixed()}`}%</span>
          </div>
          <div className="sideText ">
            <UilWind size={18} />
            Speed :<span className="smallData">{`${speed.toFixed()}`} kmph</span>
          </div>
        </div>
      </div>

      <div className="mid">
        <UilBrightness size={18} />
        <p>Rise : <span>{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span></p>
        <p> | </p>
        <UilSunset size={18} />
        <p>Set : <span>{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span></p>
        <p> | </p>
        <UilArrowUp size={18} />
        <p>Max : <span>{`${(temp_max-273.15).toFixed(1)}`}</span></p>
        <p> | </p>
        <UilArrowDown size={18} />
        <p>Min : <span>{`${(temp_min-273.15).toFixed(1)}`}</span></p>

      </div>
      {/* {formatForecastWeather &&
            <>
            <ForecastHourly formatForecastWeather={formatForecastWeather} />
            <DailyForecast formatForecastWeather={formatForecastWeather} /> */}
      {/* </> */}
      {/* } */}
    </div>
  );
}

export default TempAndDetails;
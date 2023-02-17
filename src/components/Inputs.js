import React, { useState } from "react";
import { UilSearchAlt, UilMapMarkerAlt } from "@iconscout/react-unicons";
import "./Inputs.css";
function Inputs({setQuery , unit , setUnit}) {

  const[city, setCity]=useState("");

  const handleSearch=()=>{
    if(city!=='')
      setQuery({q:city})
  }

  const handleUnits=(e)=>{
    const presentUnit=e.currentTarget.name;
    if(unit!==presentUnit)
      setUnit(presentUnit)
  }
  const location=()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat=position.coords.latitude
        let lon=position.coords.longitude

        setQuery({
          lat, lon
        })
      })
    }
  }
  return (
    <div className="outer">
      <div className="search">
        <input value={city} onChange={(e)=>setCity(e.currentTarget.value)} type="text" className="input" placeholder="Search the city here..."></input>
        <UilSearchAlt size={30} onClick={handleSearch}/>
        <UilMapMarkerAlt size={30} color={'black'} className="location" onClick={location}/>
      </div>
      <div className="celciusFull">
        <button name="cel" className="celcius" onClick={handleUnits}>°C</button>
        <p className="divider"> | </p>
        <button name="fah"  className="celcius" onClick={handleUnits}>°F</button>
      </div>
    </div>
  );
}

export default Inputs;

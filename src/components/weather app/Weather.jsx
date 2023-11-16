import React, { useState } from 'react'
import './Weather.css'
import search_icon from'../assets/search.png';
import clear_icon from'../assets/clear.png';
import cloud_icon from'../assets/cloud.png';
import drizzle_icon from'../assets/drizzle.png';
import rain_icon from'../assets/rain.png';
import snow_icon from'../assets/snow.png';
import wind_icon from'../assets/wind.png';
import humidity_icon from'../assets/humidity.png';

const Weather = () => {

    const api_key = "dd94f859a0e52d6e4767fddf735f04a7"

    const [wicon,setwicon] = useState(cloud_icon)

    const search = async ()=>{
        const element = document.getElementsByClassName ("cityinput")
        if(element[0].value===""){
          return 0;
        }
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`

        const res=await fetch(url);
        const data = await res.json();
        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-rate")
        const temprature= document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")
        // const min_icon =document.getElementsByClassName("main-icon")

        humidity[0].innerHTML = data.main.humidity+"%";
        wind[0].innerHTML = Math.floor(data.wind.speed)+"Km/h";
        temprature[0].innerHTML = Math.floor(data.main.temp) +"°C";
        location[0].innerHTML = data.name;
        // min_icon[0].innerHTML = data.weather.icon;

        if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n"){
          setwicon(clear_icon)
        }
        else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n"){
          setwicon(cloud_icon)
        }
        else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n"){
          setwicon(drizzle_icon)
        }
        else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n"){
          setwicon(drizzle_icon)  
        }
        else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n"){
          setwicon(rain_icon)  
        }
        else if(data.weather[0].icon==="10d"||data.weather[0].icon==="10n"){
          setwicon(rain_icon)  
        }
        else if(data.weather[0].icon==="13d"||data.weather[0].icon==="13n"){
          setwicon(snow_icon)  
        }
        else{
          setwicon(clear_icon);
        }
    }
  return (
    <div className='Container'>
      <div className="top-bar">
        <input type="text" className="cityinput" placeholder='search'  />
        <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" className='main-icon' />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">london</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 Km/h</div>
            <div className="text">wind speed</div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Weather
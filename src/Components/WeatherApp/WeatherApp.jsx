import React, { useEffect, useState } from "react";

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

const WeatherApp = () => {
  let api="e18f6b68c008cac4c02e74954d6a27e7";

  useEffect(()=>{
    document.addEventListener('keydown',detect,true)
  },[])
  const detect=(e) =>{
    if(e.key==="Enter"){
      search();
    }
  }

  const [wicon,setWicon]=useState(cloud_icon);

  const [bg,setBg]=useState("bg-clear");

  const search = async()=> {
    const element=document.getElementsByClassName("CityInput");
    if(element[0].value===""){
      return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api}`

    let response= await fetch(url);
    let data= await response.json();
    const humidity=document.getElementsByClassName("humidity");
    const wind=document.getElementsByClassName("wind-rate");
    const temperature=document.getElementsByClassName("weather-temp");
    const location=document.getElementsByClassName("weather-location");

    humidity[0].innerHTML=data.main.humidity+"%";
    wind[0].innerHTML=Math.floor(data.wind.speed)+"km/h";
    temperature[0].innerHTML=Math.floor(data.main.temp)+"°C";
    location[0].innerHTML=data.name;

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
      setWicon(clear_icon);
      setBg("bg-clear");
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
      setWicon(cloud_icon);
      setBg("bg-cloud");
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
      setWicon(drizzle_icon);
      setBg("bg-drizzle");
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
      setWicon(drizzle_icon);
      setBg("bg-drizzle");
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
      setWicon(rain_icon);
      setBg("bg-rain");
    }
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
      setWicon(rain_icon);
      setBg("bg-rain");
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
      setWicon(snow_icon);
      setBg("bg-snow");
    }
    else{
      setWicon(clear_icon);
      setBg("bg-clear");
    }



  }



  return (
    <div className={`container w-[707px] h-[862px] m-auto mt-[69px] rounded-xl bg-main ${bg}`}>
      <div className="top-bar flex justify-center gap-[18px] pt-[70px]">
        <input
          type="text"
          className="CityInput flex w-[300px] h-[60px] bg-white rounded-[30px] pl-[40px] decoration-[#626262] text-[25px] text-semibold"
          placeholder="Search"
        />
        <div className="search-icon flex justify-center items-center w-[60px] h-[60px] bg-white rounded-[40px] cursor-pointer" onClick={()=>{search()}} >
          <img src={search_icon} alt="search" className="w-[25px] h-[25px]" />
        </div>
      </div>
      <div className="weather-image mt-[30px] flex justify-center ">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp flex justify-center text-white text-[125px] text-bold">
        --°C
      </div>
      <div className="weather-location flex justify-center text-white text-[55px] text-bold">
        Enter City
      </div>

      <div className="data-container mt-[50px] text-white flex justify-center">
        <div className="element m-auto flex items-start gap-[15px]">
          <img src={humidity_icon} alt="" className="mt-[10px]" />
          <div className="data text-[33px] text-semibold">
            <div className="humidity">--%</div>
            <div className="text text-semibold text-[20px]">Humidity</div>
          </div>
        </div>
        <div className="element m-auto flex items-start gap-[15px]">
          <img src={wind_icon} alt="" className="mt-[10px]"/>
          <div className="data text-[33px] text-semibold">
            <div className="wind-rate">--km/h</div>
            <div className="text text-semibold text-[20px]">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherApp;

"use client"
import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [weather, setweather] = useState({});
  useEffect(()=>{
    async function get_weather(){
      axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`).then(response => {
        setweather(response.data.current_weather);
        console.log(response.data.current_weather)
      }).catch(error => {
        console.log(error);
      })
    }
    get_weather()
  },[latitude, longitude])
  return (
    <div className="home bg-white h-screen flex flex-row">
      <Navbar/>
      <main className='sm:w-10/12 w-screen'>
        <article className='m-auto mt-24 p-5 bg-[#393d46] text-slate-100 w-11/12 rounded-xl h-[180px] sm:h-[260px]'>
          <h1 className='font-semibold text-3xl sm:text-4xl my-1 sm:my-3'>Welcome to Our Site!</h1>
          <p className='text-[#a1a6ab] sm:text-sm text-xs w-[500px] max-w-full'>Tools from Google for building app infrastructure, improving app quality and growing your business</p>
        </article>
        <div className="m-auto mt-5 p-5 bg-[#393d46] text-slate-100 w-11/12 flex flex-wrap rounded-xl h-fit sm:h-[260px]">
          <form className='sm:w-1/2 w-full'>
            <label htmlFor="latitude" className=''>Latitude : <br />
              <input type="number" step={.01} value={latitude} onChange={(e)=>{setlatitude(e.target.value)}} className='text-black sm:w-8/12 w-full'/>
            </label><br /><br />
            <label htmlFor="longitude">Longitude : <br />
              <input type="number" step={.01} value={longitude} onChange={(e)=>{setlongitude(e.target.value)}} className='text-black sm:w-8/12 w-full'/>
            </label><br />
            {/* <input type="button" value="Submit" className='bg-[#543f59] my-4 w-max px-5 py-2 rounded'/> */}
          </form>
          <div className="sm:w-1/2 w-full sw:mt-0 mt-3">
            <p className='m-1'><b>Time : </b>{weather.time}</p>
            <p className='m-1'><b>Temperature : </b>{weather.temperature}</p>
            <p className='m-1'><b>Is Day : </b>{weather.is_day}</p>
            <p className='m-1'><b>Weather Code : </b>{weather.weathercode}</p>
            <p className='m-1'><b>Wind Direction : </b>{weather.winddirection}</p>
            <p className='m-1'><b>Wind Speed : </b>{weather.windspeed}</p>
          </div>
        </div>
      </main>
    </div>
  )
}

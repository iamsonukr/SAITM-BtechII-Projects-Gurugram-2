import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Weather = () => {
    const [weather, setWeather] = useState(null)
    const api = process.env.REACT_APP_WEATHER_API_KEY    
    // const api = process.env.REACT_APP_WEATHER_API_KEY    


    const getWeather = async () => {
        try {
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${api}&q=Ranchi&aqi=no`)
            // const data = await response.json()
            setWeather(response.data)
    
        } catch (error) {
            console.error("Error fetching weather data:", error)
        }
    }

    useEffect(() => {
        getWeather()
    }, [])

    return (
        <div>
            <h1>Weather in {weather?.location?.name}</h1>
            <p>Temperature: {weather?.current?.temp_c} °C</p>
            <p>Condition: {weather?.current?.condition?.text}</p>
        </div>
    )
}

export default Weather

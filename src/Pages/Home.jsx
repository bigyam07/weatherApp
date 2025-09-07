import React, { useState } from 'react'
import SearchSection from '../component/SearchSection';
import WeatherDetail from '../component/WeatherDetail';
import WeatherDate from '../component/WeatherDate';

const Home = () => {
    const [temp, setTemp] = useState(0);
    async function fetchData() {
        const API_KEY = "7d9f0e29eb6c9dc415759327b143a9a1";
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=${API_KEY}&units=metric`;
        fetch(URL)
            .then(response => {
                if (!response.ok) {
                    console.log("error");
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setTemp(data.main.temp);
            }).catch(error => {
                console.log("Error: ", error.message)
            })
    }
    return (
        <>
            <div className='container'>
                <div className="weather-contents">
                    <SearchSection />
                    <WeatherDetail />
                    <div className="weather-date-info">
                        <WeatherDate />
                        <WeatherDate />
                        <WeatherDate />
                        <WeatherDate />
                        <WeatherDate />
                        <WeatherDate />
                        <WeatherDate />
                        <WeatherDate />
                        <WeatherDate />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
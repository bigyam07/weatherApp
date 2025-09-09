import React, { useState } from 'react'
import SearchSection from '../component/SearchSection';
import WeatherDetail from '../component/WeatherDetail';
import WeatherDate from '../component/WeatherDate';

const Home = () => {
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

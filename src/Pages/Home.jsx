import { useState } from 'react'
import SearchSection from '../component/SearchSection';
import WeatherDetail from '../component/WeatherDetail';

const Home = () => {
    const [weatherData, setWeatherData] = useState(null);
    return (
        <>
            <div className='container'>
                <div className="weather-contents">
                    <SearchSection setWeatherData={setWeatherData} />
                    <WeatherDetail weatherData={weatherData} />
                </div>
            </div>
        </>
    )
}

export default Home

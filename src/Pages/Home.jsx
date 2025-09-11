import { useState } from 'react'
import SearchSection from '../component/SearchSection';
import WeatherDetail from '../component/WeatherDetail';

const Home = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(false);
    return (
        <>
            <div className='container'>
                <div className="weather-contents">
                    <SearchSection setWeatherData={setWeatherData} setError = {setError}/>
                    <WeatherDetail weatherData={weatherData} error={error}/>
                </div>
            </div>
        </>
    )
}

export default Home

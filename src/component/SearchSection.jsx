import { useState } from 'react';
import styles from './SearchSection.module.css'

const SearchSection = ({ setWeatherData, setError }) => {
    const [city, setCity] = useState("");
    async function fetchData(city) {
        const API_KEY = "7d9f0e29eb6c9dc415759327b143a9a1";
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        fetch(URL)
            .then(response => {
                if (!response.ok) {
                    console.log("Response Error From API!!");
                    setError(true);
                    setWeatherData(null);
                    return null;
                }
                else return response.json();
            })
            .then(data => {
                if(!data) return;
                setWeatherData(data);
                setError(false);
            }).catch(error => {
                console.log("Error, Could not get Data: ", error.message)
            })
    }
    function handleSearchInput() {
        if (city.trim() == "") {
            console.log("Please!!, Enter the city name");
            return;
        }
        fetchData(city);

    }
    return (
        <>
            <div className={styles["search-container"]}>
                <div className={styles["search-section"]}>
                    <div className={styles["search-icon"]}><label htmlFor="input-text"><i className="fa-solid fa-magnifying-glass"></i></label></div>
                    <input type='text' placeholder='Enter a city name' id="input-text" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <button className={styles['location-btn']} onClick={handleSearchInput}><i className="fa-solid fa-location-crosshairs"></i></button>
            </div>
        </>
    )
}

export default SearchSection

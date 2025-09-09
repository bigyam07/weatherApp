import { useState } from 'react';
import styles from './SearchSection.module.css'
const SearchSection = () => {
    const [temp, setTemp] = useState(0);
    async function fetchData(city) {
        const API_KEY = "7d9f0e29eb6c9dc415759327b143a9a1";
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        fetch(URL)
            .then(response => {
                if (!response.ok) {
                    console.log("Error");
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
    function handleSearchInput() {
        const searchInput = document.getElementById("input-text").value;
        if (searchInput == "") console.log("enter the city name");
        else fetchData(searchInput);
    }
    return (
        <>
            <div className={styles["search-container"]}>
                <div className={styles["search-section"]}>
                    <div className={styles["search-icon"]}><label htmlFor="input-text"><i className="fa-solid fa-magnifying-glass"></i></label></div>
                    <input type='text' placeholder='Enter a city name' id="input-text" />
                </div>
                <button className={styles['location-btn']} onClick={handleSearchInput}><i className="fa-solid fa-location-crosshairs"></i></button>
            </div>
        </>
    )
}

export default SearchSection

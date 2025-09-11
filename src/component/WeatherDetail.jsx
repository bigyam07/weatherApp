import styles from './WeatherDetail.module.css'

const WeatherDetail = ({ weatherData, error }) => {
    return (
        <div className={styles["weather-info"]}>
            {error ? (
                <p className={styles['error-msg']}>Invalid Input</p>
            ) : weatherData ? (
                <>
                    <img
                        className={styles['weather-image']}
                        src={`../../src/assets/icons/${weatherData.weather[0].main.toLowerCase()}.svg`}
                        alt="weather icon"
                    />
                    <p className={styles['temperature']}>
                        {Math.floor(weatherData.main.temp)}
                        <sup><span>°C</span></sup>
                    </p>
                    <p className={styles['city-name']}>
                        {weatherData.name}
                    </p>
                    <p className={styles['temp-info']}>
                        {weatherData.weather[0].description}
                    </p>
                    <div className={styles['wind-humidity']}>
                        <div className={styles['wind']}>Wind<p>{weatherData.wind.speed}Km/h</p></div>
                        <div className={styles['humidity']}>Humidity<p>{weatherData.main.humidity}%</p></div>
                    </div>
                </>
            ) : (
                <p className={styles['error-msg']}>Enter a city name</p>
            )}
        </div>
    )
}

export default WeatherDetail

import styles from './WeatherDetail.module.css'

const WeatherDetail = ({ weatherData, error }) => {
    return (
        <div className={styles["weather-info"]}>
            {error ? (
                <p>Invalid Input</p>
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
                    <p className={styles['temp-info']}>
                        {weatherData.weather[0].description}
                    </p>
                    <div className={styles['wind-humidity']}>
                        <div className={styles['wind']}>10</div>
                        <div className={styles['humidity']}>10</div>
                    </div>
                </>
            ) : (
                <p>Enter a city to get Weather</p>
            )}
        </div>
    )
}

export default WeatherDetail

import styles from './WeatherDetail.module.css'
const WeatherDetail = ({ weatherData }) => {
    if (!weatherData) return <p></p>
    return (
        <>
            <div className={styles["weather-info"]}>
                <img className={styles['weather-image']} src={`../../src/assets/icons/${weatherData.weather[0].main.toLowerCase()}.svg`} />
                <p className={styles['temperature']}>{Math.floor(weatherData.main.temp)}<sup><span>°C</span></sup></p>
                <p className={styles['temp-info']}>{weatherData.weather[0].description}</p>
            </div>
        </>
    )
}

export default WeatherDetail

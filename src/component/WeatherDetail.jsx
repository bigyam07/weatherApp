import styles from './WeatherDetail.module.css'
const WeatherDetail = () => {
    return (
        <>
            <div className={styles["weather-info"]}>
                <img className={styles['weather-image']} src="../../src/assets/icons/clear.svg" />
                <p className={styles['temperature']}>20<sup><span>°C</span></sup></p>
                <p className={styles['temp-info']}>Partly Cloudy</p>
            </div>
        </>
    )
}

export default WeatherDetail
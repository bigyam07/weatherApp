import styles from './WeatherDate.module.css'
const WeatherDate = () => {
    return (
        <>
            <div className={styles["weather-date-container"]}>
                <p className={styles['time']}>10:00</p>
                <img className={styles["weather-icon"]} src='../../src/assets/icons/clear.svg' />
                <p className={styles['temp-sub']}>20°C</p>
            </div>
        </>
    )
}

export default WeatherDate
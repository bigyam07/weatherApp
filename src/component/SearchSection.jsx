import styles from './SearchSection.module.css'
const SearchSection = () => {
    return (
        <>
            <div className={styles["search-container"]}>
                <div className={styles["search-section"]}>
                    <div className={styles["search-icon"]}><label for="input-text"><i class="fa-solid fa-magnifying-glass"></i></label></div>
                    <input type='text' placeholder='Enter a city name' id="input-text" />
                </div>
                <button className={styles['location-btn']}><i class="fa-solid fa-location-crosshairs"></i></button>
            </div>
        </>
    )
}

export default SearchSection
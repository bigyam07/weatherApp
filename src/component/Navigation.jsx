import styles from "./Navigation.module.css"
const Navigation = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.locationLogo}>
          <i class="fa-solid fa-location-dot"></i>
        </div>
        <div className={styles.searchContainer}>
          <div><i class="fa-solid fa-magnifying-glass"></i></div>
          <input type="text" placeholder="Search City" />
        </div>
        <div className={styles.darkModeContainer}>
          <i class="fa-solid fa-moon"></i>
        </div>
      </div>
    </>
  )
}

export default Navigation

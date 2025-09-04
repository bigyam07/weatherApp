const Home = () => {
  return (
    <div className="weather-container">
      <div className="weather-left shadow-border">
        <div className="date flex">
          <div>Wednesday</div>
          <div>9:30pm</div>
        </div>
        <div className="city-name">New York</div>
        <div className="temperature flex" >
          <div className="temp-text">30C</div>
          <div className="temp-logo"><img src="#" /></div>
        </div>
        <div className="weather-footer flex">
          <div className="wind-humidity">
            <p>Wind 4m/s</p>
            <p>Humidity 56%</p>
          </div>
          <div className="sun-set-rise">
            <p>Sunrise 6:30am</p>
            <p>Sunset 6:30pm</p>
          </div>
        </div>
      </div>

      <div className="weather-right">
        <div className="shadow-border pollution">
          <h6>AIR POLLUTION</h6>
          <h4>Good air Quality</h4>
          <p>Enjoy outdoor activities</p>
        </div>
        <div className="shadow-border sunset">
          <div className="heading-sunset">
            <h6>SUNSET</h6>
            <h4>8:04 PM</h4>
          </div>
          <div className="footer-sunset">
            <p>Sunrise 6:31 AM</p>
          </div>
        </div>
        <div className="shadow-border wind">
          <h6>WIND</h6>
          <img src="#" />
        </div>
        <div className="shadow-border uv">
          <h6>UV INDEX</h6>
          <h4>4</h4>
          <h5>Moderate</h5>
        </div>
        <div className="shadow-border precipitation">
          <h6>PRECIPITATION</h6>
          <h4>0 mm</h4>
          <h6>in last 3hours</h6>
        </div>
        <div className="shadow-border feels-like">
          <h6>FEELS LIKE</h6>
          <h4>19C</h4>
        </div>
        <div className="shadow-border humidity">
          <h6>HUMIDITY</h6>
          <h4>88%</h4>
        </div>
        <div className="shadow-border visibility">
          <h6>VISIBILITY</h6>
          <h4>10KM</h4>
        </div>
        <div className="shadow-border pressure">
          <h6>PRESSURE</h6>
          <h4>1017 hPa</h4>
        </div>
        <div className="shadow-border chance-rain">
          <h6>CHANCE OF RAIN</h6>
        </div>
      </div>

    </div>
  )
}

export default Home

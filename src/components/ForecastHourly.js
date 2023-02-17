
import React from 'react'
import { iconUrlFromCode } from '../services/WeatherServices'
import './ForecastHourly.css'
function ForecastHourly({ weather: { hourly } }) {
    return (
        <div className='outerBot'>
            <div className='foreMain'>
                <p className='mainHead'>HOURLY FORECAST</p>
            </div>
            <hr className='line' />
            <div className='weatherSmall'>
                {hourly?.map(item => (
                    <div className='inBox'>
                        <p className='smallText'>
                            {item.title}
                        </p>
                        <img className="weatherImages" src={iconUrlFromCode(item.icon)} alt="sun" />
                        <p className='medText'>
                            {`${(item.temp - 273.15).toFixed(1)}°`}
                        </p>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default ForecastHourly;
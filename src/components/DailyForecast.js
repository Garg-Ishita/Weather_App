
import React from 'react'
import { iconUrlFromCode } from '../services/WeatherServices'
import './DailyForecast.css';

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

function DailyForecast({ weather: { daily } }) {
    return (
        <div className='outerBot'>
            <div className='foreMain'>
                <p className='mainHead'>FUTURE FORECAST</p>
            </div>
            <hr className='line' />
            <div className='nextWeek'>
                {
                    daily?.map(item => (
                        <div className='dayinBox'>
                            <p className='smallText'>{days[item.title]}</p>
                            <img className="weatherImagesNow" src={iconUrlFromCode(item.icon)} alt="sun" />
                            <p className='medTextNow'> {`${parseFloat(item.temp - 273.15).toFixed(1)}°`}</p>
                        </div>
                    )
                    )
                }
            </div>
        </div>

    )
}

export default DailyForecast
import React from 'react'
import { formatToLocalTime } from '../services/WeatherServices'
import './Time.css'

function Time({weather:{dt , timezone , name , country}}) {
  return (
    <div>
        <div className='timeOuter'>
            <p className='long'>
            {/* Sunday , 12 Feb 2023 | Local Time: 22:34 PM */}

            {formatToLocalTime(dt , timezone)}
            </p>
         </div>
         <div className='place'>
         <p className='timeOuter'>
          {`${name} , ${country}`}
          {/* Delhi , India */}
          </p> </div>
    </div>
  )
}

export default Time
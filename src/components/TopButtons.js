import React from 'react'
import './TopButtons.css'
function TopButtons({setQuery}) {
    const cities=[
        {
            id:1,
            title:'London'
        },{
            id:2,
            title:'Sydney'
        },{
            id:3,
            title:'Toronto'
        },{
            id:4,
            title:'Tokyo'
        },{
            id:5,
            title:'Paris'
        },
    ]
  return (
    <div className='inputNav'>
    <div className='ButtonBar'>
        {cities.map((city)=>(
            <button key={city.id} className='cityWalaButton' onClick={()=>setQuery({q:city.title})}>{city.title}</button>
        ))}
    </div>
    </div>
  )
}

export default TopButtons
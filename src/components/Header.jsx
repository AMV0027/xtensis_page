import React from 'react'
import '../App.css'


function Header() {
  return (
    <div className='header'>
        <div className="logo-text">
            XTENSIS
        </div>
        <div className="buttons">
            <button className="btn-header px-6 rounded-bl-xl">Events</button>
            <button className="btn-header px-6 rounded-tr-xl">Location</button>
        </div>
    </div>
  )
}

export default Header
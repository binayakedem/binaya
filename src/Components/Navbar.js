import './style.css'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
        <img src="" alt="logo" className="navImg" />

        </div>
        <div className="menus">
            <li>Home</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>About</li>
            <li>Contact</li>

        </div>
        <div className="mode">
            <button className='navMode'>mode</button>

        </div>
    
    </nav>
  )
}

export default Navbar
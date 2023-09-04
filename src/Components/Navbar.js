import React from 'react'
import { Link } from 'react-scroll'
import './style.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'
const Navbar = () => {
  const[showIcons,setShowIcons]=useState(true);
  return (
    <nav className='main-nav'>
      {/* this is the mainly contain the menu */}
      <div className="name">
      <h2 className='name1'>Binaya</h2>
      <div className="hamburger-menu">
          <button className='menu-icon' onClick={()=>setShowIcons(!showIcons)}>
          <GiHamburgerMenu/>
          </button>
        </div>
          

      </div>
      <div className={showIcons?"menus":"mobile-menu"}>
        {/* second menu links contains */}
        <ul>
          <li><Link className='list'>Home</Link></li>
          <li><Link className='list'>Projects</Link></li>
          <li><Link className='list'>Skills</Link></li>
          <li><Link className='list'>About</Link></li>
          <li><Link className='list'>Contact</Link></li>
        </ul>

      </div>
      <div className="mode">
        <button className='btn' >mode</button>
        

      </div>
    </nav>
  )
}

export default Navbar



// import React from 'react'
// import './style.css'
// import logo from "../assets/icon.png"
// import { Link } from 'react-scroll'
// import {GiHamburgerMenu} from 'react-icons/gi'
// const Navbar = () => {
//   return (
//     <nav className=' navbar  mobile-menu'>
//       <div className="logos"><span><img src={logo} alt="logo" className="logo" /></span><span className='name'>Binaya</span></div>
//       <div className="menus">
//         <Link className='lists mlists'>Home</Link>
//         <Link className='lists mlists'>Projects</Link>
//         <Link className='lists mlists'>Skills</Link>
//         <Link className='lists mlists'>About</Link>
//         <Link className='lists mlists'>Contact</Link>
//       </div>
//       <button className="btn">Mode</button>
//         <div className="hamburgericon">
//           <a href="#">
//             <GiHamburgerMenu/>
//           </a>
//         </div>

//     </nav>
//   )
// }

// export default Navbar

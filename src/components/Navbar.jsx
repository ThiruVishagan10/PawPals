import React from 'react'
import './Navbar.css'

function Navbar(){
    return(
        <nav className="navbar">
             <div className="navbar-logo">
              <h1>PawsPals</h1>
            </div> 
            <ul className="navbar-links">
             <li><a to="/Shop">Shop</a></li> 
             <li><a to="/Service">Service</a></li> 
             <li><a to="/Feeds">Feeds</a></li> 
             <li><a to="/Profile">Profile</a></li> 
             <li><a className='login'>Login</a></li>
            </ul> 
        </nav>)
}

export default Navbar
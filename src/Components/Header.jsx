import React from 'react';
import logo from "../assets/Logo.png";
import "../Styles/header.css";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='header'>
        <nav>
            <div className='logo'>
                <img src={logo} alt={"logo"} />
            </div>
            <div className='links'>
<ul>
  <Link to= "/">
   <li><span>HOME</span></li>
  </Link>
   

    <Link to="/about">
    <li>ABOUT</li>
    </Link>

    <Link to="/services">
    <li>SERVICES</li>
    </Link>
    
    <Link to="/contact">
    <li>CONTACT</li>
    </Link>
   
</ul>
            </div>
            <div className='maballi'>
            <Link to="/login">
            <button className='login'>Log In</button>
            </Link>
<Link to="/signup">
<button className='signup'>Sign Up</button>
</Link>
               
            </div>
        </nav>
    </div>
  )
}




export default Header
import React from 'react';
import logo from "../assets/Logo.png";
import "../Styles/header.css";

const Header = () => {
  return (
    <div className='header'>
        <nav>
            <div className='logo'>
                <img src={logo} alt={"logo"} />
            </div>
            <div className='links'>
<ul>
    <li><a href=""><span>HOME</span></a></li>
    <li><a href="">ABOUT</a></li>
    <li><a href="">SERVICES</a></li>
    <li><a href="">CONTACT</a></li>
</ul>
            </div>
            <div className='maballi'>
                <button className='login'>Log In</button>
                <button className='signup'>Sign Up</button>
            </div>
        </nav>
    </div>
  )
}

export default Header
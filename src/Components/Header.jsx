import React from 'react';
import logo from "../assets/Logo.png";
import "../Styles/header.css";
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-white backg mobile-nav header">
        <Container className=''>
    
       <Navbar.Brand className=''>
            <Link to="/">
              <img className="header-img" src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto header-one gida">
              <Link to="/" className="text-decoration-none me-4 linke">
              <li><span>HOME</span></li>
              </Link>
              <Link to="/about" className="text-decoration-none me-4 link">
              <li>ABOUT</li>
              </Link>
              <Link to="/services " className="text-decoration-none me-4 link">
               <li>SERVICES</li>
              </Link>
              <Link to="/Contact" className="text-decoration-none link">
                <li>CONTACT</li>
              </Link>
            </Nav>
          
            <Nav className="maballi">
              <Link
                to="/login"
                className="text-decoration-none me-4 mt-3 linke "
              >
               <button className='daya'> Log in</button>
              </Link>
              <Link to="/Signup" className="text-decoration-none botsign ">
                <button className='biyu'> Sign Up</button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
    </>
    
  )
}

export default Header




      
   
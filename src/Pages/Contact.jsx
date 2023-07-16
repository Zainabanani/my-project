import React from 'react'
import "../Styles/contact.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import call from "../assets/contact/call.png"
import clock from "../assets/contact/clock.png"
import location from "../assets/contact/location.png"
import map from "../assets/contact/map.png"
import message from "../assets/contact/message.png"


const Contact = () => {
  return (
    <div>
        <Header />
        {/* background */}
        <div className='back'>
<h1>Contact Us</h1>
        </div>
{/* second layer */}
<div className='white-box'>
    <div className='box'>
      <img src={location} alt={"location"} />
      <p>1, Ogunlesi str, onipanu, Lagos.</p>
    </div>
    <div className='box'>
        <img src={call} alt={"call"} />
        <p>(233) 768-0202 <br />(234) 799-1020</p>
    </div>
    <div className='box'>
        <img src={message} alt={"message"} />
        <p>www.medkit.com info@medkit.com</p>
    </div>
    <div className='box no-box'>
        <img src={clock} alt={'clock'} />
        <p>24 Hours a Day 7 Days a Week</p>
    </div>
</div>
{/* Third layer */}
<div className='map'></div>
{/* Fourth Layer */}
<div className='send'>
    <div className='send-box'>
    <div className='message'>
        <h2>Send us a message</h2>
<input type="text" placeholder='Your Name*'/>
<input type="text"placeholder='Phone*'/>
<input type="text" id="Email" placeholder='Email*'  className='email'/> <br />
<input type="text" className='babba'/> <br />
<button>Send Message</button>
    </div>
   
    </div>

</div>


    </div>

  )
}

export default Contact
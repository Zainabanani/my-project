import React from "react";
import "../Styles/contact.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import call from "../assets/contact/call.png";
import clock from "../assets/contact/clock.png";
import location from "../assets/contact/location.png";
import map from "../assets/contact/map.png";
import message from "../assets/contact/message.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Header />
      {/* background */}
      <div className="back">
        <h1>Contact Us</h1>
      </div>
      {/* second layer */}
      <div className="white-box">
        <div className="box">
          <img src={location} alt={"location"} />
          <p>1, Ogunlesi str, onipanu, Lagos.</p>
        </div>
        <div className="box">
          <img src={call} alt={"call"} />
          <p>
            (233) 768-0202 <br />
            (234) 799-1020
          </p>
        </div>
        <div className="box">
          <img src={message} alt={"message"} />
          <p>www.medkit.com info@medkit.com</p>
        </div>
        <div className="box no-box">
          <img src={clock} alt={"clock"} />
          <p>24 Hours a Day 7 Days a Week</p>
        </div>
      </div>
      {/* Third layer */}
      <div className="map"></div>
      {/* Fourth Layer */}
     
        <div className="form-container">
            
            <form>
            <h3>Send Us a Message</h3>
                <div className="flex-input">
                    <input type="text" />
                    <input type="text" />
                </div>
                <input type="text" className="normal-input" />
                <input type="text" className="normal-input"/>
            </form>

        </div>
      {/* fifth layer */}
      <div className="subscribe">
        <div className="latest-news">
          <h1>Subscribe</h1>
          <p>Get our latest news & update regularly</p>
        </div>
        <div>
          <input type="text" placeholder="Type Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

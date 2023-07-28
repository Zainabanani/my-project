import React from "react";
import "../Styles/about.css";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About2 from "./About2";
import About3 from "./About3";
import About4 from "./About3";
import arrow from "../assets/arrow.png";



const About = () => {
  return (
    <div className="about">
      <div>
        <Header />
      </div>
      <div className="main-c">
        <div>
          <h1>Health is Wealth</h1>
          <p>
            Health is most important in your daily life. We <br />
            strive to offer nothing but quality healthcare. <br /> You are rest
            assured your wellbeing and health <br /> are in safe hands.
          </p>
          <button type="submit">
            Find a Doctor <img src={arrow} alt={"arrow"} />{" "}
          </button>
        </div>
      </div>

  <About2 />
  <About3/>
  <About4 />
  <Footer />
  

    </div>
  );
};

export default About;

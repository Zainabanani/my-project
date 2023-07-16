import React from "react";
import "../Styles/about.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import fdoctor from "../assets/fdoctor.png";
import lab from "../assets/lab.png";
import arrow from "../assets/arrow.png";
import check from "../assets/check.png";
import covi from "../assets/covi.png";

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
      {/* body */}
      <div className="body">
        <div className="up">
          <div>
            <img src={lab} alt={"lab"} />
          </div>
          <div className="explain">
            <div className="truly">
              <h6>About Us</h6>
              <h1>
                We Are Thoroughly <br />
                Committed To Making <br /> Your Health Our Priority
              </h1>
            </div>
            <div className="p-tag">
              <p>
                Lorem ipsum dolor sit amet consectetur. Sed nec ornare vitae.
                Morbi pellentesque ultricis id faucibus aliquam sed sit sed.
                Proiermentum mauris mi aliquet sed vel. Quam id secongue diam
                tincidunt enim.
              </p>
              <button type="button">Learn More</button>
              <hr />
            </div>
            <div className="commited">
              <h6>About Us</h6>
              <h1>
                We Are Thoroughly Committed To <br /> Making Your Health Our
                Priority
              </h1>
            </div>
            <div className="second">
              <p>
                Lorem ipsum dolor sit amet consectetur. Sed nec ornare vitae{" "}
                <br />
                duis leo lacus pellentesque sit. Turpis amet ut tortor
                scelerisque <br /> risus adipiscing et non. Interdum ac integer
                pretium aliquam auc. <br />
                Tristique aliquet nisl odio risus diam. Morbi pellentesque
                ultricis <br /> id faucibus aliquam sed sit sed. Proin fermentum
                mauris mi <br /> aliquet sed vel. Quam id sed congue diam
                tincidunt enim.
              </p>
              <button type="button">Learn More</button>
              <hr />
            </div>
          </div>
        </div>
        {/* body */}
        <div className="down">
          <div className="parent">
            <div className="hoto">
              <img src={fdoctor} alt={"female doctor"} />
            </div>
            <div className="hospital">
              <h1>Why Patients Choose Our Hospital?</h1>
              <div className="why">
                <img src={check} alt={"check"} />
                <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
              </div>
              <div className="why">
                <img src={check} alt={"check"} />
                <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
              </div>
              <div className="why">
                <img src={check} alt={"check"} />
                <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
              </div>
              <div className="why">
                <img src={check} alt={"check"} />
                <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
              </div>
              <div className="why">
                <img src={check} alt={"check"} />
                <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
              </div>
              <div className="why">
                <img src={check} alt={"check"} />
                <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
              </div>
              <div className="why">
                <img src={check} alt={"check"} />
                <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* story vision/mission */}
      <div className="story-body">
        <div className="left">
          <div className="story-mobile">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Cras viverra</p>
            <p>vulputate scelerisque sem. Nullam lectus mauris malesuada</p>
<p>rhoncus. Risus quis penatibus sodales cursus. Velit massa</p>
<p>dolor leo fermentia amet sit mattis. Sit praesent imperdiet</p>
<p> pretium enim ut bibendum in dolor.</p>
<button type="submit">Learn More</button>
          </div>
          <div className="story-laptop">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Cras viverra vulputate
              <br />
              scelerisque sem. Nullam lectus mauris malesuada rhoncus. Risus
              <br /> quis penatibus sodales cursus. Velit massa dolor leo
              fermentia amet <br /> sit mattis. Sit praesent imperdiet pretium
              enim ut bibendum in dolor. <br />
              Integer arcu cursus morbi mauris posuere. Risus pulvinar et nulla
              in <br />
              dignissim lacus suscipit maecenas luctus. Non orci ornare nulla ut
              <br />
              sit gravida dui fermentum sed. Semper pharetra urna pretium massa
              ut <br />
              fermentum etiam amet. Elementum a sollicitudin viverra tempus a mi
              <br />
              nibh aliquam nisl.
            </p>
            <button type="submit">Learn More</button>
          </div>
          
        </div>

        <div className="right">
          <div className="vission-mobile">
            <h1>Our Vission</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Velit massa dolor</p>
            <p>leo fermentia amet sit mattis. Sit praesent imperdiet pretium</p>
            <p> enim ut bibendum in.</p>
          </div>

          <div className="mission-mobile">
            <h1> Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Velit massa dolor</p>
            <p>leo fermentia amet sit mattis. Sit praesent imperdiet pretium</p>
            <p> enim ut bibendum in.</p>
          </div>

          <div className="vission-laptop">
            <h1>Our Vission</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur. <br /> Velit massa dolor
              leo fermentia amet sit <br /> mattis. Sit praesent imperdiet
              pretium <br /> enim ut bibendum in.
            </p>
          </div>
          <div className="mission-laptop">
            <h1>Mission</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur. <br /> Velit massa dolor
              leo fermentia amet sit <br /> mattis. Sit praesent imperdiet
              pretium <br /> enim ut bibendum in.
            </p>
          </div>
        </div>
      </div>
      {/* boxes */}
      <div className="parent-boxes">
<div className="boxes">
<div className="one">
  <h2>98%</h2>
  <p>Satisfied Patients</p>
  </div>
  <div className="two">
  <h2>15  +</h2>
  <p>Merit Awards</p>
  </div>
  <div className="one">
  <h2>98%</h2>
  <p>Satisfied Patients</p>
  </div>
  <div className="one">
  <h2>98%</h2>
  <p>Satisfied Patients</p>
  </div>
</div>

<div>
<img src={covi} alt={"covi"} />
</div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default About;

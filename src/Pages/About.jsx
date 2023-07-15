import React from "react";
import "../Styles/about.css";
import Header from "../Components/Header";
import fdoctor from "../assets/fdoctor.png";
import lab from "../assets/lab.png";
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
                Lorem ipsum dolor sit amet consectetur. Sed nec ornare
                vitae. Morbi pellentesque ultricis id faucibus aliquam sed sit
                sed. Proiermentum mauris mi aliquet sed vel. Quam id secongue
                diam tincidunt enim.
              </p>
              <button type="button">Learn More</button>
              <hr />
            </div>
            <div className="commited">
              <h6>About Us</h6>
              <h1>
                We Are Thoroughly
                Committed To <br /> Making Your Health Our Priority
              </h1>
            </div>
            <div className="second">
            <p>
                Lorem ipsum dolor sit amet consectetur. Sed nec ornare vitae <br /> 
                duis leo lacus pellentesque sit. Turpis amet ut tortor
                scelerisque <br /> risus adipiscing et non. Interdum ac integer pretium
                aliquam auc. <br />Tristique aliquet nisl odio risus diam. Morbi
                pellentesque ultricis <br /> id faucibus aliquam sed sit sed. Proin
                fermentum mauris mi <br /> aliquet sed vel. Quam id sed congue diam
                tincidunt enim.
              </p>
              <button type="button">Learn More</button>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

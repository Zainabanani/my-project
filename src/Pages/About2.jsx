import React from 'react'
import lab from "../assets/lab.png";
import fdoctor from "../assets/fdoctor.png";
import check from "../assets/check.png";
import "../Styles/about2.css"

const About2 = () => {
  return (
    <>  
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
    </>
  )
}

export default About2
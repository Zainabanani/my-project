import React from 'react'
import covi from "../assets/covi.png";
import "../Styles/about4.css"

const About4 = () => {
  return (
    <div>
        <div className="d-block d-lg-flex px-2 justify-content-between align-items-center w-100 py-3">
        <div className="d-none d-lg-block " style={{ width: "450px" }}>
          <div className="one d-flex justify-content-between pb-3">
            <div className="d-flex justify-content-center align-items-center blue">
              <div>
                <h2>98%</h2>
                <p>Satisfied Patients</p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center blue">
              <div>
                <h2>15 +</h2>
                <p>Merit Awards</p>
              </div>
            </div>
          </div>
          <div className="one d-flex justify-content-between">
            <div className="d-flex justify-content-center align-items-center  blue">
              <div>
                <h2>98%</h2>
                <p>Satisfied Patients</p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center blue">
              <div>
                <h2>98%</h2>
                <p>Satisfied Patients</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="covi">
          <img src={covi} alt="covi" />
        </div> */}
      </div>
    </div>
  )
}

export default About4
import React from "react";
import doctor from "../assets/doctor.png";
import "../Styles/body.css";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="mainbody">
      <div className="maincard">
        <div>
        
          <img src={doctor} alt={"doctor"} />
        </div>
        <div className="quick-access">
          <h2>
            Get Access to Quick And <br />
            Confidential Medical Services
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur. Ante est ulmcorper <br />
          nullam lacus tristique diam. Nulla sed rhoncus cras neque <br />
          pulvinar. Pretium et adipiscing sociis commodo sit sem. Ac <br />
          fusce vel facilisis pellentesque aliquam elentum. Massa <br />
          morbi phasellus viverra nisi id.</p>

          <button type="submit">Get Started</button>
        </div>
      </div>
      <div className="blue-box">
       <div className="raj">
       <h3>Dr. Raj Spencer</h3>
        <p>consultant</p>
        <Link to='/appointment'>
        <button>Book Appointment</button>
        </Link>
      
       </div>

      </div>
    </div>
  );
};

export default Body;

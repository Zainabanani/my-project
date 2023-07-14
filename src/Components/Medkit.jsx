import React from "react";
import "../Styles/medkit.css";
import zuciya from "../assets/heartbeat.png";
import ambulance from "../assets/ambulance.png";
import doctor from "../assets/bebi.png";
import clock from "../assets/clock.png";
import aisha from "../assets/aisha.png";
import ajay from "../assets/ajay.png"
import jay from "../assets/jay.png"
import stella from "../assets/stella.png"
import call from "../assets/call.png"
import chat from "../assets/chat.png"
import live from "../assets/live.png"

const Medkit = () => {
  return (
    <div className="parent">
      <div className="specialities">
        <h1>MEDKIT SPECIALITIES</h1>
        <img src={zuciya} alt={"heartbeat"} />
      </div>
      <div className="fastest-ambulance">
        <div>
          <img src={ambulance} alt={"ambulance"} />
          <h2>FASTEST AMBULANCE</h2>
          <p>
            We provide you with experienced <br />
            and highly professional doctors <br /> with the aim of providing{" "}
            <br />
            exceptional care.
          </p>
        </div>

        <div>
          <img src={doctor} alt={"doctor"} />
          <h2>PROFESSIONAL DOCTORS</h2>
          <p>
            We provide you with experienced <br /> and highly professional
            doctors <br /> with the aim of providing <br />
            exceptional care.
          </p>
        </div>

        <div>
          <img src={clock} alt={"clock logo"} />
          <h2>BEST SERVICES</h2>
          <p>
            We are committed to providing <br /> healthcare services with <br />
            consideration of patients satisfaction. <br /> Our patients come
            first!
          </p>
        </div>
      </div>
      <div className="specialities">
        <h1>MEET OUR DOCTORS</h1>
        <img src={zuciya} alt={"heartbeat"} />
      </div>

      <div className="dokita">
        <div className="doctor">
          <div> 
            <img src={jay} alt={"jay"} className="hoto" />
          </div>
          <div>
            <h3>Dr Jay Stephen</h3>
            <p>Optometrist</p>
          </div>
          <div className="icons">
            <img src={chat} alt={"chat"} />
            <img src={call} alt={"call"}/>
            <img src={live} alt={"live"} />
          </div>
        </div>
        <div className="doctor dangata">
          <div>
            <img src={ajay} alt={"ajay"} className="hoto" />
          </div>
          <div>
            <h3>Dr Ajay Verma</h3>
            <p>Gynaecologist</p>
          </div>
          <div className="icons">
            <img src={chat} alt={"chat"} />
            <img src={call} alt={"call"}/>
            <img src={live} alt={"live"} />
          </div>
        </div>
        <div className="doctor dangata">
          <div>
            <img src={aisha} alt={"aisha"} className="hoto"/>
          </div>
          <div>
            <h3>Dr Aisha Joe</h3>
            <p>Paediatrician</p>
          </div>
          <div className="icons">
            <img src={chat} alt={"chat"} />
            <img src={call} alt={"call"}/>
            <img src={live} alt={"live"} />
          </div>
        </div>
        <div className="doctor dangata">
          <div>
            <img src={stella} alt={"stella"} className="hoto"/>
          </div>
          <div>
            <h3>Dr Stella Marie</h3>
            <p>General Physician</p>
          </div>
          <div className="icons">
            <img src={chat} alt={"chat"} />
            <img src={call} alt={"call"}/>
            <img src={live} alt={"live"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medkit;

import React from 'react'
import "../Styles/appoint.css";
import logo from "../assets/Logo.png";
import nicedoc from "../assets/nicedoc.png";
import lines from "../assets/Lines.png";
import Footer from "../Components/Footer"

const Appointment = () => {
  return (
    <div className='appointment'>
        <div>
        <div className='headers'>
        <nav>
            <div className='logo'>
                <img src={logo} alt={"logo"} />
            </div>

            <div className='maballin'>
               <p>My Appointments</p>
                <button className='signup'>Log Out</button>
            </div>
        </nav>
    </div>
  {/*Make an appoin */}
  <div className='an-ap'>
  <div className='make'>
    <div className='shif'>
    <div>
    <h1>MAKE AN APPOINTMENT</h1>
</div>
<div>
    <img src={lines} alt={"lines"} className='lines' />
</div>
<div>
    <input type="button" placeholder='first Name*' />
</div>
<div>
    <input type="button" placeholder='Last Name*' />
</div>
<div>
    <input type="button" placeholder='Phone no*' />
</div>
<div>
    <input type="button" placeholder='Appointment Date*' />
</div>
<div>
    <button>REQUEST</button>
</div>
    </div>


  </div>
  <div className='foto'>
    <img src={nicedoc} alt={"nicedoctor"} />
  </div>
  </div>
  
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Appointment
import React from 'react'
import "../Styles/login.css";
import likita from "../assets/likita.png";
import Logo from "../assets/Logo.png";
import facebook from "../assets/login/facebook.png"
import email from "../assets/login/email.png"
import linked from "../assets/login/linked.png"

const Login = () => {
  return (
    <div className='login'>
<div className='left'>
    <div>
        <img src={Logo} alt={"logo"} className='logo'/>
    </div>
    <div>
      <h1>Log In to Medkit</h1>
    </div>
    <div className='hoto'>
      <img src={facebook} alt={"facebook"} />
      <img src={email} alt={"email"} />
      <img src={linked} alt={"linked"} />
    </div>
    <div>
      <p>Or use your email address:</p>
    </div>
    <div>
      <p>Email</p>
      <input type="text" placeholder='elo@techstudio.com'/>
    </div>
    <div>
    <p>Password</p>
      <input type="text" placeholder='Min 8 Characters'/>
    </div>

    <div>
    <p><span>Forgot your password</span></p>
    </div>
 <div>
  <button type='submit'>Log in</button>
 </div>

 <div className='account'>
  <p>Don't have an account yet?</p>
  <p>Sign Up</p>
 </div>
</div>
<div className='right'>
<img src={likita} alt={"likita"} />
</div>
    </div>
  )
}

export default Login
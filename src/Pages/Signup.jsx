import React, {useState} from 'react'
import "../Styles/signup.css";
import doki from "../assets/signup/doki.png";
import Logo from "../assets/Logo.png";
import facebook from "../assets/login/facebook.png"
import email from "../assets/login/email.png"
import linked from "../assets/login/linked.png"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [person, setPerson] = useState({fullname: (''), email: (''), password: (''), })
  const [errorFullname, setErrorFullname] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [formError, setFormError] = useState('')
  const redirect = useNavigate()

  const handleChange = (e)=>{
    setPerson ({...person, [e.target.name]: e.target.value})
  }

const handleSubmit = (e)=>{
  e.preventDefault
  if(person){
    redirect('/')
  }else{
    setFormError('All inputs has to be filled')
  }
  console.log(person);
  setPerson({fullname: (''), email: (''), password: ('')})
}
// if (!person.email.includes('@')){
//   setErrorEmail ('This is not a valid email')
  
// }

// if (person.password.length < 5){
//   setErrorPassword ('Password is weak')
// }
  return (
    <div className='login'>
<div className='left'>
    <div>
        <img src={Logo} alt={"logo"} className='logo'/>
    </div>
    <div>
      <h1>Create an Account</h1>
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
      <p>Full Name</p>
      <input type="text" placeholder='Aisha Oyelola' name='fullname' value={person.fullname} onChange={handleChange}/>
    </div>
    <div>
      <p>Email</p>
      <input type="text" placeholder='elo@techstudio.com' name='email' value={person.email} onChange={handleChange}/>
    </div>
    <div>
    <p>Password</p>
      <input type="password" placeholder='Min 8 Characters' name='password' value={person.password} onChange={handleChange}/>
    </div>

    <div>
    <p><span>Forgot your password</span></p>
    </div>
 <div>
  <button type='submit' onClick={handleSubmit}>Log in</button>
 </div>
<p>{formError}</p>
 <div className='account'>
  <p>Already a user?</p>
  <Link to="/login">
  <p>Login</p>
  </Link>
 
 </div>
</div>
<div className='right'>
<img src={doki} alt={"likita"} />
</div>
    </div>
  )
}

export default Login
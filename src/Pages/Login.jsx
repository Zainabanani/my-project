import React, {useState} from 'react'
import "../Styles/login.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import likita from "../assets/likita.png";
import Logo from "../assets/Logo.png";
import facebook from "../assets/login/facebook.png"
import email from "../assets/login/email.png"
import linked from "../assets/login/linked.png"


const Login = () => {
const [person, setPerson] = useState({email: (''), password: ("")})
const [errorEmail, setErrorEmail] = useState ('')
const [errorPassword, setErrorPassword] = useState ('')
const redirect = useNavigate()
const handleChange = (e)=>{
setPerson ({...person, [e.target.name]: e.target.value})
}

const handleSubmit = (e)=>{
e.preventDefault
if(person){
  redirect('/')
}else{
  setErrorEmail('Email can not be empty')
}
console.log(person);
setPerson ({email: (''), password: ("")})
}
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

 <div className='account'>
  <p>Don't have an account yet?</p>
  <Link to="/signup">
  <p>Sign Up</p>
  </Link>
 </div>
</div>
<div className='right'>
<img src={likita} alt={"likita"} />
</div>
    </div>
  )
}

export default Login
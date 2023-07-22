import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Body from './Components/Body'
import Covid from './Components/Covid'
import Medkit from './Components/Medkit'
import Footer from './Components/Footer'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Appointment from './Pages/Appointment'
import Home from './Pages/Home'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'



function App() {


  return (
    <>
       <Router>
        <Routes>
        <Route path= '/' element = {<Home />} />
<Route path= '/home'element= { <Navigate to = '/' />}  />
<Route path = '/about' element= {<About />} />
<Route path= '/appointment' element = {<Appointment />} />
<Route path= '/contact' element = {<Contact />} />
<Route path= '/services' element = {<Services />} />
<Route path= '/signup' element = {<Signup />} />
<Route path= '/login' element = {<Login />} />
<Route path = '*' element= {<Error />} />
        </Routes>
       </Router>
    </>
    


      
  )
}

export default App



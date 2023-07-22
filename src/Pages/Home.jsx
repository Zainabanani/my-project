import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Covid from '../Components/Covid'
import Body from '../Components/Body'
import Medkit from '../Components/Medkit'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <Header />
        <Body />
        <Covid />
        <Medkit/>
        <Footer />
        
        
        

    </div>
  )
}

export default Home

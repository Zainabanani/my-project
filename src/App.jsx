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


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <About />
    </>
    


      
  )
}

export default App

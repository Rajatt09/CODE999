import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Part from './Part/Part'
import Navbar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import HomePage from './Components/HomePage/HomePage'
import CountdownTimer from './Part/CountdownTimer'
import About from './Components/About/About'
import Smoke from './Part/Smoke'
import Speaker from './Components/Speakers/Speaker'
import Card1 from './Part/Card1'
import Timeline from './Components/TimeLine/Timeline'

function App() {


  return (
   <>

 

   {/* <Part /> */}
   <HomePage />
   {/* <About /> */}
   {/* <Smoke /> */}
   {/* <Speaker /> */}
   {/* <Timeline /> */}
   {/* <Card1 /> */}
   <Navbar />
   <Footer />
   </>
  )
}

export default App




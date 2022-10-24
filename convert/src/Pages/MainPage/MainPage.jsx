import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Convert from '../../Components/Convert/Convert'
import Particle from '../../Components/Particles/Particle'

const MainPage = () => {
  return (
    <div>
      <Particle/>
      <Navbar/>
      <Convert/>
      <Footer/>
    </div>
  )
}

export default MainPage
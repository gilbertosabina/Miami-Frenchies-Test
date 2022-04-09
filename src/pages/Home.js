import React from 'react'
import Hero from '../components/Hero/Hero'
import Team from '../components/Team/Team'
import Roadmap from '../components/Roadmap/Roadmap'
import About from '../components/About/About'
import MobileSlider from '../components/MobileSlider/MobileSlider'
import Liston from '../components/Liston/Liston'

const Home = () => {

  return (
    <div>
        <Hero/>
        <Liston/>
        <MobileSlider/>
        <About/>
        <Roadmap/>
        <Team/>
    </div>
  )
}

export default Home;
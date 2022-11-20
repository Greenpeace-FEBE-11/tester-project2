import React from 'react'
import AboutUs from '../Components/HomePage/AboutUs'
import ContactUs from '../Components/HomePage/ContactUs'
import Dampak from '../Components/HomePage/Dampak'
import HomePageBG from '../Components/HomePage/HomePageBG'
import PenanggulanganSinopsis from '../Components/HomePage/PenanggulanganSinopsis'


function HomePage() {
  return (
    <>
        <HomePageBG/>
        <PenanggulanganSinopsis/>
        <AboutUs/>
        <ContactUs/>
        <Dampak/>
    </>    
  )
}

export default HomePage
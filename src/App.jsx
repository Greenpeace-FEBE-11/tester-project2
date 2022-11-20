import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './css/PenanggulanganSinopsis.css'

import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import PenanggulanganPage from './Pages/PenanggulanganPage'

import './css/readmore.css'
import Testing from './Components/Testing'
// import LoginPage from './Pages/LoginPage'
// import RegisterPage from './pages/RegisterPage'
// import './css/style-penanggulangan.css'

function App() {

  return (
    <>
      <Navbar/>
      {/* <Testing/> */}
      <Routes>
      {/* <Route path="/" element={<LoginPage/>}/> */}
        <Route path="/" element={<HomePage/>} />
        <Route path='/penanggulangan' element={<PenanggulanganPage/>}/>
        {/* <Route path="/register" element={<RegisterPage/>}/> */}
      </Routes>
      <Footer/>
    </>
  
    )
}

export default App

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/home'
import Programs from './components/programs'
import About from './components/About'
import Gallery from './components/gallery'
import Testimonials from './components/testimonials'
import Contact from './components/contact'
import Footer from './components/footer'
import Vdo from './components/vdo'

const App = () => {

  const [play,setPlay]=useState(false);
  return (
    <>
      <Navbar/>
      <Home/>
      <Programs/>
      <About setPlay={setPlay}/>
      <Gallery/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      <Vdo play={play} setPlay={setPlay}/>
    </>
  )
}

export default App

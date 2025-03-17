import React from 'react'
import { Link, Element } from 'react-scroll';
import Bg from '../assets/bg.jpg'

const home = () => {
  return (
    <div className='relative h-screen w-screen overflow-hidden home'>
      <img src={Bg} alt="bg" className='brightness-40 w-screen h-screen object-cover bg-center ' />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900 to-purple-900 opacity-50"></div>
      <div className='absolute inset-0 flex flex-col space-y-3 justify-center items-center'>
        <h1 className='cursor-default text-white text-5xl font-bold text-center'>Welcome to UniHive</h1>
        <p className='cursor-default text-white text-center text-lg'>A place to learn and grow</p>
        <Link to='about' smooth={true} offset={-150} duration={500}><button className='bg-white text-black px-5 py-3 rounded-full cursor-pointer transform hover:scale-110 transition-all duration-300'>Learn More</button></Link>
      </div>
    </div>
  )
}

export default home

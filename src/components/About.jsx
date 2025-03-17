import React from 'react'
import aboutA from '../assets/aboutA.png'
import aboutB from '../assets/aboutB.jpg'

const About = ({setPlay}) => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-12 w-screen bg-white py-20 px-10 about'>
        <div onClick={()=>setPlay(true)}  className='relative w-85 h-80 flex items-center  justify-center group'>
            <img src={aboutB} alt="" className='w-full h-full brightness-75 object-cover object-center rounded-2xl transition-all duration-300 ease-in-out group-hover:brightness-50'/>
            <img src={aboutA} alt="" className='absolute h-15 object-cover object-center brightness-150'/>
        </div>
        <div className='flex flex-col gap-5 max-w-lg cursor-default text-wrap'>
            <h1 className='text-4xl font-bold text-red-700'>Shaping Minds, Building Futures</h1>
            <p className='text-blue-950'>At UniHive, we believe in the power of education to transform lives. 
                As a hub of innovation and learning, our institution fosters academic excellence, 
                hands-on experience, and a vibrant community that prepares students for a dynamic future. 
                Join us in creating a buzzing hive of knowledge and growth!</p>
        </div>
    </div>
  )
}

export default About

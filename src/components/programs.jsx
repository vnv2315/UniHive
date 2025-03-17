import React from 'react'
import grad from '../assets/grad.jpeg'
import phd from '../assets/phd.avif'
import post from '../assets/post.avif'
import pphd from '../assets/pphd.png'
import graduation from '../assets/graduation.png'
import pgrad from '../assets/pgrad.png'

const Programs = () => {
  return (
    <div className='relative w-screen overflow-hidden flex flex-col justify-center bg-white programs'>
        
        <div className='pt-15 text-4xl text-center text-blue-900 font-bold'>Programs we offer</div>
        <div className='text-3xl text-center text-blue-800 font-bold'>. . .</div>
        
        <div className='flex flex-wrap items-center justify-center p-12 gap-7.5'>

            {/* Under-Graduate */}
            <div className="relative w-70 h-70 rounded-2xl overflow-hidden group">
                <img className="w-full h-full object-cover object-center rounded-2xl" src={grad} alt="ug" />
                <div className="absolute inset-0 bg-red-950 opacity-70 lg:opacity-0 lg:group-hover:opacity-70 transition-opacity flex flex-col items-center justify-center">
                    <h1 className="text-white text-2xl transform translate-y-0 lg:translate-y-10 lg:group-hover:translate-y-0 transition-transform duration-500">Under-Graduate</h1>
                    <img src={graduation} alt="grad" className='w-15 transform translate-y-0 lg:translate-y-10 lg:group-hover:translate-y-0 transition-transform duration-500'/>            
                </div>
            </div>

            {/* Post-Graduate */}
            <div className="relative w-70 h-70 rounded-2xl overflow-hidden group">
                <img className='w-full h-full object-cover object-center rounded-2xl' src={post} alt="pg" />
                <div className="absolute inset-0 bg-pink-950 opacity-70 lg:opacity-0 lg:group-hover:opacity-70 transition-opacity flex flex-col items-center justify-center">
                    <h1 className="text-white text-2xl transform translate-y-0 lg:translate-y-10 lg:group-hover:translate-y-0 transition-transform duration-500">Post-Graduate</h1>
                    <img src={pgrad} alt="grad" className='w-15 transform translate-y-0 lg:translate-y-10 lg:group-hover:translate-y-0 transition-transform duration-500'/>            
                </div>
            </div>

            {/* PhD */}
            <div className="relative w-70 h-70 rounded-2xl overflow-hidden group">
                <img className='w-full h-full object-cover object-center rounded-2xl' src={phd} alt="phd" />
                <div className=" w-full h-full absolute inset-0 bg-purple-950 opacity-70 lg:opacity-0 lg:group-hover:opacity-70 transition-opacity flex flex-col items-center justify-center">
                    <h1 className="text-white text-2xl transform translate-y-0 lg:translate-y-10 lg:group-hover:translate-y-0 transition-transform duration-500">PhD</h1>
                    <img src={pphd} alt="grad" className='w-15 transform translate-y-0 lg:translate-y-10 lg:group-hover:translate-y-0 transition-transform duration-500'/>            
                </div>
            </div>

        </div>
    </div>
  )
}

export default Programs;

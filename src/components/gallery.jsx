import React from 'react'
import g1 from '../assets/g1.jpg'
import g2 from '../assets/g2.jpg'
import g3 from '../assets/g3.jpg'
import g4 from '../assets/g4.jpg'
import g5 from '../assets/g5.jpg'
import g6 from '../assets/g6.jpg'
import g7 from '../assets/g7.jpg'
import g8 from '../assets/g8.jpeg'
import g9 from '../assets/g9.jpg'
import g10 from '../assets/g10.webp'

const Gallery = () => {
  return (
    <div className="flex flex-col justify-center items-center text-blue-900 mt-5 pb-12 px-5 gallery">
      <div className="text-center font-bold">
        <h5>Gallery</h5>
        <h1 className="text-2xl">Campus Photos</h1>
      </div>
      <div className="w-[74.5%] mt-8 overflow-y-scroll md:overflow-x-scroll scrollbar-custom">
        <ul className="flex gap-5 flex-col h-129 md:h-60 md:w-[1000px] md:flex-row justify-center items-center">
          {[g1, g2, g3, g4, g5, g6, g7, g8, g9, g10].map((image, index) => (
            <li key={index} className="w-60 h-60 rounded-2xl overflow-hidden flex-shrink-0">
              <img 
                src={image} 
                alt="gallery image" 
                className="w-full h-full object-cover object-center rounded-2xl transform hover:scale-105 transition-all duration-300" 
              />
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-blue-900 px-5 py-2 rounded-full text-white transform hover:scale-105 transition-all duration-300 mt-5">
        see more
      </button>
    </div>
  )
}

export default Gallery;

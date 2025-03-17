import React, { useEffect, useRef, useState } from 'react'
import left from '../assets/left.png'
import right from '../assets/right.png'
import p1 from '../assets/p1.jpeg'
import p2 from '../assets/p2.avif'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpeg'
import p5 from '../assets/p6.webp'
import p6 from '../assets/p5.jpeg'
import p7 from '../assets/p7.jpg'
import p8 from '../assets/p8.jpeg'

const Testimonials = () => {

  const datas=[
    {image:p1,name:'Shivam',location:'Delhi, India',review:'UniHive has completely changed my approach to learning. The courses are structured and interactive, making complex topics easier to grasp.'},
    {image:p2,name:'Sophia Patel',location:'New York, USA',review:'Initially skeptical about online learning, I found UniHive to be transformative. The practical lessons have propelled my career forward!'},
    {image:p3,name:'Rohan Das',location:'Bangalore, India',review:'The hands-on projects and community at UniHive have empowered me to pursue my tech career with confidence.'},
    {image:p4,name:'Emma Williams',location:'London, UK',review:'UniHive stands out with its practical courses and personalized guidance.'},
    {image:p5,name:'Aarav Singh',location:'Mumbai, India',review:`UniHive's dynamic approach has reshaped my educational journey and made learning both fun and effective!`},
    {image:p6,name:'Maya Chen',location:'San Francisco, USA',review:'The interactive modules and supportive instructors at UniHive made learning enjoyable.'},
    {image:p7,name:'Carlos Mendez',location:'Madrid, Spain',review:'The practical lessons at UniHive have been invaluable in preparing me for a career in tech.'},
    {image:p8,name:'Olivia Brown',location:'Toronto, Canada',review:'My journey at UniHive has been transformative with real-time feedback and hands-on projects.'}]


  const [page, setPage] = useState(0);
  const totalCards = 8;
  // Number of cards visible per page is 2
  const cardsPerPage = 2;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const slider = useRef();
  const leftArrow = useRef();
  const rightArrow = useRef();

  useEffect(() => {
    if (page === 0) {
      leftArrow.current.style.display = 'none';
    } else {
      leftArrow.current.style.display = 'block';
    }
    if (page === totalPages - 1) {
      rightArrow.current.style.display = 'none';
    } else {
      rightArrow.current.style.display = 'block';
    }
    slider.current.style.transform = `translateX(-${page * 100}%)`;
  }, [page, totalPages]);

  const slideLeft = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const slideRight = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };


  return (
    <div className='flex flex-col justify-center items-center my-10 text-red-800 testimonial h-auto w-screen'>
      <div className='text-center font-bold text-3xl'>
        <h5>TESTIMONIALS</h5>
        <h1>---</h1>
      </div>
      <div className='relative w-full md:w-[90%] lg:w-[85%] px-5 flex justify-center items-center h-[auto]'>

        {/* Left  */}
    
        <div ref={leftArrow} className='absolute left-5 top-1/2 transform -translate-y-1/2 z-5 w-10 h-10 rounded-full bg-blue-800 opacity-40 hover:scale-110 hover:opacity-75 duration-300 select-none cursor-pointer'>
          <img onClick={slideLeft} src={left} alt="left arrow" className='w-full h-full object-cover' /></div>

        {/* Right  */}
        <div ref={rightArrow} className='absolute right-5 top-1/2 transform -translate-y-1/2 z-5 w-10 h-10 rounded-full bg-blue-800 opacity-40 hover:scale-110 hover:opacity-75 duration-300 select-none cursor-pointer'>
          <img onClick={slideRight} src={right} alt="right arrow" className='w-full h-full object-cover' /></div>
  

        {/*  Container */}
        <div className='overflow-hidden w-full md:w-[80%]  h-[auto]'>
          <ul ref={slider} className='  flex gap-5 transition-transform duration-500 ease-in-out h-[auto]'>

            {datas.map((data,index)=>(
              <li key={index} className='p-2 w-[45%] md:w-[46.5%] lg:w-[47.5%] flex-shrink-0 '>
              <div className='flex flex-col gap-5 p-5 bg-white rounded-2xl shadow-lg h-[auto] md:h-[250px]'>
                <div className='flex items-center gap-2 flex-col md:gap-5 md:flex-row'> 
                  <img src={data.image} alt="Shivam" className='w-10 rounded-full border-blue-800 border-2'/>
                  <div className='flex flex-col text-wrap'>
                    <span className='text-lg font-bold text-blue-900'>{data.name}</span>
                    <span className=' font-normal'>{data.location}</span>
                  </div>
                </div>
                <p className='text-sm text-gray-800'>{data.review}</p>
              </div>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;

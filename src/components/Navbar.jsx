import React, { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll';

import Edu from '../assets/edu.png';
import menu from '../assets/menu.png';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuBar, setMenuBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY>500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (<>
    <nav className={` flex flex-wrap text-white justify-between lg:justify-around items-center px-6 py-4 fixed w-full z-10 transition-bg duration-700 
        ${scroll ? 'bg-blue-950 text-white ' : 'bg-transparent'}`}>
      <div className="flex items-center gap-3 text-3xl font-semibold cursor-default">
        <img src={Edu} alt="Educode Logo" className="w-12" />
        <span>UniHive</span>
      </div>
      <span className=' lg:hidden'><img onClick={()=>setMenuBar(true)} className='w-12' src={menu} alt="menu"/></span>

      <ul className=" hidden lg:flex flex-wrap items-center gap-10 text-lg font-medium select-none cursor-default">
        <li className=" hover:text-blue-100"><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li className=" hover:text-blue-100"><Link to='programs' smooth={true} offset={-150} duration={500}>Programs</Link></li>
        <li className=" hover:text-blue-100"><Link to='gallery' smooth={true} offset={-200} duration={500}>Gallery</Link></li>
        <li className=" hover:text-blue-100"><Link to='testimonial' smooth={true} offset={-200} duration={500}>Testimonials</Link></li>
        <Link className=" bg-amber-50 text-black px-4 py-3 rounded-full text-sm font-semibold hover:bg-amber-100"
          to='contact' smooth={true} offset={-150} duration={500}>
          Contact Us
        </Link>
      </ul>
    </nav>
    
    <ul className={` lg:hidden flex flex-col gap-15 text-2xl text-white bg-blue-950 w-auto p-10 right-0 top-0 h-screen fixed z-10 transition-transform duration-700 ease-in-out transform ${menuBar ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-start pt-4">
        <img src={menu} alt="menu" className="w-12 cursor-pointer" onClick={() => setMenuBar(false)} />
      </div>
        <li className="flex justify-start hover:text-blue-100"><Link to='home' smooth={true} offset={0} duration={500} onClick={() => setMenuBar(false)}>Home</Link></li>
        <li className="flex justify-start hover:text-blue-100"><Link to='programs' smooth={true} offset={-150} duration={500} onClick={() => setMenuBar(false)}>Programs</Link></li>
        <li className="flex justify-start hover:text-blue-100"><Link to='gallery' smooth={true} offset={-200} duration={500} onClick={() => setMenuBar(false)}>Gallery</Link></li>
        <li className="flex justify-start hover:text-blue-100"><Link to='testimonial' smooth={true} offset={-200} duration={500} onClick={() => setMenuBar(false)}>Testimonials</Link></li>
        <li className="flex justify-start hover:text-blue-100"><Link to='contact' smooth={true} offset={-200} duration={500} onClick={() => setMenuBar(false)}>Contact Us</Link></li>
     </ul>
    </>
  );
};

export default Navbar;

"use client"
import Link from 'next/link'
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="w-0 sm:w-2/12">
      <div className="">{
        toggle?
        <FaTimes onClick={()=>{settoggle(!toggle)}} className='sm:hidden flex absolute top-3 left-5 text-white text-2xl z-20'/>:
        <FaBars onClick={()=>{settoggle(!toggle)}} className='sm:hidden flex absolute top-3 left-5 text-black text-2xl' />
        }
      </div>
      <h1 className={toggle?'font-bold sm:font-medium text-xl sm:text-2xl absolute top-3 sm:left-8 right-8 w-fit sm:text-white text-white z-20':'font-bold sm:font-medium text-xl sm:text-2xl absolute top-3 sm:left-8 right-8 w-fit sm:text-white text-black'}>LOGO</h1>
      <div className={toggle?'w-screen sm:w-full h-screen bg-[#212832] text-white sm:flex flex relative z-10':'w-screen sm:w-full h-screen bg-[#212832] text-white sm:flex hidden'}>
        <ul onClick={()=>{settoggle(!toggle)}} className='w-full mt-32 font-semibold'>
          <Link href="/"><li className='my-9 ml-1 mr-3 pl-5 py-1 bg-[#2f2e40] rounded-xl text-sm text-[#bbbbc8]'>HOME</li></Link>
          <Link href="services"><li className='my-9 ml-1 mr-3 pl-5 py-1 bg-[#2f2e40] rounded-xl text-sm text-[#bbbbc8]'>Services</li></Link>
          <Link href="about"><li className='my-9 ml-1 mr-3 pl-5 py-1 bg-[#2f2e40] rounded-xl text-sm text-[#bbbbc8]'>About</li></Link>
          <Link href="contact"><li className='my-9 ml-1 mr-3 pl-5 py-1 bg-[#2f2e40] rounded-xl text-sm text-[#bbbbc8]'>Contact</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

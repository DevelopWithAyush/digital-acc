import Link from 'next/link'
import React from 'react'
import { HiSparkles } from "react-icons/hi2";
import { BorderBeam } from './ui/BorderBeam';

const Navbar = () => {
  return (
      <header className='w-full z-[150]  overflow-x-hidden relative lg:fixed top-0 bg-white bg-opacity-5 backdrop-blur-[25px] border-b border-white border-opacity-10 px-[3%] py-[6px] '>
          <div className=' container mx-auto max-w-[90rem] flex flex-row items-center justify-between '>
              <p className='text-[32px] font-semibold '>logo</p>
              <nav className='hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   items-center justify-center gap-[40px]'>
                  <Link  href="#home" className="text-[20px] capitalize text-gray-300">Home</Link>
                  <Link href="#tech" className="text-[20px] capitalize text-gray-300">tech</Link>
                  <Link href="#services" className="text-[20px] capitalize text-gray-300">services</Link>
                  <Link href="#steps" className="text-[20px] capitalize text-gray-300">Steps</Link>
                  <Link href={"/"} className="text-[20px] capitalize text-gray-300">Testimonial</Link>
                  <Link href={"/"} className="text-[20px] capitalize text-gray-300">blogs</Link>
              </nav>
              <button className='flex relative gap-[10px] flex-shrink-0 items-center rounded-[12px] border border-white border-opacity-20 justify-center py-2 px-6 text-[20px]'
                  style={{
                     


              }}
              >
                  <HiSparkles className='text-yellow-400' /> Contact Us
              </button>
        </div>
      
    </header>
  )
}

export default Navbar

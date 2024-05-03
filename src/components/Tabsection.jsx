import React from 'react'
import { BorderBeam } from './ui/BorderBeam'

const Tabsection = () => {
    return (
      <>
      <div className="z-[100] relative rounded-lg  container max-w-[88rem] mx-auto flex w-full justify-center overflow-hidden ">

         
          
              <img
              src="https://res.cloudinary.com/dpqsatnvt/image/upload/v1714472994/Screenshot_2024-04-30_155826_srfjz2.png"
                  alt="hero-section"
                  className="h-auto w-full  rounded-lg border object-cover  border border-solid border-black border-opacity-5"
              />
          <div className="z-[100] from-1% absolute inset-0 bg-gradient-to-t from-black to-35%" />
          <BorderBeam size={250} duration={8} delay={9} borderWidth={2} />
      </div>
        </>
  )
}

export default Tabsection

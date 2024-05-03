import React from 'react'
import { BorderBeam } from './ui/BorderBeam'


const Services = () => {
  return (
      <section
       
   
      id='services'
        className='scroll-smooth relative  grid grid-cols-12 container mx-auto max-w-[88rem] border border-white border-opacity-10  md:border-none md:bg-white md:bg-opacity-5 backdrop-blur-[25px] rounded-[20px] py-[24px] px-[18px]  md:py-[33.6px] md:px-[25.2px] xl:py-12 xl:px-9 gap-[10px] md:gap-[14px] xl:gap-5 '>
        <div className='absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#9c40ff] blur-[300px] -z-10 ' />
        <div className='col-span-12 mb-[20px] md:mb-[0px] md:col-span-6  py-[18px] px-[18px] md:py-[33.6px] md:px-[25.2px] xl:py-12 xl:px-9 rounded-[12px] ' >

          <p
           
            className='text-[32px] leading-[32px] md:text-[48px] md:leading-[48px] lg:text-[48px] lg:leading-[48px] xl:text-[56px] xl:leading-[56px]   font-bold'>
            Services <span className='font-medium text-[#797979]'>that we provide to grow your Business.</span>
          </p>
        </div>

        <div className='col-span-12 md:col-span-6 xl:col-span-3 md:bg-transparent md:bg-opacity-100 md:backdrop-blur-0 bg-white bg-opacity-5 backdrop-blur-[250px]  border border-white border-opacity-10 py-[18px] px-[18px] md:py-[33.6px] md:px-[25.2px] xl:py-12 xl:px-9 rounded-[12px] flex flex-col items-start gap-[10px]  md:gap-[14px] xl:gap-5 ' >
          <p className='text-[28px] leading-[28px] font-semibold text-[#fff] ' >Web Development</p>
          <p className='text-[16px] text-[#adadad]'  >{`Crafting bespoke websites tailored to your brand's identity, ensuring seamless functionality and user experience.`}</p>
        </div>

        <div className='col-span-12 md:col-span-6 xl:col-span-3 md:bg-transparent md:bg-opacity-100 md:backdrop-blur-0 bg-white bg-opacity-5 backdrop-blur-[250px]  border border-white border-opacity-10 py-[18px] px-[18px] md:py-[33.6px] md:px-[25.2px] xl:py-12 xl:px-9 rounded-[12px] flex flex-col items-start gap-[10px]  md:gap-[14px] xl:gap-5 ' >
          <p className='text-[28px] leading-[28px] font-semibold text-[#fff] ' >Video Editing</p>
          <p className='text-[16px] text-[#adadad]'  >{`Transforming raw footage into captivating visual stories that engage and inspire your audience.`}</p>
        </div>

        <div className='col-span-12 md:col-span-6 xl:col-span-4 md:bg-transparent md:bg-opacity-100 md:backdrop-blur-0 bg-white bg-opacity-5 backdrop-blur-[250px]  border border-white border-opacity-10 py-[18px] px-[18px] md:py-[33.6px] md:px-[25.2px] xl:py-12 xl:px-9 rounded-[12px] flex flex-col items-start gap-[10px] md:gap-[14px] xl:gap-5  ' >
          <p className='text-[28px] leading-[28px] font-semibold text-[#fff] ' >Content Creation</p>
          <p className='text-[16px] text-[#adadad]'  >Generating compelling and relevant content across various platforms to enhance brand visibility and engagement.</p>
        </div>

        <div className='col-span-12 md:col-span-6 xl:col-span-4 md:bg-transparent md:bg-opacity-100 md:backdrop-blur-0 bg-white bg-opacity-5 backdrop-blur-[250px]  border border-white border-opacity-10 py-[18px] px-[18px] md:py-[33.6px] md:px-[25.2px] xl:py-12 xl:px-9 rounded-[12px] flex flex-col items-start gap-[10px]  md:gap-[14px] xl:gap-5 ' >
          <p className='text-[28px] leading-[28px] font-semibold text-[#fff] ' >SEO </p>
          <p className='text-[16px] text-[#adadad]'  >Optimizing your online presence to rank higher in search engine results, driving organic traffic and boosting visibility.</p>
        </div>

        <div className='col-span-12 md:col-span-6 xl:col-span-4 md:bg-transparent md:bg-opacity-100 md:backdrop-blur-0 bg-white bg-opacity-5 backdrop-blur-[250px]  border border-white border-opacity-10 py-[18px] px-[18px] md:py-[33.6px] md:px-[25.2px] xl:py-12 xl:px-9 rounded-[12px] flex flex-col items-start gap-[10px]  md:gap-[14px] xl:gap-5 ' >
          <p className='text-[28px] leading-[28px] font-semibold text-[#fff] ' >Digital Marketing</p>
          <p className='text-[16px] text-[#adadad]'  >Implementing strategic campaigns across digital channels to increase brand awareness, drive conversions, and maximize ROI.</p>
        </div>
      </section>
  )
}

export default Services


  // < div style = "background: linear-gradient(transparent, #7C72FF 30%); height: 72%" class="home-campaign-git-line rounded mx-auto" ></ >
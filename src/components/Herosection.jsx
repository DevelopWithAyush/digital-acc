import React from "react";
import { Vortex } from "./ui/Vortex";
import { HiSparkles } from "react-icons/hi2";
import { BorderBeam } from "./ui/BorderBeam";
import Image from "next/image";
import AnimatedShinyText from "./ui/ShinyText";

import { FaArrowRight } from "react-icons/fa";
export function Herosection() {
  return (
    <>
      <section id="home" className="w-full flex flex-col items-center pt-[120px] ">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={100}
          baseHue={500}
          className=""
        />
        <div
        className="container mx-auto  max-w-[88rem] flex flex-col items-center justify-start gap-[100px] md:gap-[140px] xl:gap-[200px] pb-[200px]  "
        >
          <div className="relative  flex flex-row items-center justify-center px-4 py-1 gap-10 rounded-[63px] border-[1px] border-solid border-[#51ff51]">
            <AnimatedShinyText className="inline-flex items-center gap-1 justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <HiSparkles className="text-yellow-400" />{" "}
              <span>Grow with Ayush</span>
              <FaArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>

          <div className="w-full relative flex flex-col items-center justify-center gap-[100px] ">
            <div className="w-full flex flex-col items-center justify-center gap-[15px]">
              <h1 className="text-[32px] leading-[32px] md:text-[48px] md:leading-[48px] lg:text-[48px] lg:leading-[48px] xl:text-[56px] xl:leading-[56px] font-bold w-[90%] md:max-w-5xl lg:max-w-[70rem] text-center capitalize ">
                Crafting digital experiences that captivate, innovate, and inspire
                growth.
              </h1>
              <p className="w-[90%] md:max-w-5xl lg:max-w-[70rem] text-[16px] md:text-[20px] md:leading-[20px] text-center leading-[16px] font-normal">
                {` "We offer comprehensive online solutions, including website
            development, SEO, content creation, and social media management, to
            enhance brand visibility and engagement for diverse clients."`}
              </p>
            </div>
            <button
              className="
          overflow-hidden relative  flex flex-row items-center justify-center py-3 px-7 rounded-[13px] text-[20px] border-[1px] border-solid bg-white bg-opacity-5 backdrop-blur-[25px]  border-[#FFF] border-opacity-15"
            >
              Contact us
              <BorderBeam size={100} duration={3} delay={9} />
            </button>
          </div>
          
       </div>
      </section>
    </>
  );
}

const Ellipse = () => {
  return (
    <div className="z-[100] absolute top-[20rem] left-1/2 -translate-x-1/2 translate-y-1/2  w-[979px] h-[257px] rounded-[979px] bg-[#FF7A00] blur-[175px] " />
  );
};

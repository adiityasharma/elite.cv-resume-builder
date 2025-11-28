import React from "react";
import { ResumeTemplates } from "../../resume-templates";

const HeroSection = () => {
  const Temp = ResumeTemplates;

  return (
    <div className="w-full md:min-h-[700px] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between md:gap-5 lg:gap-10 p-4 py-10 sm:py-15 md:py-12 lg:px-15 ">
      {/* Left Section (text) */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <div className="px-4 py-1 text-[12px] sm:text-[13px] rounded-full bg-[#008efa37] text-[#0053fa] font-semibold mb-3">
          <p>Your Story. Your Style. Your Resume.</p>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black md:font-bold bg-linear-to-tl from-indigo-400 via-violet-600 to-cyan-400 bg-clip-text text-transparent leading-tight md:leading-13 lg:leading-17">
          Create a Professional Resume in Minutes. No cost. No catch.
        </h1>

        <p className="text-sm text-neutral-500 font-medium mt-3 max-w-xl">
          Create a standout resume fast — easy steps, modern designs, real
          results.
        </p>

        <button className="cursor-pointer px-5 py-3 rounded-lg bg-linear-to-tl from-indigo-400 via-violet-600 to-cyan-400 hover:from-cyan-400 hover:via-violet-600 hover:to-indigo-400 transition-colors duration-400 ease-in-out text-white font-semibold mt-5 shadow-xl">
          Get Started for Free
        </button>

        <p className="text-[12px] text-neutral-500 mt-1 font-medium">
          No credit card required.
        </p>
      </div>

      {/* Right Section (templates) */}
      <div className="relative md:h-[400px]  lg:h-[500px] w-1/2 hidden md:flex items-center justify-center">
        <div className="absolute md:w-65 lg:w-80 top-0 right-0 md:hover:w-80 lg:hover:w-90 z-20 transition-all duration-500 bg-white shadow-xl rounded-xl p-4 md:p-6 hover:p-4 cursor-pointer overflow-hidden">
          <img
            src={Temp[2].image}
            alt="resume"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>

        <div className="absolute md:w-65 lg:w-80 top-5 right-5 lg:right-15 md:hover:w-80 lg:hover:w-90 hover:z-100 z-15 transition-all duration-500 bg-white shadow-xl rounded-xl p-4 md:p-6 hover:p-4 cursor-pointer overflow-hidden">
          <img
            src={Temp[3].image}
            alt="resume"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        <div className="absolute md:w-65 lg:w-80 top-10 right-10 lg:right-30 md:hover:w-80 lg:hover:w-90 hover:z-100 z-10 transition-all duration-500 bg-white shadow-xl rounded-xl p-4 md:p-6 hover:p-4 cursor-pointer overflow-hidden">
          <img
            src={Temp[4].image}
            alt="resume"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import { ResumeTemplates } from "../../resume-templates";

const HeroSection = () => {
  const Temp = ResumeTemplates;

  return (
    <div className="w-full h-[650px] flex justify-center gap-10 pt-5">
      <div className="w-[50%] h-full flex items-start flex-col justify-center select-none">
        <div className="px-5 py-1 text-[13px] rounded-full bg-[#008efa25] text-[#0053fa] font-semibold mb-2">
          <p>Your Story. Your Style. Your Resume.</p>
        </div>
        <div>
          <h1 className="text-7xl font-bold w-110 bg-linear-to-tl from-indigo-400 via-violet-600 to-cyan-400 bg-clip-text text-transparent leading-17">
            Build a Professional Resume in Minutes.
          </h1>
        </div>
        <div className="w-100 mt-3">
          <h1 className="text-md leading-tight text-neutral-500 font-medium">
            Create a standout resume fast — easy steps, modern designs, real
            results.
          </h1>
        </div>
        <button className="cursor-pointer px-4 py-2 rounded-lg bg-linear-to-tl from-indigo-400 via-violet-600 to-cyan-400 hover:from-cyan-400 hover:via-violet-600 hover:to-indigo-400 transition-colors duration-400 ease-in-out text-white font-semibold mt-4 shadow-xl  ">
          Get Started for Free
        </button>
        <p className="text-[12px] text-neutral-500 mt-1 font-medium">
          No credit card required.
        </p>
      </div>
      <div className="w-[50%] h-full relative flex items-center justify-center">
        <div className="absolute  -rotate-4 hover:rotate-0 scale-90 hover:scale-105 -left-4 transition-all duration-500 bg-white shadow-xl w-[360px] h-[500px] rounded-xl p-6 hover:p-3 overflow-hidden cursor-pointer">
          <div className="w-full h-full  rounded-xl shadow-xl overflow-hidden">
            <img
              src={Temp[2].image}
              alt=""
              className="object-center w-full h-full"
            />
          </div>
        </div>
        <div className="absolute rotate-4 hover:rotate-0 scale-90 hover:scale-105 -right-4 transition-all duration-500 bg-white shadow-xl w-[360px] h-[500px] rounded-xl p-6 hover:p-3 overflow-hidden cursor-pointer ">
          <div className="w-full h-full rounded-xl shadow-xl overflow-hidden select-none">
            <img
              src={Temp[3].image}
              alt=""
              className="object-center w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

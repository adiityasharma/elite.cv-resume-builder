import React from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

const ResumeShowcase = () => {
  return (
    <div className="w-full  flex flex-col items-center justify-center gap-10">
      <div className="w-[50%] py-10">
        <h1 className="text-4xl font-semibold text-center ">
          Pick one of many world-class templates and build your resume in
          minutes
        </h1>
      </div>
      <div className="w-full flex flex-row overflow-x-hidden gap-10 h-130">
        <div className="w-[400px] h-full bg-white/50 shrink-0  backdrop-blur-2xl flex items-center justify-center p-5 rounded-xl">
          <div className="rounded-xl w-full h-full bg-white"></div>
        </div>
        <div className="w-[400px] h-full bg-white/50 shrink-0  backdrop-blur-2xl flex items-center justify-center p-5 rounded-xl">
          <div className="rounded-xl w-full h-full bg-white"></div>
        </div>
        <div className="w-[400px] h-full bg-white/50 shrink-0  backdrop-blur-2xl flex items-center justify-center p-5 rounded-xl">
          <div className="rounded-xl w-full h-full bg-white"></div>
        </div>
        <div className="w-[400px] h-full bg-white/50 shrink-0  backdrop-blur-2xl flex items-center justify-center p-5 rounded-xl">
          <div className="rounded-xl w-full h-full bg-white"></div>
        </div>
        <div className="w-[400px] h-full bg-white/50 shrink-0  backdrop-blur-2xl flex items-center justify-center p-5 rounded-xl">
          <div className="rounded-xl w-full h-full bg-white"></div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        <div className="text-blue-500">
          <ChevronLeft />
        </div>
        <div className="w-4 h-4 rounded-full border border-blue-500"></div>
        <div className="text-blue-500">
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default ResumeShowcase;

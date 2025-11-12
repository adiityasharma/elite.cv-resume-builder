import React from "react";

const ResumeShowcase = () => {
  return (
    <div className="w-full  flex flex-col items-center justify-center gap-10">
      <div className="w-[50%]">
        <h1 className="text-4xl font-semibold text-center ">
          Pick one of many world-class templates and build your resume in
          minutes
        </h1>
      </div>
      <div className="w-full flex flex-row overflow-auto gap-10 h-130">
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
    </div>
  );
};

export default ResumeShowcase;

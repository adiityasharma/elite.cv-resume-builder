import React from "react";
import { Link } from "react-router-dom";

const CreateResume = () => {
  return (
    <div className="w-full h-[600px] mt-20 flex items-center justify-center gap-10 selection:bg-[#00A7FA] selection:text-white">
      <div className="w-[40%] h-full flex flex-col items-center justify-center gap-5 py-5">
        <div className="text-7xl font-bold">
          <h1>Just three</h1>
          <h1>easy steps</h1>
        </div>
        <div className="flex flex-col gap-10 mt-5">
          <div className="flex justify-between items-center gap-5">
            <div className="w-10 h-10 rounded-full bg-white/50 text-2xl font-bold flex items-center justify-center text-neutral-500">
              1
            </div>
            <h1 className="w-[300px] text-lg leading-tight ">
              <span className="font-bold">Select</span> a template from our
              library of professional designs
            </h1>
          </div>

          <div className="flex justify-between items-center gap-5">
            <div className="w-10 h-10 rounded-full bg-white/50 text-2xl font-bold flex items-center justify-center text-neutral-500">
              2
            </div>
            <h1 className="w-[300px] text-lg leading-tight ">
              <span className="font-bold">Build</span> your resume with our
              industry-specific bullet points
            </h1>
          </div>

          <div className="flex justify-between items-center gap-5">
            <div className="w-10 h-10 rounded-full bg-white/50 text-2xl font-bold flex items-center justify-center text-neutral-500">
              3
            </div>
            <h1 className="w-[300px] text-lg leading-tight ">
              <span className="font-bold">Customize </span> the details and wrap
              it up. You’re ready to send!
            </h1>
          </div>
        </div>
        <Link
          to={"/resume/sections/personal-info"}
          className="w-[370px] py-3  shadow-lg rounded-2xl mt-4 text-white text-xl font-bold bg-linear-to-r from-blue-600 to-violet-600 cursor-pointer text-center"
        >
          Next
        </Link>
      </div>

      <div className="w-[40%] h-full bg-amber-100">
        
      </div>
    </div>
  );
};

export default CreateResume;

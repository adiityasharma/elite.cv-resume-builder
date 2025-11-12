import React from "react";

const GetHiredSection = () => {
  return (
    <div className="w-full h-[700px] flex flex-col items-center justify-center py-10">
      <div className="flex items-center flex-col gap-4">
        <h1 className="font-bold text-5xl tracking-tighter">
          Get Hired in 3 Easy Steps
        </h1>
        <p className="font-medium text-neutral-600">
          Create your perfect resume quickly and efficiently.
        </p>
      </div>
      <div className="w-5xl  grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        <div className="w-full flex flex-col justify-center items-center p-5 gap-3 ">
          <div className="w-15 h-15 rounded-full bg-[#00A7FA] flex items-center justify-center text-4xl font-bold text-white  bg-linear-to-tl from-indigo-400 via-violet-600 to-cyan-400 hover:from-cyan-400 hover:via-violet-600 hover:to-indigo-400 transition-colors duration-400 ease-in-out">
            1
          </div>
          <h1 className="text-2xl font-semibold ">Choose a Template</h1>
          <p className="text-center">
            Select a stunning template that fits your industry and style.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center p-5 gap-3 ">
          <div className="w-15 h-15 rounded-full bg-[#00A7FA] flex items-center justify-center text-4xl font-bold text-white bg-linear-to-tl from-indigo-400 via-violet-600 to-cyan-400 hover:from-cyan-400 hover:via-violet-600 hover:to-indigo-400 transition-colors duration-400 ease-in-out">
            2
          </div>
          <h1 className="text-2xl font-semibold ">Fill in Your Details</h1>
          <p className="text-center">
            Use our guided editor and smart suggestions to add your information.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center p-5 gap-3 ">
          <div className="w-15 h-15 rounded-full bg-[#00A7FA] flex items-center justify-center text-4xl font-bold text-white bg-linear-to-tl from-indigo-400 via-violet-600 to-cyan-400 hover:from-cyan-400 hover:via-violet-600 hover:to-indigo-400 transition-colors duration-400 ease-in-out ">
            3
          </div>
          <h1 className="text-2xl font-semibold ">Download & Apply</h1>
          <p className="text-center">
            Export your resume as a high-quality PDF and start applying.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetHiredSection;

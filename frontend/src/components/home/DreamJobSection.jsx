import React from 'react'

const DreamJobSection = () => {
  return (
    <div className="w-full h-[500px] flex items-center justify-center">
      <div className="w-[900px] flex flex-col justify-center items-center ">
        <h1 className="text-7xl font-bold text-center bg-linear-to-tl from-indigo-400 via-violet-600 to-cyan-400 bg-clip-text text-transparent">
          Let’s Land Your Dream Job ToGether
        </h1>
        <button className="mt-10 cursor-pointer px-4 py-2 rounded-lg bg-linear-to-tl from-indigo-400 via-violet-600 to-cyan-400 hover:from-cyan-400 hover:via-violet-600 hover:to-indigo-400 transition-colors duration-400 ease-in-out text-white font-semibold shadow-xl  ">
          Get Started for Free
        </button>
        <p className="text-[12px] text-neutral-500 mt-1 font-medium">
          No credit card required.
        </p>
      </div>
    </div>
  );
}

export default DreamJobSection
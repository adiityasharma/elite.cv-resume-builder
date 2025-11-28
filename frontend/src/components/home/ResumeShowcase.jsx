import React from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { ResumeTemplates } from "../../resume-templates/index";
const ResumeShowcase = () => {
  const temps = ResumeTemplates.slice(2, 7);

  return (
    <div className="w-full  flex flex-col items-center justify-center p-4 gap-10 lg:px-15">
      <div className="w-full lg:w-[50%] mt-10 lg:py-10">
        <h1 className="text-2xl lg:text-4xl font-semibold text-center ">
          Pick one of many world-class templates and build your resume in
          minutes
        </h1>
      </div>
      <div className="w-full flex flex-row overflow-x-hidden gap-2 sm:gap-4 md:gap-5 transition-transform duration-300 ease-in-out">
        {temps.map((temp) => (
          <div
            key={temp.id}
            className="w-[210px] sm:w-[250px] md:w-[330px] h-full bg-white shadow border border-neutral-300 shrink-0 flex items-center justify-center p-2 md:p-5 rounded-xl"
          >
            <div className="rounded-xl w-full h-full bg-blue-200 overflow-hidden">
              {" "}
              <img src={temp.image} alt="" className="scale-102" />
            </div>
          </div>
        ))}
        <div className="w-[400px] h-full bg-white/50 shadow border border-neutral-300 shrink-0 flex items-center justify-center p-5 rounded-xl">
          <div className="rounded-xl w-full h-full bg-blue-200 overflow-hidden">
            Show More{" "}
          </div>
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

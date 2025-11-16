import React from "react";
import { ResumeTemplates } from "../../resume-templates";
import { X } from "lucide-react";

const AllTemplatePreview = () => {
  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex items-center justify-between font-semibold">
        <h1 className="text-2xl ">Templates</h1>
        <X className="text-blue-400 cursor-pointer hover:text-blue-600 " />
      </div>

      <div className="h-px w-full bg-neutral-300 "></div>

      <div className="w-full  ">
        <div className="px-5 grid grid-cols-2 gap-5 w-full mt-4 ">
          {ResumeTemplates.map((resume) => (
            <div
              key={resume.id}
              className="w-full h-[200px] border-2 border-neutral-300 group"
            >
              <div className="relative overflow-hidden w-full h-full">
                <img
                  alt="resume-image"
                  className="w-full h-full "
                  src={resume?.image}
                />
                <div className="absolute hidden group-hover:flex top-0 w-full h-full bg-black/10 items-center justify-center ">
                  <button className="cursor-pointer bg-blue-400 text-white font-semibold z-5 px-4 py-1 rounded-2xl">
                    Use
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTemplatePreview;

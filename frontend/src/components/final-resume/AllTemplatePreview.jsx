import React from "react";
import { ResumeTemplates } from "../../resume-templates";
import { X } from "lucide-react";

const AllTemplatePreview = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div>color and font</div>

      <div className="flex flex-col gap-2">
        <div className=" flex items-center justify-between font-semibold">
          <h1 className="text-[25px] ">Templates</h1>
        </div>
        <div className="w-full">
          <div className=" grid grid-cols-4 gap-3 w-full mt-1 ">
            {ResumeTemplates.map((resume) => (
              <div
                key={resume.id}
                className="w-full h-[200px] border-2 border-neutral-300 cursor-pointer group hover:border-blue-400 transition-colors duration-300"
              >
                <div className="relative overflow-hidden w-full h-full ">
                  <img
                    alt="resume-image"
                    className="w-full h-full "
                    src={resume?.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTemplatePreview;

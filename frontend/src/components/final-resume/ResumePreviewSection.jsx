import React, { useRef, useState } from "react";
import { ResumeTemplates } from "../../resume-templates";
import { File, Minus, Pencil, Plus } from "lucide-react";
import { generatePDF } from "../../utils/generatePDF";
import { useSelector, useDispatch } from "react-redux";
import TemplateBar from "./TemplateBar";
import AllTemplatePreview from "./AllTemplatePreview";

const ResumePreviewSection = () => {
  const resumeRef = useRef();
  const Temp = ResumeTemplates[0].component;

  const data = useSelector((state) => state.resumeData);

  return (
    <div className="w-full flex flex-col items-center gap-5 rounded overflow-hidden border-2 border-neutral-200 bg-white shadow-lg pb-10">
      <div className="px-5 w-full h-[50px] bg-white shadow flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1>untitled</h1>
          <button>
            <Pencil size={15} className="cursor-pointer text-blue-500 " />
          </button>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            className="px-4 py-1 rounded-md cursor-pointer hover:bg-blue-600 bg-blue-500 text-white font-semibold"
            onClick={() => generatePDF(resumeRef.current, "untitled")}
          >
            Download as PDF
          </button>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 gap-10 px-10 max-h-[842px]">
        <div className="border border-[#dcdcdc] w-full flex flex-col gap-2 ">
          <div className="w-full h-12 flex items-center justify-evenly border-b border-neutral-300 text-lg rounded overflow-hidden">
            <button className="w-full h-full flex items-center justify-center hover:bg-blue-50">
              Templates
            </button>
            <div className="h-full w-px bg-neutral-300"></div>
            <button className=" w-full h-full flex items-center justify-center text-blue-500 hover:bg-blue-50">
              Edit
            </button>
          </div>

          <div className="w-full h-full p-4 customScrollbar">
            <AllTemplatePreview />
          </div>
        </div>

        <div className="flex justify-center">
          <div
            ref={resumeRef}
            className="w-[595px] max-h-[842px] border border-[#dcdcdc] overflow-hidden"
          >
            <Temp data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreviewSection;
//

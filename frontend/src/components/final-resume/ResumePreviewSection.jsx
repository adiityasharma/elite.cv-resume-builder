import React, { useRef, useState } from "react";
import { ResumeTemplates } from "../../resume-templates";
import { Minus, Pencil, Plus } from "lucide-react";
import { generatePDF } from "../../utils/generatePDF";
import { useSelector, useDispatch } from "react-redux";

const ResumePreviewSection = () => {
  const resumeRef = useRef();
  const Temp = ResumeTemplates[4].component;

  const data = useSelector((state) => state.resumeData);

  return (
    <div className="w-full flex flex-col items-center gap-5 rounded-lg overflow-hidden border-2 border-neutral-200 bg-white shadow-lg pb-10">
      <div className="px-5 w-full h-[50px] bg-white shadow flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1>untitled</h1>
          <button>
            <Pencil size={15} className="cursor-pointer text-blue-500 " />
          </button>
        </div>
        <button
          className="px-4 py-1 rounded-md cursor-pointer hover:bg-blue-600 bg-blue-500 text-white font-semibold"
          onClick={() => generatePDF(resumeRef.current, "untitled")}
        >
          Download as PDF
        </button>
      </div>

      <div
        ref={resumeRef}
        className="w-[595px] min-h-[842px] border border-[#dcdcdc] overflow-hidden"
      >
        <Temp data={data} />
      </div>
    </div>
  );
};

export default ResumePreviewSection;
// 

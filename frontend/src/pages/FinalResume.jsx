import React, { useRef } from "react";
import Sidebar from "../components/final-resume/Sidebar";
import TemplateBar from "../components/final-resume/TemplateBar";
import Button from "../components/common/Button";
import { generatePDF } from "../utils/generatePDF.js";
import { ResumeTemplates } from "../resume-templates/index.jsx";

const FinalResume = () => {
  const resumeRef = useRef();

  const Temp = ResumeTemplates[3].component;

  return (
    <div className="w-full min-h-screen flex items-start justify-between gap-2">
      <div className="flex gap-5 items-start ">
        <Sidebar />
        <TemplateBar />
      </div>

      <div className="w-full flex flex-col items-center gap-5 rounded-lg overflow-hidden border-2 border-neutral-200 bg-white shadow-lg pb-10">
        <div className="px-5 w-full h-[50px] bg-white shadow flex items-center ">
          <h1>name</h1>
        </div>

        <div
          ref={resumeRef}
          className=" w-[594px] min-h-[842px] border border-[#dcdcdc] overflow-hidden"
        >
          <Temp />
        </div>
      </div>

      <Button onClick={() => generatePDF(resumeRef.current, "aditya")}>
        Print
      </Button>
    </div>
  );
};

export default FinalResume;

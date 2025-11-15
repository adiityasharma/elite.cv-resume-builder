import React, { useRef } from "react";
import Sidebar from "../components/final-resume/Sidebar";
import TemplateBar from "../components/final-resume/TemplateBar";
import Button from "../components/common/Button";
import { generatePDF } from "../utils/generatePDF.js";
import { ResumeTemplates } from "../resume-templates/index.jsx";
import ResumePreviewSection from "../components/final-resume/ResumePreviewSection.jsx";

const FinalResume = () => {
  return (
    <div className="w-full min-h-screen flex items-start justify-between gap-2">
      <div className="w-full flex gap-4 items-start">
        <Sidebar />
        <TemplateBar />
      </div>
      <ResumePreviewSection />
    </div>
  );
};

export default FinalResume;

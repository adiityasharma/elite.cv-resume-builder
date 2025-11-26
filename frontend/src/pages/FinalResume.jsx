import ResumePreviewSection from "../components/final-resume/ResumePreviewSection.jsx";
import { useState } from "react";

const FinalResume = () => {
  return (
    <div className="w-full min-h-screen flex items-start justify-between gap-4 ">
      <div className="flex-1 ">
        <ResumePreviewSection />
      </div>
    </div>
  );
};

export default FinalResume;

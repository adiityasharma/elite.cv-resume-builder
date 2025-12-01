import ResumePreviewSection from "../components/final-resume/ResumePreviewSection.jsx";
import { useEffect, useState } from "react";

const FinalResume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EliteCV | Final Resume";
  }, []);

  return (
    <div className="w-full min-h-screen flex items-start justify-between gap-4 ">
      <div className="w-full h-fit flex-1 mt-20 p-4 lg:px-15">
        <ResumePreviewSection />
      </div>
    </div>
  );
};

export default FinalResume;

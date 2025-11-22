import Sidebar from "../components/final-resume/Sidebar";
import TemplateBar from "../components/final-resume/TemplateBar";
import ResumePreviewSection from "../components/final-resume/ResumePreviewSection.jsx";
import { useState } from "react";

const FinalResume = () => {
  const [selectedField, setSelectedField] = useState(null);

  return (
    <div className="w-full min-h-screen flex items-start justify-between gap-4 ">
      <div className="w-fit flex gap-4 items-start ">
        <Sidebar
          selectedField={selectedField}
          setSelectedField={setSelectedField}
        />
        {/* {isOpenSidebar && ( */}
        <TemplateBar selectedField={selectedField} />
        {/* )} */}
      </div>
      <div className="flex-1 ">
        <ResumePreviewSection />
      </div>
    </div>
  );
};

export default FinalResume;

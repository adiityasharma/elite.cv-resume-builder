import React from "react";
import { ChevronDown, X } from "lucide-react";
import { colorPalettes } from "../../constants";
import { ResumeTemplates } from "../../resume-templates";
import AllTemplatePreview from "./AllTemplatePreview";

const TemplateBar = () => {
  return (
    <div className="w-[350px] bg-white/50 backdrop-blur-xl flex flex-col rounded-lg shadow-xl px-5 py-5">
      <AllTemplatePreview />
    </div>
  );
};

export default TemplateBar;

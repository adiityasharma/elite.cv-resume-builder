import React, { useEffect, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { colorPalettes } from "../../constants";
import { ResumeTemplates } from "../../resume-templates";
import AllTemplatePreview from "./AllTemplatePreview";
import DesignAndFormating from "./DesignAndFormating";
import EditResume from "./EditResume";

const TemplateBar = ({ selectedField }) => {
  const components = {
    1: AllTemplatePreview,
    2: DesignAndFormating,
    3: EditResume,
  };

  const Field = components[selectedField];

  return (
    <>
      {selectedField && (
        <div className="w-[400px] bg-white/50 border border-neutral-300 backdrop-blur-xl flex flex-col rounded-lg shadow px-5 py-5"></div>
      )}
      
    </>
  );
};

export default TemplateBar;

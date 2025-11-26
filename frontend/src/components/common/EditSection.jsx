import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const EditSection = ({ children, title = "untitled" }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-full py-3 px-4 shadow border border-neutral-200 bg-white rounded-lg ">
      <div
        onClick={() => setShow(!show)}
        className="flex items-center justify-between cursor-pointer "
      >
        <h1 className="text-lg font-semibold">{title}</h1>
        <ChevronDown
          size={20}
          className={`text-blue-500 ${show ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      {show && <div>{children}</div>}
    </div>
  );
};

export default EditSection;

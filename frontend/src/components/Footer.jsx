import React from "react";
import { links } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full border-t border-neutral-200 flex flex-col bg-white items-center justify-center px-4 md:px-15 py-2">
      <div className="w-full h-full flex flex-row items-center justify-between">
        <div className="w-full h-full ">
          <img className="w-20 md:w-40" src="/elitecv.svg" alt="" />
          <p className="text-[8px] leading-tight md:text-[12px] font-medium text-neutral-600">
            Your Story, Your Style, Your Resume
          </p>
        </div>
        <h1 className="text-[8px] md:text-[12px] w-full text-right text-neutral-400">
          © 2025 EliteCV. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { ChevronDown, X } from "lucide-react";
import { colorPalettes } from "../../constants";

const TemplateBar = () => {
  return (
    <div className="w-[350px] bg-white/50 backdrop-blur-xl flex flex-col gap-4 rounded-lg shadow-xl px-5 py-5">
      <div className=" flex items-center justify-between  font-semibold">
        <h1 className="text-2xl ">Templates</h1>
        <X className="text-blue-400 cursor-pointer hover:text-blue-600 " />
      </div>

      <div className="h-px w-full bg-neutral-400 "></div>

      <div>
        <div className="flex gap-5 items-center cursor-pointer">
          <h1 className="font-medium">Colors: </h1>
          <ChevronDown className="text-blue-500" />
        </div>
        {colorPalettes.map((item, index) => (
          <div key={index + 100} className="ml-5 mt-2">
            <h1 className="text-[12px] font-semibold">{item.palette_name}</h1>
            <div className="flex flex-wrap gap-2 mt-2 ">
              {item.colors.map((color, idx) => (
                <div
                  style={{ backgroundColor: color.hex }}
                  key={idx + 200}
                  className={`w-5 aspect-square rounded-full cursor-pointer`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* all temolates */}
      <div className="w-full h-100 mt-5 ">
        <h1 className="text-lg font-semibold">All Templates</h1>
        <div className="grid grid-cols-2 gap-5 w-full mt-4">
          <div className="w-full h-[200px] bg-amber-400"></div>
          <div className="w-full h-[200px] bg-amber-400"></div>
        </div>
      </div>
    </div>
  );
};

export default TemplateBar;

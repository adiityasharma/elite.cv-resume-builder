import { X } from "lucide-react";
import React from "react";
import { colorPalettes } from "../../constants";

const colors = [
  { name: "Coral", hex: "#FF6F61" },
  { name: "Sunset Orange", hex: "#FF8C42" },
  { name: "Golden Yellow", hex: "#FFC857" },
  { name: "Soft Pink", hex: "#F7B2BD" },
  { name: "Deep Plum", hex: "#5C2751" },
  { name: "Seafoam Green", hex: "#9FE2BF" },
  { name: "Aqua Blue", hex: "#00B5D8" },
  { name: "Deep Ocean", hex: "#005377" },
  { name: "Sand", hex: "#EED9C4" },
  { name: "Coral Reef", hex: "#FF7660" },
];

const DesignAndFormating = () => {
  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex items-center justify-between font-semibold">
        <h1 className="text-xl ">Design & Formating</h1>
        <X className="text-blue-400 cursor-pointer hover:text-blue-600 " />
      </div>

      <div className="h-px w-full bg-neutral-500 "></div>

      {/* colors */}
      <div className="flex flex-col w-full gap-2">
        <h1 className="font-semibold text-xl">Colors</h1>
        <div className="flex flex-col ">
          <h1 className="font-semibold">Recommended Colors</h1>
          <div className="flex items-center gap-2 mt-2">
            {colors.map((color, index) => (
              <div
                key={index}
                style={{ backgroundColor: color.hex }}
                className={`w-5 aspect-square rounded-full`}
              ></div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-semibold mt-2">All Colors</h1>
          <div className="">
            {colorPalettes.map((item, index) => (
              <div key={index} className={`text-sm font-medium mt-1 `}>
                <h1>{item.palette_name}</h1>
                <div className="flex items-center gap-2 mt-1 pl-5">
                  {item.colors.map((color, idx) => (
                    <div
                      key={idx + 100}
                      style={{ backgroundColor: color.hex }}
                      className="w-5 aspect-square rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-neutral-300 mt-2"></div>

      {/* font sytels */}
      <div>
        <h1 className="font-semibold text-xl">Font Style</h1>

        {/* font size */}
        <div className="w-full grid grid-cols-3 gap-5 mt-2">
          <div className="w-full cursor-pointer hover:border-blue-400 hover:border-3 py-4 flex items-center justify-center rounded-lg border-2 border-neutral-200">
            <div className="text-[12px] font-semibold flex flex-col items-center justify-center leading-tight">
              <h1 className=" ">A</h1>
              <p className="uppercase ">Small</p>
            </div>
          </div>

          <div className="w-full cursor-pointer hover:border-blue-400 hover:border-3 py-4 flex items-center justify-center rounded-lg border-2 border-neutral-200">
            <div className="text-[14px] font-semibold flex flex-col items-center justify-center leading-tight">
              <h1 className=" ">A</h1>
              <p className="uppercase ">Normal</p>
            </div>
          </div>

          <div className="w-full cursor-pointer hover:border-blue-400 hover:border-3 py-4 flex items-center justify-center rounded-lg border-2 border-neutral-200">
            <div className="font-semibold text-[18px] flex flex-col items-center justify-center leading-tight">
              <h1 className=" ">A</h1>
              <p className="uppercase ">Large</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignAndFormating;

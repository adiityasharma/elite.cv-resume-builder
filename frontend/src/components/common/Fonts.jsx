import React, { useEffect } from "react";
import { resumeFonts } from "../../constants";
import { fontSizes } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { updateDesign } from "../../app/features/resumeData";
import {
  defaultFont,
  defaultFontWeight,
} from "../final-resume/ResumePreviewSection";

const Fonts = () => {
  const dispatch = useDispatch();
  const { design } = useSelector((state) => state.resumeData);

  return (
    <div>
      <div>
        <h1 className="text-sm font-semibold">Fonts</h1>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          {resumeFonts.map((font) => (
            <div
              key={font.id}
              onClick={() => dispatch(updateDesign({ font: font.font }))}
              style={{ fontFamily: font.font }}
              className={`w-fit px-2 py-1 border border-neutral-300 text-sm md:text-[12px] rounded cursor-pointer ${
                (design.font || defaultFont) === font.font
                  ? "bg-blue-500 text-white border-none"
                  : ""
              }`}
            >
              {font.name}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className="mt-2 text-sm font-semibold">Font Weights</h1>
        <div className="flex flex-wrap mt-2 gap-x-2">
          {["400", "500", "700"].map((weight, index) => (
            <button
              onClick={() => dispatch(updateDesign({ fontWeigth: weight }))}
              key={weight}
              className={`px-2 py-0.5 border border-neutral-300 text-sm ${
                (design.fontWeigth || defaultFontWeight) === weight
                  ? "bg-blue-500 text-white border-none"
                  : ""
              } rounded cursor-pointer`}
            >
              {weight === "400"
                ? "Regular"
                : weight === "500"
                ? "Medium"
                : "Bold"}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h1 className="mt-2 text-sm font-semibold">Font Size</h1>
        <div className="flex flex-wrap mt-2 gap-x-2">
          {fontSizes?.map((size) => (
            <button
              onClick={() => dispatch(updateDesign({ fontSize: size }))}
              key={size.name}
              className={`px-2 py-0.5 border border-neutral-300 text-[12px] ${
                (design?.fontSize?.name || "medium") === size.name
                  ? "bg-blue-500 text-white border-none"
                  : ""
              } rounded cursor-pointer uppercase `}
            >
              {size.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fonts;

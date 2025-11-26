import React from "react";
import { colors } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { updateDesign } from "../../app/features/resumeData";
import { defaultColor } from "../final-resume/ResumePreviewSection";

const Colors = () => {
  const dispatch = useDispatch();
  const { design } = useSelector((state) => state.resumeData);

  return (
    <div>
      <h1 className="text-sm font-semibold ">Colors</h1>
      <div>
        <div className="flex items-center gap-2 mt-2">
          {colors.map((color, index) => (
            <button
              onClick={() => dispatch(updateDesign({ color: color.hex }))}
              key={color.hex}
              className={`w-5 aspect-square rounded-full overflow-hidden cursor-pointer ${
                (design.color || defaultColor) === color.hex
                  ? "border-2 border-blue-500 p-1"
                  : ""
              }`}
            >
              <div
                style={{ backgroundColor: color.hex }}
                className="w-full h-full rounded-full"
              >
                <p className="sr-only">{color.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colors;

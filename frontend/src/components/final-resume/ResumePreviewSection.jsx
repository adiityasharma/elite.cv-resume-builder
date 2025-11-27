import { useRef, useState } from "react";
import { ResumeTemplates } from "../../resume-templates";
import { Edit, Paintbrush, Pencil } from "lucide-react";
import { generatePDF } from "../../utils/generatePDF";
import { useSelector } from "react-redux";
import AllTemplatePreview from "./AllTemplatePreview";
import Colors from "../common/Colors";
import Fonts from "../common/Fonts";
import EditResume from "./EditResume";

export const defaultColor = "#000";
export const defaultFont = "'Poppins', sans-serif";
export const defaultFontWeight = 400;
export const defaultFontSize = {
  heading: "15px",
  name: "medium",
  subHeading: "13px",
  text: "11px",
  title: "24px",
};

const ResumePreviewSection = () => {
  const resumeRef = useRef();
  const data = useSelector((state) => state.resumeData);
  const { design } = useSelector((state) => state.resumeData);

  const Temp = ResumeTemplates.filter(
    (temp) => temp.id === (design.template || "TP1")
  )[0].component;

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="w-full flex flex-col items-center gap-5 rounded overflow-hidden border-2 border-neutral-200 bg-white shadow-lg pb-10">
      <div className="px-5 w-full h-[50px] bg-white shadow flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1>untitled</h1>
          <button>
            <Pencil size={15} className="cursor-pointer text-blue-500 " />
          </button>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            className="px-4 py-1 rounded-md cursor-pointer hover:bg-blue-600 bg-blue-500 text-white font-semibold"
            onClick={() => generatePDF(resumeRef.current, "untitled")}
          >
            Download
          </button>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 gap-10 px-10 min-h-[842px]">
        <div className="border border-[#dcdcdc] w-full flex flex-col gap-2 ">
          <div className="w-full h-12 flex items-center justify-evenly font-medium border-b border-neutral-300 text-lg rounded overflow-hidden">
            <button
              onClick={() => setIsEditing(false)}
              className={`w-full h-full flex items-center justify-center gap-2 hover:bg-blue-50 cursor-pointer ${
                !isEditing && "bg-blue-50 text-blue-500"
              }`}
            >
              <Paintbrush size={20} /> Design & Formating
            </button>
            <div className="h-full w-px bg-neutral-300"></div>
            <button
              onClick={() => setIsEditing(true)}
              className={`w-full h-full flex items-center justify-center gap-2 cursor-pointer  hover:bg-blue-50 ${
                isEditing && "bg-blue-50 text-blue-500"
              }`}
            >
              <Edit size={18} /> Edit Resume
            </button>
          </div>

          <div className="w-full h-[calc(842px-48px)] flex flex-col gap-2 p-4 overflow-hidden">
            {isEditing ? (
              <div className="w-full h-full ">
                <EditResume />
              </div>
            ) : (
              <div className="w-full h-full flex flex-col gap-2  ">
                <Colors />
                <Fonts />
                <AllTemplatePreview />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <div
            ref={resumeRef}
            style={{
              fontFamily: design.font || defaultFont,
              fontWeight: design.fontWeigth || defaultFontWeight,
            }}
            className="w-[595px] max-h-[842px] border border-[#dcdcdc] overflow-hidden"
          >
            <Temp
              data={data}
              fontColor={design.color || defaultColor}
              fontSize={design.fontSize || defaultFontSize}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreviewSection;
//

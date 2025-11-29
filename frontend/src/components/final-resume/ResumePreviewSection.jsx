import { useRef, useState } from "react";
import { ResumeTemplates } from "../../resume-templates";
import { Download, Edit, Eye, EyeClosed, Paintbrush } from "lucide-react";
import { generatePDF } from "../../utils/generatePDF";
import { useDispatch, useSelector } from "react-redux";
import AllTemplatePreview from "./AllTemplatePreview";
import Colors from "../common/Colors";
import Fonts from "../common/Fonts";
import EditResume from "./EditResume";
import { setTitle } from "../../app/features/resumeData";
import { useParams } from "react-router-dom";
import PreviewModal from "../template-page/PreviewModal";

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
  const [showPreview, setShowPreview] = useState(false);
  const { tempId } = useParams();
  const resumeRef = useRef(); // this will point to the hidden desktop layout only
  const dispatch = useDispatch();
  const data = useSelector((state) => state.resumeData);
  const { title, design } = useSelector((state) => state.resumeData);

  const Temp = ResumeTemplates.filter(
    (temp) => temp.id === (tempId || design.template || "tp1")
  )[0].component;

  const [isEditing, setIsEditing] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  return (
    <div className="w-full h-fit flex flex-col items-center gap-5 overflow-hidden border border-neutral-200 bg-white pb-10">
      {/* Header */}
      <div className="px-2 md:px-5 w-full h-[50px] border-b border-neutral-200 flex items-center justify-between">
        <div className="w-fit flex items-center gap-4">
          <input
            className="w-30 border border-neutral-200 md:border-none rounded md:w-fit px-2 py-1 outline-none"
            type="text"
            value={title}
            placeholder="Untitled"
            onChange={(e) => dispatch(setTitle(e.target.value))}
          />
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="block md:hidden bg-blue-500 px-4 py-2 rounded-md text-white text-sm active:scale-90 transition-all duration-300">
            <button onClick={() => setShowPreview(true)}>Preview</button>
          </div>

          <button
            className="px-4 py-2 md:py-1 rounded-md cursor-pointer hover:bg-blue-600 bg-blue-500 text-white font-semibold"
            onClick={() =>
              generatePDF(resumeRef.current, title.trim() || "untitled")
            }
          >
            <Download size={18} className="block md:hidden" />
            <span className="hidden md:block">Download</span>
          </button>
        </div>
      </div>

      {/* Main layout */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-2 lg:px-10 h-fit md:min-h-[842px]">
        {/* Sidebar controls */}
        <div
          className={`md:flex border border-[#dcdcdc] w-full h-fit flex-col gap-2 ${
            showPreview && "hidden"
          }`}
        >
          <div className="w-full h-10 lg:h-12 flex items-center justify-evenly font-medium border-b border-neutral-300 text-lg overflow-hidden">
            <button
              onClick={() => setIsEditing(false)}
              className={`w-full h-full text-[12px] md:text-sm flex items-center justify-center gap-1 tracking-tight md:gap-2 hover:bg-blue-50 cursor-pointer ${
                !isEditing && "bg-blue-50 text-blue-500"
              }`}
            >
              <Paintbrush className="w-4" /> Design & Formating
            </button>
            <div className="h-full w-px bg-neutral-300"></div>
            <button
              onClick={() => setIsEditing(true)}
              className={`w-full h-full text-[12px] md:text-sm flex items-center justify-center gap-2 cursor-pointer tracking-tight hover:bg-blue-50 ${
                isEditing && "bg-blue-50 text-blue-500"
              }`}
            >
              <Edit className="w-4" /> Edit Resume
            </button>
          </div>

          <div className="w-full h-[calc(842px-48px)] flex flex-col gap-2 p-1 md:p-4 overflow-hidden">
            {isEditing ? (
              <EditResume />
            ) : (
              <>
                <Colors />
                <Fonts />
                <AllTemplatePreview />
              </>
            )}
          </div>
        </div>

        {/* Desktop preview (visible only on desktop, NOT used for PDF) */}
        <div className="hidden md:block ">
          <div
            style={{
              fontFamily: design.font || defaultFont,
              fontWeight: design.fontWeigth || defaultFontWeight,
            }}
            className="w-[595px] max-h-[842px] border border-[#dcdcdc] "
          >
            <Temp
              data={data}
              fontColor={design.color || defaultColor}
              fontSize={design.fontSize || defaultFontSize}
            />
          </div>
        </div>

        {/* Mobile preview (NOT used for PDF) */}
        {showPreview && (
          <PreviewModal onClose={() => setShowPreview(false)}>
            <div className=" md:hidden">
              <div
                className="border border-[#dcdcdc] "
                style={{
                  fontFamily: design.font || defaultFont,
                  fontWeight: design.fontWeigth || defaultFontWeight,
                }}
              >
                <Temp
                  data={data}
                  fontColor={design.color || defaultColor}
                  fontSize={design.fontSize || defaultFontSize}
                />
              </div>
            </div>
          </PreviewModal>
        )}
      </div>

      {/* 🔥 Hidden desktop layout — always captured for PDF */}
      <div className="pdf-hidden">
        <div
          ref={resumeRef}
          style={{
            fontFamily: design.font || defaultFont,
            fontWeight: design.fontWeigth || defaultFontWeight,
          }}
          className="w-[595px] h-[842px] border border-[#dcdcdc] overflow-hidden"
        >
          <Temp
            data={data}
            fontColor={design.color || defaultColor}
            fontSize={design.fontSize || defaultFontSize}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumePreviewSection;

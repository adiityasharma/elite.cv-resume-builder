import React from "react";
import { forwardRef } from "react";

const ResumePreview = (props, ref) => {
  return (
    <div ref={ref} className="w-[595px] h-[842px]">
      <div className="w-full flex flex-col pb-5">
        {/* details of persone */}
        <div className="w-full resume-bg py-3 px-5 pt-5  flex flex-col ">
          <div className="leading-tight">
            <h1 className="text-3xl font-bold">Aditya Sharma</h1>
            <h1 className="text-[12px] mt-2">Indore, India | 1234567890</h1>
            <p className="  text-[12px]">adityasharma626367@gmail.com</p>
          </div>

          <div>
            <p className="text-[12px] mt-2 leading-tight font-medium ">
              Senior Frontend Engineer with 7+ years of experience building
              fast, accessible, and scalable web applications. Expert in React,
              TypeScript, and modern UI development with a strong focus on
              performance, user experience, and clean architecture. Proven
              ability to lead engineering efforts, optimize frontend workflows,
              and mentor teams while delivering high-impact features for global
              products.
            </p>
          </div>
        </div>

        {/* work exprience */}
        <div className="px-5 pt-2">
          <h1 className=" font-semibold">Work Experience</h1>
          <div className="">
            <div className="flex items-center justify-between">
              <h1 className=" text-sm font-medium">
                Senior Frontend Engineer - Google
              </h1>
              <h1 className=" text-[12px] font-medium">Nov 2022 - Present</h1>
            </div>
            <div className="">
              <p className="text-[12px] leading-tight">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
                suscipit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Et, quo!
              </p>
              <div className="pl-10 text-[12px] ">
                <ul className="list-disc leading-tight">
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nostrum, eius.
                  </li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nostrum, eius.
                  </li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nostrum, eius.
                  </li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nostrum, eius.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex items-center justify-between">
              <h1 className=" text-sm font-medium">
                Senior Frontend Engineer - Google
              </h1>
              <h1 className=" text-[12px] font-medium">Nov 2022 - Present</h1>
            </div>
            <div className="">
              <p className="text-[12px] leading-tight">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
                suscipit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Et, quo!
              </p>
              <div className="pl-10 text-[12px] ">
                <ul className="list-disc leading-tight">
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nostrum, eius.
                  </li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nostrum, eius.
                  </li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nostrum, eius.
                  </li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nostrum, eius.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* skills */}
        <div className="px-15 pt-3">
          <h1 className="font-semibold">Skills</h1>
          <div className="">
            <ul className="grid grid-cols-1 list-disc pl-10 text-[12px] gap-x-5">
              <li>
                Html Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, veniam.
              </li>
              <li>Html</li>
              <li>Html</li>
              <li>Html</li>
              <li>Html</li>
              <li>Html</li>
            </ul>
          </div>
        </div>

        {/* projects */}
        <div className="px-15 pt-3">
          <h1 className="font-semibold">Projects</h1>
          <div>
            <h1 className="text-sm font-medium ">SmartResume Builder</h1>
            <div>
              <ul className="grid grid-cols-1 list-disc pl-10 text-[12px]">
                <li>
                  Built a customizable React + Tailwind resume builder with
                  print-ready templates.
                </li>
                <li>Integrated local storage and export-to-PDF features.</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-sm font-medium ">SmartResume Builder</h1>
            <div>
              <ul className="grid grid-cols-1 list-disc pl-10 text-[12px]">
                <li>
                  Built a customizable React + Tailwind resume builder with
                  print-ready templates.
                </li>
                <li>Integrated local storage and export-to-PDF features.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* certifications  */}
        <div className="px-15 pt-3">
          <h1 className="font-semibold">Certifications</h1>
          <div>
            <ul className="grid grid-cols-1 list-disc pl-10 text-[12px]">
              <li>Meta Frontend Developer Certification</li>
              <li>AWS Cloud Practitioner (Foundational)</li>
            </ul>
          </div>
        </div>

        {/* education */}
        <div className="px-15 pt-3">
          <h1 className="font-semibold">Education</h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <div className="flex w-[70%] flex-col ">
                <h1 className="text-sm font-medium">
                  B.Tech — Computer Science Engineering
                </h1>
                <p className="text-[11px] mt-1 leading-tight">
                  Shri Jayantilal Hirachand Sanghvi Gujarati Innovative College
                  of Commerce & Science, Indore (M.P.)
                </p>
              </div>
              <h1 className="text-[12px] font-medium">Nov 2022 - Present</h1>
            </div>
            <div className="flex items-start justify-between">
              <div className="flex w-[70%] flex-col ">
                <h1 className="text-sm font-medium">
                  B.Tech — Computer Science Engineering
                </h1>
                <p className="text-[11px] mt-1 leading-tight">
                  Shri Jayantilal Hirachand Sanghvi Gujarati Innovative College
                  of Commerce & Science, Indore (M.P.)
                </p>
              </div>
              <h1 className="text-[12px] font-medium">Nov 2022 - Present</h1>
            </div>
            <div className="flex items-start justify-between">
              <div className="flex w-[70%] flex-col ">
                <h1 className="text-sm font-medium">
                  B.Tech — Computer Science Engineering
                </h1>
                <p className="text-[11px] mt-1 leading-tight">
                  Shri Jayantilal Hirachand Sanghvi Gujarati Innovative College
                  of Commerce & Science, Indore (M.P.)
                </p>
              </div>
              <h1 className="text-[12px] font-medium">Nov 2022 - Present</h1>
            </div>
          </div>
        </div>

        {/* Personal details */}
        <div className="px-15 pt-3">
          <h1 className="font-semibold">Personal Details</h1>
          <div>
            <ul className="grid grid-cols-3  text-[12px]">
              <li>
                <span>Date Of Birth: </span> 16/07/2003
              </li>
              <li>
                <span>Nationality: </span> Indian
              </li>
              <li>
                <span>Languages: </span>Hindi, English
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(ResumePreview);

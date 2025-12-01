import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ResumeTemplates } from "../resume-templates";
import { useDispatch } from "react-redux";
import { updateDesign } from "../app/features/resumeData";
import { motion } from "framer-motion";

const CreateResume = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EliteCV | Create Resume";
  }, []);

  const clickHandler = (id) => {
    navigate("/resume/sections/personal-info");
    dispatch(updateDesign({ template: id }));
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="w-full p-4 md:p-0 md:h-[600px] mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-10 selection:bg-[#00A7FA] selection:text-white">
      {/* Left Section */}
      <motion.div
        className="w-full md:w-[40%] h-full flex flex-col items-center justify-center gap-5 py-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-4xl lg:text-7xl font-bold text-center">
          <h1>Just three easy steps</h1>
        </div>
        <div className="flex flex-col gap-5 lg:gap-10 mt-5 text-center">
          <motion.div
            variants={containerVariants}
            className="flex justify-between items-center"
          >
            <h1 className=" text-lg leading-tight ">
              <span className="font-bold">Select</span> a template from our
              library of professional designs
            </h1>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="flex justify-between items-center"
          >
            <h1 className="text-lg leading-tight ">
              <span className="font-bold">Build</span> your resume with our
              industry-specific bullet points
            </h1>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="flex justify-between items-center"
          >
            <h1 className="text-lg leading-tight ">
              <span className="font-bold">Customize </span> the details and wrap
              it up. You’re ready to send!
            </h1>
          </motion.div>
        </div>
        <Link
          to={"/resume/sections/personal-info"}
          className="w-full lg:w-[80%] py-3 shadow-lg rounded-2xl mt-4 text-white text-xl font-bold bg-linear-to-r from-blue-600 to-violet-600 cursor-pointer text-center"
        >
          Next
        </Link>
      </motion.div>

      {/* Right Section */}
      <div className="md:w-[40%] h-full pb-5 ">
        <h1 className="md:text-xl lg:text-2xl font-semibold mb-3 text-center">
          Select any Resume Template
        </h1>
        <div className="w-full h-full grid grid-cols-2 gap-2 customScrollbar overflow-auto pb-5">
          {ResumeTemplates.map((temp) => (
            <motion.div
              key={temp.id}
              className="relative w-fit h-full flex items-center justify-center border border-neutral-400 group"
            >
              <motion.img src={temp.image} alt="" />
              <div
                className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/40 transition duration-300 cursor-pointer flex items-end justify-center"
                onClick={() => clickHandler(temp.id)}
              >
                <button
                  className="bg-indigo-600 text-white font-semibold py-2 hover:bg-indigo-700 transition duration-150 shadow-md cursor-pointer w-full border-r"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/build/final-resume/${temp.id}`);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-indigo-600 text-white font-semibold py-2 hover:bg-indigo-700 transition duration-150 shadow-md cursor-pointer w-full"
                  onClick={() => clickHandler(temp.id)}
                >
                  Select Template
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateResume;

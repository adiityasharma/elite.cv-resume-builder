import React from "react";
import { motion } from "motion/react";

const GetHiredSection = () => {
  return (
    <div className="w-full h-[600px] flex flex-col items-center justify-center p-4 py-10 mt-10 lg:px-15">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex items-center flex-col gap-2 lg:gap-4"
      >
        <h1 className="font-bold text-center text-3xl lg:text-5xl tracking-tighter">
          Get Hired in 3 Easy Steps
        </h1>
        <p className="font-medium text-neutral-600 text-center mt-2">
          Create your perfect resume quickly and efficiently.
        </p>
      </motion.div>

      {/* Steps */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        className="lg:w-5xl grid grid-cols-1 md:grid-cols-3 lg:gap-5 mt-5 lg:mt-10"
      >
        {[1, 2, 3].map((num, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 45 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.04, y: -4 }}
            className="w-full flex flex-col justify-center items-center p-5 gap-3"
          >
            {/* Number Bubble */}
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.25 }}
              className="w-15 h-15 rounded-full bg-[#00A7FA] flex items-center justify-center text-4xl font-bold text-white bg-linear-to-tl from-indigo-400 via-violet-600 to-cyan-400 hover:from-cyan-400 hover:via-violet-600 hover:to-indigo-400 transition-colors duration-400 ease-in-out"
            >
              {num}
            </motion.div>

            {/* Titles + description */}
            <h1 className="text-xl lg:text-2xl font-semibold text-center">
              {num === 1 && "Choose a Template"}
              {num === 2 && "Fill in Your Details"}
              {num === 3 && "Download & Apply"}
            </h1>
            <p className="text-center text-sm sm:text-medium">
              {num === 1 &&
                "Select a stunning template that fits your industry and style."}
              {num === 2 &&
                "Use our guided editor and smart suggestions to add your information."}
              {num === 3 &&
                "Export your resume as a high-quality PDF and start applying."}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GetHiredSection;

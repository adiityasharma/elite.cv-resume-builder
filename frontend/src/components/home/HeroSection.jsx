import React from "react";
import { ResumeTemplates } from "../../resume-templates";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const HeroSection = () => {
  const Temp = ResumeTemplates;
  const navigate = useNavigate();

  return (
    <div
      id="home"
      className="w-full md:min-h-[700px] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between md:gap-5 lg:gap-10 p-4 py-10 sm:py-15 md:py-12 lg:px-15 "
    >
      {/* Left Section (text) */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-4 py-1 text-[12px] sm:text-[13px] rounded-full bg-[#008efa37] text-[#0053fa] font-semibold mb-3"
        >
          <p>Your Story. Your Style. Your Resume.</p>
        </motion.div>

        {/* Animated gradient shifting heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{
            opacity: 1,
            y: 0,
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            opacity: { duration: 0.9, ease: "easeOut" },
            y: { duration: 0.9, ease: "easeOut" },
            backgroundPosition: {
              duration: 7,
              ease: "linear",
              repeat: Infinity,
            },
          }}
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black md:font-bold bg-linear-to-tl from-indigo-400 via-violet-600 to-cyan-400 bg-clip-text text-transparent leading-tight md:leading-13 lg:leading-17"
          style={{ backgroundSize: "200% 200%" }}
        >
          Create a Professional Resume in Minutes. No cost. No catch.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm text-neutral-500 font-medium mt-3 max-w-xl"
        >
          Create a standout resume fast — easy steps, modern designs, real
          results.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="cursor-pointer px-5 py-3 rounded-lg bg-linear-to-tl from-indigo-400 via-violet-600 to-cyan-400 hover:from-cyan-400 hover:via-violet-600 hover:to-indigo-400 transition-colors duration-400 ease-in-out text-white font-semibold mt-5 shadow-xl"
          onClick={() => navigate(`/build/final-resume/${Temp[0].id}`)}
        >
          Get Started for Free
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[12px] text-neutral-500 mt-1 font-medium"
        >
          No credit card required.
        </motion.p>
      </div>

      {/* Right Section (templates) */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
        className="relative md:h-[400px] lg:h-[500px] w-1/2 hidden md:flex items-center justify-center"
      >
        {/* Card 1 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.9 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute md:w-65 lg:w-80 top-0 right-0 md:hover:w-80 lg:hover:w-90 z-20 transition-all duration-500 bg-white shadow-xl rounded-xl p-4 md:p-6 hover:p-4 cursor-pointer overflow-hidden"
          onClick={() => navigate(`/build/final-resume/${Temp[2].id}`)}
        >
          <img
            src={Temp[2].image}
            alt="resume"
            className="object-cover w-full h-full rounded-xl"
          />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.9 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute md:w-65 lg:w-80 top-5 right-5 lg:right-15 md:hover:w-80 lg:hover:w-90 hover:z-100 z-15 transition-all duration-500 bg-white shadow-xl rounded-xl p-4 md:p-6 hover:p-4 cursor-pointer overflow-hidden"
          onClick={() => navigate(`/build/final-resume/${Temp[3].id}`)}
        >
          <img
            src={Temp[3].image}
            alt="resume"
            className="object-cover w-full h-full rounded-xl"
          />
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.9 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute md:w-65 lg:w-80 top-10 right-10 lg:right-30 md:hover:w-80 lg:hover:w-90 hover:z-100 z-10 transition-all duration-500 bg-white shadow-xl rounded-xl p-4 md:p-6 hover:p-4 cursor-pointer overflow-hidden"
          onClick={() => navigate(`/build/final-resume/${Temp[4].id}`)}
        >
          <img
            src={Temp[4].image}
            alt="resume"
            className="object-cover w-full h-full rounded-xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

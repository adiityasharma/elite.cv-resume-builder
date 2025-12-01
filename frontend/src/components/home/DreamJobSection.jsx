import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const DreamJobSection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[200px] md:h-[350px] flex items-center justify-center p-4 md:px-15">
      <div className="w-[900px] flex flex-col justify-center items-center">
        {/* Animated Gradient Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{
            opacity: 1,
            y: 0,
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // gradient shift
          }}
          transition={{
            opacity: { duration: 0.7, ease: "easeOut" },
            y: { duration: 0.7, ease: "easeOut" },
            backgroundPosition: {
              duration: 7,
              ease: "linear",
              repeat: Infinity,
            },
          }}
          viewport={{ once: true }}
          className="text-3xl md:text-7xl font-bold text-center bg-linear-to-tl from-indigo-400 via-violet-600 to-cyan-400 bg-clip-text text-transparent"
          style={{ backgroundSize: "200% 200%" }}
        >
          Let’s Land Your Dream Job Together
        </motion.h1>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
          className="mt-5 md:mt-10 cursor-pointer px-4 py-2 rounded-lg bg-linear-to-tl from-indigo-400 via-violet-600 to-cyan-400 hover:from-cyan-400 hover:via-violet-600 hover:to-indigo-400 transition-colors duration-400 ease-in-out text-white font-semibold shadow-xl"
          onClick={() => navigate(`/build/final-resume/tp1`)}
        >
          Get Started for Free
        </motion.button>

        {/* Small Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          viewport={{ once: true }}
          className="text-[12px] text-neutral-500 mt-1 font-medium"
        >
          No credit card required.
        </motion.p>
      </div>
    </div>
  );
};

export default DreamJobSection;

import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ResumeTemplates } from "../../resume-templates/index";
import { motion } from "motion/react";

const ResumeShowcase = () => {
  const temps = ResumeTemplates;
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    const handler = (e) => {
      e.preventDefault();
      el.scrollBy({
        left: e.deltaY * 10,
        behavior: "smooth",
      });
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 gap-10 lg:px-15">
      {/* Title animation */}
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl lg:text-4xl font-semibold text-center w-full lg:w-[50%] mt-10 lg:py-10"
      >
        Pick one of many world-class templates and build your resume in minutes
      </motion.h1>

      {/* Scroll list with stagger */}
      <motion.div
        ref={scrollRef}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
        className="w-full flex flex-row overflow-x-auto customScrollbar gap-2 sm:gap-4 md:gap-5 transition-transform duration-300 ease-in-out"
      >
        {temps.map((temp) => (
          <motion.div
            key={temp.id}
            variants={{
              hidden: { opacity: 0, x: 75 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -6 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/build/final-resume/${temp.id}`)}
            className="w-[210px] sm:w-[250px] md:w-[330px] h-full bg-white shadow border border-neutral-300 shrink-0 flex items-center justify-center p-2 md:p-5 rounded-xl cursor-pointer"
          >
            <div className="rounded-xl w-full h-full bg-blue-200 overflow-hidden shadow-sm">
              <img
                src={temp.image}
                alt="resume template"
                className="scale-102"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ResumeShowcase;

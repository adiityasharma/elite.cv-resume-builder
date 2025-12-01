import { features } from "../../constants";
import { motion } from "motion/react";

const WhyChooseUsSection = () => {
  return (
    <div id="features" className="w-full">
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-15">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Why Build Your Resume With Us?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the tools and guidance you need to create a
              professional resume that gets results.
            </p>
          </motion.div>

          {/* Stagger Animation Wrapper */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 md:gap-6 lg:gap-8 gap-y-2"
            initial="hidden"
            whileInView="show"
            transition={{ staggerChildren: 0.18 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="w-full flex items-center justify-center p-5 bg-white rounded-xl border border-neutral-200 shadow hover:shadow-xl transition-all duration-300 ease-in-out lg:p-10 cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <div className="text-4xl">{item.icon}</div>
                  </div>
                  <h3 className="mt-4 md:mt-2 text-lg font-semibold text-gray-900 text-center">
                    {item.title}
                  </h3>
                  <p className="mt-2 md:mt-1 text-sm text-center text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUsSection;

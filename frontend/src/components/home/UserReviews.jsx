import React from "react";
import { reviews } from "../../constants";
import { motion } from "motion/react";

const UserReviews = () => {
  return (
    <div className="w-full md:h-[600px] flex flex-col justify-center gap-10 p-4 md:px-6 lg:px-15 mt-10 md:mt-0">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-lg text-neutral-700 font-medium"
      >
        <p className="text-2xl md:text-3xl font-semibold text-center">
          Trusted by Thousands of Job Seekers
        </p>
        <p className="text-sm text-center">
          Don't just take our word for it. Here's what our users have to say.
        </p>
      </motion.div>

      {/* Review Cards Wrapper */}
      <motion.div
        initial="hidden"
        whileInView="show"
        transition={{ staggerChildren: 0.18 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col md:flex-row gap-2 md:gap-5 text-sm"
      >
        {reviews.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 45 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            whileHover={{ scale: 1.03, y: -6 }}
            className="flex flex-col justify-between p-8 rounded-2xl gap-8 w-full bg-white shadow-sm leading-tight cursor-pointer"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="italic text-neutral-800"
            >
              "{item.review}"
            </motion.p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 overflow-hidden rounded-full">
                <img src={item.image} alt={item.name} />
              </div>
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-neutral-600">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default UserReviews;

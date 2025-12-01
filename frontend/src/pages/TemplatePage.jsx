import React, { useEffect, useMemo, useState } from "react";
import TemplateCard from "../components/template-page/TemplateCard";
import { ResumeTemplates } from "../resume-templates";
import { motion, AnimatePresence } from "framer-motion";

const TemplateSelectionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EliteCV | Templates";
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredTemplates, setFilteredTemplates] = useState([]);

  const filteredCategories = [
    ...new Set(ResumeTemplates.map((item) => item.category)),
  ];

  useMemo(() => {
    if (selectedCategory === "All") {
      setFilteredTemplates(ResumeTemplates);
    } else {
      setFilteredTemplates(
        ResumeTemplates.filter((item) => item.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  // Framer Motion Variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-5 sm:mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Choose Your Resume Template
          </h1>
          <p className="text-lg text-gray-600">
            Browse our collection of professionally designed templates.
          </p>
        </header>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 p-4 bg-white rounded-lg shadow-md">
          <div className="flex items-center sm:mb-0">
            <label
              htmlFor="style-filter"
              className="text-gray-700 font-medium mr-3"
            >
              Filter:
            </label>
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              id="style-filter"
              className="border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="All">All</option>
              {filteredCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Templates Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredTemplates.map((template) => (
              <motion.div
                key={template.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <TemplateCard template={template} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default TemplateSelectionPage;

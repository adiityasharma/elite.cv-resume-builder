import React, { useMemo, useState } from "react";
import TemplateCard from "../components/template-page/TemplateCard";
import { ResumeTemplates } from "../resume-templates";

// Main Page Component
const TemplateSelectionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTemp, setSelectedTemp] = useState(null);

  const filteredCategories = [
    ...new Set(ResumeTemplates.map((item) => item.category)),
  ];

  const [filteredTemplates, setFilteredTemplates] = useState([]);

  useMemo(() => {
    console.log("re run");
    if (selectedCategory == "All") {
      setFilteredTemplates(ResumeTemplates);
    } else if (selectedCategory === "Professional") {
      setFilteredTemplates(
        ResumeTemplates.filter((item) => item.category == "Professional")
      );
    } else {
      setFilteredTemplates(
        ResumeTemplates.filter((item) => item.category == "Creative")
      );
    }
  }, [selectedCategory]);

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

        {/* Filter and Sort Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 p-4 bg-white rounded-lg shadow-md">
          {/* Style Filter */}
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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-8">
          {filteredTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelectionPage;

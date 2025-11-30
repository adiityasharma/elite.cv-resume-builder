import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import CreateResume from "./pages/CreateResume";
import PersonalInfoPage from "./components/resume/PersonalInfoPage";
import EducationInfo from "./components/resume/EducationInfo";
import SectionLayout from "./pages/SectionLayout";
import ExperiencInfo from "./components/resume/ExperiencInfo";
import SkillsInfo from "./components/resume/SkillsInfo";
import Summary from "./components/resume/Summary";
import AddSection from "./components/resume/AddSection";
import FinalResume from "./pages/FinalResume";
import TemplatePage from "./pages/TemplatePage";
// import ResumeEditPage from "./pages/ResumeEditPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<CreateResume />} />
          <Route path="resume/sections" element={<SectionLayout />}>
            <Route path="personal-info" element={<PersonalInfoPage />} />
            <Route path="education" element={<EducationInfo />} />
            <Route path="experience" element={<ExperiencInfo />} />
            <Route path="skills" element={<SkillsInfo />} />
            <Route path="summary" element={<Summary />} />
          </Route>
          <Route path="build/final-resume/:tempId" element={<FinalResume />} />
          <Route path="templates" element={<TemplatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

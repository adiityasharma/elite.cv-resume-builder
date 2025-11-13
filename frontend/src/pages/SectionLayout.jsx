import React from "react";
import PersonalInfoPage from "../components/resume/PersonalInfoPage";
import EducationInfo from "../components/resume/EducationInfo";
import { Outlet } from "react-router-dom";

const SectionLayout = () => {
  return (
    <section className="w-full px-15">
      <Outlet />
    </section>
  );
};

export default SectionLayout;

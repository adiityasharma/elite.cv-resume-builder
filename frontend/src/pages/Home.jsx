import React from "react";
import HeroSection from "../components/home/HeroSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import GetHiredSection from "../components/home/GetHiredSection";
import ResumeShowcase from "../components/home/ResumeShowcase";
import UserReviews from "../components/home/UserReviews";
import DreamJobSection from "../components/home/DreamJobSection";

const Home = () => {
  return (
    <main className=" px-15 selection:bg-[#00A7FA] selection:text-white ">
      <HeroSection />
      <WhyChooseUsSection />
      <GetHiredSection />
      <ResumeShowcase />
      <UserReviews />
      <DreamJobSection />
    </main>
  );
};

export default Home;

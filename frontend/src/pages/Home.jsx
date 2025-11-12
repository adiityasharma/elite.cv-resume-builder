import React from "react";
import HeroSection from "../components/HeroSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import GetHiredSection from "../components/GetHiredSection";

const Home = () => {
  return (
    <div className="container mx-auto pt-20 px-15 selection:bg-[#00A7FA] selection:text-white">
      <HeroSection />
      <WhyChooseUsSection />
      <GetHiredSection />
    </div>
  );
};

export default Home;

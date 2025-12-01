import React, { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import GetHiredSection from "../components/home/GetHiredSection";
import ResumeShowcase from "../components/home/ResumeShowcase";
import UserReviews from "../components/home/UserReviews";
import DreamJobSection from "../components/home/DreamJobSection";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EliteCV";
  }, []);

  return (
    <main className=" w-full h-full flex flex-col items-center justify-center mt-15 gap-10 selection:bg-[#00A7FA] selection:text-white ">
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

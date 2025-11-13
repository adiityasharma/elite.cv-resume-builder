import React from "react";
import { links } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-70 flex flex-col bg-white/30 backdrop-blur-2xl items-center justify-center px-15 py-8">
      <div className="w-full h-full grid grid-cols-4 gap-10">
        <div className="w-full h-full ">
          <img className="w-50" src="/elitecv.svg" alt="" />
          <p className="text-sm mt-2 font-semibold text-neutral-500">
            Your Story, Your Style, Your Resume
          </p>
        </div>

        <div className="w-full h-full ">
          <h1 className="text-2xl mb-3 font-semibold">Products</h1>
          <div className="flex flex-col ">
            {links.map((link, index) => (
              <Link
                key={index}
                className="text-sm font-medium text-neutral-500 hover:text-[#00A7FA] transition-colors duration-300"
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full h-full">
          <h1 className="text-2xl mb-3 font-semibold">Company</h1>
          <div className="flex flex-col ">
            {["About Us", "Blog", "Contact", "Careers"].map((link, index) => (
              <Link
                key={index}
                className="text-sm font-medium text-neutral-500 hover:text-[#00A7FA] transition-colors duration-300"
                to={"#"}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full h-full">
          <h1 className="text-2xl mb-3 font-semibold">Legal</h1>
          <div className="flex flex-col ">
            {["Terms of Service", "Privacy Policy", "Cookie Policy"].map(
              (link, index) => (
                <Link
                  key={index}
                  className="text-sm font-medium text-neutral-500 hover:text-[#00A7FA] transition-colors duration-300"
                  to={"#"}
                >
                  {link}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
      <h1 className="text-sm text-neutral-600">
        © 2025 EliteCV. All rights reserved.
      </h1>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { links } from "../constants";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed w-full h-18 shadow flex items-center justify-between px-15 bg-white/30 backdrop-blur-">
      <div>
        <Link to="/">
          <img src="/elitecv.svg" alt="" className="w-40" />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5 font-semibold  text-neutral-500">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`hover:text-[#00A7FA] hover:underline underline-offset-5 cursor-pointer ${
              location.pathname.includes(link.path) ? "text-[#00A7FA]" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link to="/register">
          <div className="bg-[#00A7FA] px-5 py-2 rounded-lg text-white font-semibold">
            Sign Up Free
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

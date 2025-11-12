import React from "react";
import { Link, useLocation } from "react-router-dom";
import { links } from "../constants";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed w-full h-18 flex items-center justify-between px-15  z-100">
      <div className="shadow-md px-5 py-2 rounded-full backdrop-blur-2xl bg-white/30" >
        <Link to="/">
          <img src="/elitecv.svg" alt="" className="w-40" />
        </Link>
      </div>

      <div className="flex items-center justify-center gap-5 font-semibold  bg-white/50 backdrop-blur rounded-full px-5 py-2 shadow-md">
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
      </div>

      <Link to="/register">
        <div className="bg-[#00A7FA] px-5 py-2 rounded-lg text-white font-semibold shadow-md">
          Sign Up Free
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;

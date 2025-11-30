import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { links } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full flex items-center justify-between p-4 md:px-6 lg:px-15 bg-white/40 backdrop-blur z-200 border-b border-neutral-200">
      {/* Logo */}
      <Link to="/">
        <img src="/elitecv.svg" alt="" className="w-25 md:w-30 lg:w-40" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center justify-center md:gap-3 md:text-sm lg:gap-5 font-semibold ">
        <Link
          to="/"
          className={`hover:text-[#00A7FA] hover:underline underline-offset-5 ${
            location.pathname === "/" ? "text-[#00A7FA]" : ""
          }`}
        >
          Home
        </Link>

        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`hover:text-[#00A7FA] hover:underline underline-offset-5 ${
              location.pathname.includes(link.path) ? "text-[#00A7FA]" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setOpen(!open)} className="block md:hidden z-30">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay (fade) */}
      {/* Click on the overlay closes menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/40 transition-opacity duration-300 z-20 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white z-30 shadow-lg flex flex-col items-center justify-center gap-8 text-xl font-semibold
        transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <Link
          to="/"
          className={`hover:text-[#00A7FA] hover:underline underline-offset-5 ${
            location.pathname === "/" ? "text-[#00A7FA]" : ""
          }`}
        >
          Home
        </Link>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            onClick={() => setOpen(false)}
            className={`hover:text-[#00A7FA] ${
              location.pathname.includes(link.path) ? "text-[#00A7FA]" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

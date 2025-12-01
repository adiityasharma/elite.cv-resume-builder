import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { links } from "../constants";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Framer Motion Variants
  const overlayVariants = {
    hidden: { opacity: 0, pointerEvents: "none" },
    visible: {
      opacity: 0.4,
      pointerEvents: "auto",
      transition: { duration: 0.3 },
    },
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: "0%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.05 } }),
  };

  return (
    <nav className="fixed w-full flex items-center justify-between p-4 md:px-6 lg:px-15 bg-white/40 backdrop-blur z-50 border-b border-neutral-200">
      {/* Logo */}
      <Link to="/">
        <img
          src="/elitecv.svg"
          alt="EliteCV"
          className="w-25 md:w-30 lg:w-40"
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center justify-center md:gap-3 md:text-sm lg:gap-5 font-semibold">
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
      <button onClick={() => setOpen(!open)} className="block md:hidden z-50">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* AnimatePresence for mobile overlay & menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed top-0 left-0 w-full h-screen bg-black z-40"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              className="fixed top-0 right-0 h-screen w-64 bg-white z-50 shadow-lg flex flex-col items-center justify-center gap-8 text-xl font-semibold"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Link
                to="/"
                className={`hover:text-[#00A7FA] hover:underline underline-offset-5 ${
                  location.pathname === "/" ? "text-[#00A7FA]" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>

              {links.map((link, index) => (
                <motion.div
                  key={link.path}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`hover:text-[#00A7FA] ${
                      location.pathname.includes(link.path)
                        ? "text-[#00A7FA]"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import React from "react";

const Button = ({ children, styles, onClick }) => {
  return (
    <button
      className={`px-10 py-3 rounded-full bg-[#0068fa] text-white font-bold text-lg cursor-pointer hover:bg-[#0053fa] ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

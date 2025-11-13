import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const GoBackBtn = ({ children, styles }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className={`font-bold  text-[#0081fa] cursor-pointer flex items-center justify-center gap-2 hover:text-[#0047fa] ${styles}`}
    >
      <ArrowLeft size={20} />
      <p className="underline underline-offset-2">{children}</p>
    </button>
  );
};

export default GoBackBtn;

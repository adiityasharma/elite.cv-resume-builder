import React from "react";

const Input = ({ placeholder, type, onChange, value, styles, label }) => {
  return (
    <div className="flex flex-col justify-center items-start ">
      {label && (
        <label htmlFor={label} className="font-semibold text-sm">
          {label}
        </label>
      )}
      <input
        id={label}
        className={`border mt-1 border-neutral-500 outline-none rounded-sm px-3 py-2 bg-white/50 ${styles}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;

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
        className={`border-2 mt-1 border-neutral-200 rounded-sm px-3 py-2 bg-white focus-within:bg-blue-50  focus-within:outline-2 focus-within:outline-blue-600 ${styles}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;

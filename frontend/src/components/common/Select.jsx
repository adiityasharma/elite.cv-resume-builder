import React from "react";

const Select = ({ children, styles }) => {
  return (
    <select
      name="Month"
      id="month"
      className={` border-2 mt-1 border-neutral-300 outline-none rounded-sm px-3  bg-white text-gray-700 focus:outline-none appearance-none ${styles}`}
    >
      <option defaultChecked value="none">
        Select
      </option>
      {children}
    </select>
  );
};

export default Select;

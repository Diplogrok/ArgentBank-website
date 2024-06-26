import React from "react";

const FormInput = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="block text-gray-700 font-bold text-left">
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        className="border border-black w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default FormInput;

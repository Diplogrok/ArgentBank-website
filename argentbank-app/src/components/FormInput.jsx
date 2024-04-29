import React from "react";

const FormInput = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-4 ">
      <label htmlFor={label} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default FormInput;

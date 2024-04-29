import React from "react";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={label}
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Checkbox;

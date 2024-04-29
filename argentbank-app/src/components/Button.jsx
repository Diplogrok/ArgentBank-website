import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="block w-full py-2 px-4 bg-green-500 text-white  hover:bg-green-700"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

import React from "react";
import classNames from "classnames";

const Button = ({ children, onClick, className, options = {} }) => {
  const buttonClasses = classNames(
    "py-2 px-4 bg-green-500 text-white",
    {
      "border-2 border-b-transparent border-r-transparent border-t-black border-l-black":
        options.border2TopLeft,
      "border-2 border-l-transparent border-t-transparent border-b-black border-r-black":
        options.border2BottomRight,
    },
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

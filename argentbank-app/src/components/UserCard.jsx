import React, { useState } from "react";
import Button from "./Button";
import classNames from "classnames";

const UserCard = ({ title, amount, description, elementType, className }) => {
  const [clicked, setClicked] = useState(false);
  const handleButtonClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 100);
  };

  const buttonClasses = classNames("py-2 px-4", {
    "border-2 border-b-transparent border-r-transparent border-t-black border-l-black":
      clicked,
    "border-2 border-l-transparent border-t-transparent border-b-black border-r-black":
      !clicked,
  });

  return (
    <section className={`flex justify-between w-3/4 m-4 p-6 ${className}`}>
      <div className="text-left">
        <h3 className="text-lg">{title}</h3>
        <p className="text-4xl font-bold">{amount}</p>
        <p className="text-lg">{description}</p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center">
        {elementType === "button" ? (
          <Button
            className={buttonClasses}
            onClick={handleButtonClick}
            options={{
              border2TopLeft: clicked,
              border2BottomRight: !clicked,
            }}>
            View transactions
          </Button>
        ) : (
          <i className="fa fa-angle-right text-3xl md:text-8xl "></i>
        )}
      </div>
    </section>
  );
};

export default UserCard;

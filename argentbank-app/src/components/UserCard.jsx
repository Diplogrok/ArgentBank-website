import Button from "./Button";
import React, { useState } from "react";

const UserCard = ({ title, amount, description }) => {
  const [clicked, setClicked] = useState(false);
  const handleButtonClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 100);
  };

  return (
    <section className="flex flex-col md:flex-row justify-between bg-white w-3/4 m-4 p-6">
      <div className="text-left">
        <h3 className="text-lg">{title}</h3>
        <p className="text-4xl font-bold">{amount}</p>
        <p className="text-lg">{description}</p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center">
        <Button
          className="py-2 px-4"
          onClick={handleButtonClick}
          options={{
            border2TopLeft: clicked,
            border2BottomRight: !clicked,
          }}>
          View transactions
        </Button>
      </div>
    </section>
  );
};

export default UserCard;

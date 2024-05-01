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
    <section className="flex flex-col md:flex-row justify-between bg-white my-4 md:p-8">
      <div className="text-left">
        <h3 className="text-lg md:text-xl">{title}</h3>
        <p className="text-2xl md:text-3xl font-bold">{amount}</p>
        <p className="">{description}</p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center">
        <Button
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

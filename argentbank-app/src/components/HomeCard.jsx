import React from "react";

const HomeCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="rounded-full bg-transparent border-8 border-customGreen p-4 mb-4">
        <img
          src={require(`../assets${icon}`)}
          alt="Icon"
          className="w-24 h-24"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default HomeCard;

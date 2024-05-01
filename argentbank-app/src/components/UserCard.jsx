import React from "react";
import Button from "./Button";

const UserCard = ({ title, amount, description }) => {
  return (
    <section className="flex flex-col md:flex-row justify-between border border-black bg-white w-80 md:w-80 xl:w-96 mx-auto my-4 p-6 md:p-8">
      <div>
        <h3 className="account-title text-lg md:text-xl">{title}</h3>
        <p className="account-amount text-2xl md:text-3xl font-bold">
          {amount}
        </p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta flex flex-col md:flex-row md:items-center">
        <Button>View transactions</Button>
      </div>
    </section>
  );
};

export default UserCard;

import React from "react";
import bankTreeImage from "../assets/img/bank-tree.jpeg";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bankTreeImage})` }}>
      <div className="w-80 h-96 text-left">
        <div className="bg-white p-8">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle font-bold text-2xl">No fees.</p>
          <p className="subtitle font-bold text-2xl ">No minimum deposit.</p>
          <p className="subtitle font-bold text-2xl mb-4">
            High interest rates.
          </p>
          <p className="text text-base">
            Open a savings account with Argent Bank today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

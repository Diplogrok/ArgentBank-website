import React from "react";
import useMedia from "react-use/lib/useMedia";
import bankTreeImage from "../assets/img/bank-tree.webp";
import bankTreeMobileImage from "../assets/img/bank-tree-mobile.webp";

const Banner = () => {
  const isMobile = useMedia("(max-width: 767px)");

  return (
    <div
      className="bg-cover bg-center bg-no-repeat flex items-center justify-center sm:justify-end pf-0 sm:pr-28"
      style={{
        backgroundImage: `url(${
          isMobile ? bankTreeMobileImage : bankTreeImage
        })`,
        height: "400px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}>
      <div className="bg-white text-left p-8 w-80">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="font-bold text-2xl">No fees.</p>
        <p className="font-bold text-2xl">No minimum deposit.</p>
        <p className="font-bold text-2xl mb-4">High interest rates.</p>
        <p className="text-lg">
          Open a savings account with Argent Bank today!
        </p>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";

const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-0 transition-opacity duration-500">
      <div className="w-12 h-12 border-4 border-white border-opacity-30 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;

import React from "react";

const Footer = ({ variant }) => {
  return (
    <footer
      className={`flex justify-center ${
        variant !== "edit" ? "border-t-2 border-gray-300 py-8" : ""
      }`}>
      <p className="m-0 p-0">Copyright 2020 Argent Bank</p>
    </footer>
  );
};

export default Footer;

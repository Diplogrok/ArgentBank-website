import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const EditUserInfoLayout = ({ children }) => {
  return (
    <>
      <Navbar variant="edit" />
      {children}
      <Footer variant="edit" />
    </>
  );
};

export default EditUserInfoLayout;

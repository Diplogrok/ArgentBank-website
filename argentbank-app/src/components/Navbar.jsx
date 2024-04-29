import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/index.css";

const Navbar = () => {
  return (
    <header className="bg-red-900">
      <nav>
        <NavLink to="/">ARGENT BANK</NavLink>
        <NavLink to="/SignIn">SignIn</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

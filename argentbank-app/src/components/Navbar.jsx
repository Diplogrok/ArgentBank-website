import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="App-header">
      <nav>
        <NavLink to="/">HomePage</NavLink>
        <NavLink to="/SignIn">SignIn</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

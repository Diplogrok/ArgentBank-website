import React from "react";
import { NavLink, useNavigation } from "react-router-dom";
import Spinner from "../components/Spinner";
import { Outlet } from "react-router-dom";

function Root() {
  const { state } = useNavigation();

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">HomePage</NavLink>
          <NavLink to="/SignIn">SignIn</NavLink>
        </nav>
      </header>
      <div>
        {state === "loading" && <Spinner />}
        <Outlet />
      </div>
    </>
  );
}

export default Root;

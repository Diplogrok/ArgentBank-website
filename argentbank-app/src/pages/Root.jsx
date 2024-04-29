import React from "react";
import { useNavigation } from "react-router-dom";
import Spinner from "../components/Spinner";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

function Root() {
  const { state } = useNavigation();

  return (
    <>
      <header>WELCOME</header>
      <div>
        {state === "loading" && <Spinner />}
        <Outlet />
      </div>
    </>
  );
}

export default Root;

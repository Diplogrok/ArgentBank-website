import React from "react";
import { useNavigation } from "react-router-dom";
import Spinner from "../components/Spinner";
import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";

function Root() {
  const { state } = useNavigation();

  return (
    <>
      <div>
        <Banner />
        {state === "loading" && <Spinner />}
        <Outlet />
      </div>
    </>
  );
}

export default Root;

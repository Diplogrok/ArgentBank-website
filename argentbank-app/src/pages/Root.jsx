import React from "react";
import { useNavigation } from "react-router-dom";
import Spinner from "../components/Spinner";
import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/Card";
import RootData from "../assets/data/RootData.json";

function Root() {
  const { state } = useNavigation();

  return (
    <>
      <div>
        <Banner />
        {state === "loading" && <Spinner />}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
          {RootData.map((data) => (
            <Card
              key={data.id}
              icon={data.icon}
              title={data.title}
              description={data.description}
            />
          ))}
        </section>
        <Outlet />
      </div>
    </>
  );
}

export default Root;

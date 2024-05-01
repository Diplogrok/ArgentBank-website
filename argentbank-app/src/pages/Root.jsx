import React from "react";
import Banner from "../components/Banner";
import Card from "../components/HomeCard";
import RootData from "../assets/data/RootData.json";

function Root() {
  return (
    <>
      <div>
        <Banner />
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
      </div>
    </>
  );
}

export default Root;

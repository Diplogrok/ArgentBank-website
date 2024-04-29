import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

function UserPage() {
  const data = useLoaderData();

  return (
    <>
      <h1>Welcome back</h1>
      <ul>
        {data.map((dataItem) => (
          <li key={dataItem.id}>
            <NavLink to={dataItem.id}>{dataItem.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserPage;

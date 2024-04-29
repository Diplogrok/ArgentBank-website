import React from "react";
import { useRouteError } from "react-router-dom";

function PageError() {
  const error = useRouteError();

  return (
    <>
      <h1>Oops une erreur est survenue</h1>
      <p>{error?.error?.toString() ?? error?.toString()}</p>
    </>
  );
}

export default PageError;

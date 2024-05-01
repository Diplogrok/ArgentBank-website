import React from "react";
import { useRouteError } from "react-router-dom";

function PageError() {
  const error = useRouteError();

  console.error("Une erreur est survenue :", error);

  const userMessage = "Une erreur est survenue. Veuillez réessayer plus tard.";

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-customGreen mb-4">Erreur 404</h1>
      <p className="text-2xl text-gray-700 p-6">{userMessage}</p>
    </div>
  );
}

export default PageError;

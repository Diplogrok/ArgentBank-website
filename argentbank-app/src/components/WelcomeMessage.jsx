import React from "react";

function WelcomeMessage({ firstName, lastName }) {
  return (
    <h1 className="font-bold text-3xl pb-6">
      Welcome Back <br />
      {`${firstName} ${lastName}`}!
    </h1>
  );
}

export default WelcomeMessage;

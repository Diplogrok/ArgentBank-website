import React from "react";
import SignInForm from "../components/SignInForm";

function SignIn() {
  return (
    <div className="flex flex-col">
      <div className="flex-grow bg-customPurple pb-96">
        <div className="flex justify-center pt-11">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}

export default SignIn;

import React from "react";
import SignInForm from "../components/SignInForm";

function SignIn() {
  return (
    <div className="flex flex-col">
      <div className="flex-grow bg-violet-950 pb-80">
        <div className="flex justify-center pt-12">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}

export default SignIn;

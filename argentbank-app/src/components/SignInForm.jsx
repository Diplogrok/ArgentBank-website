import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Checkbox from "./Checkbox";
import FormInput from "./FormInput";

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {};

  return (
    <form className="bg-white p-4">
      <i className="fa fa-user-circle sign-in-icon mb-8"></i>
      <h1 className="text-3xl mb-8">Sign In</h1>
      <FormInput
        label="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <FormInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="mb-4">
        <Checkbox
          label="Remember me"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
      </div>
      <Button onClick={handleSignIn}>Sign In</Button>
      <NavLink
        to="/UserPage"
        className="block mt-4 text-center text-purple-500">
        Go to User Page
      </NavLink>
    </form>
  );
}

export default SignInForm;

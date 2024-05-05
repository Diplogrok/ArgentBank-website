import React, { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import FormInput from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "../features/user/userSlice";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = async (e) => {
    e.preventDefault();
    console.log("Attempting to log in...");
    try {
      let userCredentials = {
        email,
        password,
      };
      const resultAction = await dispatch(loginUser(userCredentials));
      console.log("Login attempt result action:", resultAction);
      const { payload, error: resultError } = resultAction;
      console.log("Payload:", payload);
      console.log("Error:", resultError);
      if (payload) {
        console.log("Login successful. Redirecting to UserPage...");
        localStorage.setItem("token", payload.token);
        dispatch(UserProfile(payload.token));
        navigate("/UserPage");
      } else if (resultError) {
        console.error("An error occurred during login:", resultError);
      } else {
        console.error("No payload or error received.");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <form className="bg-white p-4 pr-12 pl-12" onSubmit={handleLoginEvent}>
      <i className="fa fa-user-circle sign-in-icon pt-4 pb-4"></i>
      <h1 className="text-2xl font-bold mb-8">Sign In</h1>
      <FormInput
        label="Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      <Button className="w-full underline" type="submit">
        {loading ? "loading..." : "Sign in"}
      </Button>
      {error && <div>{error}</div>}
    </form>
  );
}

export default SignInForm;

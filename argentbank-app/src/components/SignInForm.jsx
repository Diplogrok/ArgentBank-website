import React, { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import FormInput from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, userProfile } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const { loading, error, profileData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = async (e) => {
    e.preventDefault();
    try {
      let userCredentials = {
        email,
        password,
      };
      console.log("User credentials:", userCredentials);
      const resultAction = await dispatch(loginUser(userCredentials));
      console.log("Result action:", resultAction);

      const { payload, error: resultError } = resultAction;

      if (payload) {
        localStorage.setItem("token", payload.token);
        console.log("Dispatching userProfile action");
        dispatch(userProfile());
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
      <i className="fa fa-user-circle pt-4 pb-4"></i>
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
      <Button className="w-full underline py-2 px-4" type="submit">
        {loading ? "loading..." : "Sign in"}
      </Button>
      {error && <div>{error}</div>}
    </form>
  );
}

export default SignInForm;

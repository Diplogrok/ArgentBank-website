import React, { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import FormInput from "./FormInput";

function SignInForm({ onSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Appeler la fonction de gestion de la connexion passée par les props
    onSignIn({ username, password });
  };

  return (
    <form className="bg-white p-4 pr-12 pl-12" onSubmit={handleSubmit}>
      <i className="fa fa-user-circle sign-in-icon pt-4 pb-4"></i>
      <h1 className="text-2xl font-bold mb-8">Sign In</h1>
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
      {/* Utilisez le bouton de type "submit" pour déclencher l'événement de soumission du formulaire */}
      <Button className="w-full underline" type="submit">
        Sign In
      </Button>
    </form>
  );
}

export default SignInForm;

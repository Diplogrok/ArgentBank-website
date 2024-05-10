import React, { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import FormInput from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, userProfile } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  // State Hooks pour gérer les champs du formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Sélecteur Redux pour récupérer loading et error du state
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Gestion de l'événement de connexion
  const handleLoginEvent = async (e) => {
    e.preventDefault();
    try {
      // Crée un objet userCredentials avec l'email et le mot de passe
      let userCredentials = {
        email,
        password,
      };
      // Envoie une action Redux pour effectuer la connexion
      const resultAction = await dispatch(loginUser(userCredentials));

      // Extrait les données reçues de l'action Redux
      const { payload, error: resultError } = resultAction;

      if (payload) {
        // Stocke le token d'authentification dans le stockage local du navigateur après une connexion réussie
        localStorage.setItem("token", payload.token);
        // Envoie une action Redux pour récupérer le profil de l'utilisateur après la connexion
        dispatch(userProfile());
        // Redirige l'utilisateur vers la page "UserPage" après une connexion réussie
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
      {error && <div className="text-red-500">{error}</div>}
    </form>
  );
}

export default SignInForm;

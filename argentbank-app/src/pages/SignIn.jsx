import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authAction";
import SignInForm from "../components/SignInForm";

function SignIn() {
  const dispatch = useDispatch();

  const handleSignIn = async (userData) => {
    try {
      // Simuler l'appel à une API d'authentification
      const response = await fakeApiCall(userData);

      if (response.success) {
        // Si l'authentification réussit, envoyez les données de l'utilisateur au store
        dispatch(login(userData));
        alert("Connexion réussie !");
      } else {
        // Gérez les erreurs d'authentification
        alert("Identifiants incorrects. Veuillez réessayer.");
      }
    } catch (error) {
      // Gérez les erreurs de requête
      alert(
        "Une erreur s'est produite lors de la connexion. Veuillez réessayer."
      );
    }
  };

  // Fonction simulant un appel API avec une réponse aléatoire
  const fakeApiCall = (userData) => {
    return new Promise((resolve, reject) => {
      // Simuler une réponse aléatoire après un court délai
      setTimeout(() => {
        if (
          userData.username === "utilisateur" &&
          userData.password === "motdepasse"
        ) {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex-grow bg-customPurple pb-96">
        <div className="flex justify-center pt-11">
          <SignInForm onSignIn={handleSignIn} />
        </div>
      </div>
    </div>
  );
}

export default SignIn;

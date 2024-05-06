import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ArgentBankLogo from "../assets/img/argentBankLogo.png";
import EditArgentBankLogo from "../assets/img/edit-argentBankLogo.png";
import { logoutUser } from "../features/user/userSlice";

const Navbar = ({ variant }) => {
  const { user, profileData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    console.log("Déconnexion réussie !");
    localStorage.removeItem("token");
  };

  const EditColor = variant === "edit" ? "text-customGreen" : "text-gray-700";
  const EditSize = variant === "edit" ? "text-2xl" : "";

  return (
    <header className="py-2 px-5">
      <nav className="flex items-center justify-between">
        {variant === "edit" ? ( // Condition pour afficher le logo édité en mode "edit"
          <NavLink to="/" className="flex items-center">
            <img
              src={EditArgentBankLogo}
              alt="Argent Bank Logo"
              className="w-48 h-auto"
            />
          </NavLink>
        ) : (
          <NavLink to="/" className="flex items-center">
            {" "}
            {/* Affichage du logo normal */}
            <img
              src={ArgentBankLogo}
              alt="Argent Bank Logo"
              className="w-48 h-auto"
            />
          </NavLink>
        )}
        <div>
          {user ? (
            <div className="flex items-center">
              {variant === "edit" && (
                <>
                  {profileData && (
                    <NavLink
                      to="/UserPage"
                      className={`${EditColor} ${EditSize} font-bold mr-2 hover:underline`}>
                      {profileData.userName}
                    </NavLink>
                  )}
                  <i
                    className={`fa fa-user-circle pt-4 pb-4 pr-6 ${EditColor} ${EditSize}`}></i>
                  <i
                    className={`fa fa-gear pt-4 pb-4 pr-6 ${EditColor} ${EditSize}`}></i>
                </>
              )}
              {variant !== "edit" && profileData && (
                <>
                  <i className={`fa fa-user-circle pt-4 pb-4 pr-1`}></i>
                  <NavLink
                    to="/UserPage"
                    className={`font-bold mr-2 hover:underline`}>
                    {profileData.userName}
                  </NavLink>
                </>
              )}
              <NavLink
                to="/"
                onClick={handleLogout}
                className="text-gray-700 font-bold mr-2 hover:underline">
                {variant === "edit" ? (
                  <i className={`fa fa-power-off ${EditColor} ${EditSize}`}></i>
                ) : (
                  "Sign Out"
                )}
              </NavLink>
            </div>
          ) : (
            <NavLink
              to="/SignIn"
              className="text-gray-700 font-bold mr-2 hover:underline">
              Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

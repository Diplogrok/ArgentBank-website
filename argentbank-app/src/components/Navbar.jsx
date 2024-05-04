import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import ArgentBankLogo from "../assets/img/argentBankLogo.png";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className=" py-2 px-5">
      <nav className="flex items-center justify-between ">
        <NavLink to="/" className="flex items-center">
          <img
            src={ArgentBankLogo}
            alt="Argent Bank Logo"
            className="w-48 h-auto"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          {user ? (
            <NavLink
              to="/SignIn"
              onClick={handleLogout}
              className="text-gray-700 font-bold mr-2 hover:underline">
              <i className="fa fa-sign-out-alt mr-1"></i>
              Sign Out
            </NavLink>
          ) : (
            <NavLink
              to="/SignIn"
              className="text-gray-700 font-bold mr-2 hover:underline">
              <i className="fa fa-user-circle mr-1"></i>
              Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

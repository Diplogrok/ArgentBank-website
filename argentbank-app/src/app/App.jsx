import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import EditLayout from "../components/EditLayout";
import Root from "../pages/Root";
import UserPage from "../pages/UserPage";
import SignIn from "../pages/SignIn";
import EditUserInfo from "../pages/EditUserInfo";
import PageError from "../pages/PageError"; // Importez PageError depuis le bon chemin
import { useSelector } from "react-redux";
import "../assets/css/index.css";

function App() {
  const isAuthenticated = useSelector((state) => state.user.token !== null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Root />
            </DefaultLayout>
          }
        />
        <Route
          path="/SignIn"
          element={
            <DefaultLayout>
              <SignIn />
            </DefaultLayout>
          }
        />
        <Route
          path="/UserPage"
          element={
            isAuthenticated ? (
              <DefaultLayout>
                <UserPage />
              </DefaultLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/EditUserInfo"
          element={
            isAuthenticated ? (
              <EditLayout>
                <EditUserInfo />
              </EditLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="*"
          element={
            <DefaultLayout>
              <PageError />
            </DefaultLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

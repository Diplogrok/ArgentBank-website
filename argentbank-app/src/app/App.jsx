import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PageError from "../pages/PageError";
import Layout from "../components/Layout";
import Root from "../pages/Root";
import UserPage from "../pages/UserPage";
import SignIn from "../pages/SignIn";
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
            <Layout>
              <Root />
            </Layout>
          }
        />
        <Route
          path="/SignIn"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route
          path="/UserPage"
          element={
            isAuthenticated ? (
              <Layout>
                <UserPage />
              </Layout>
            ) : (
              <Navigate to="/SignIn" />
            )
          }
        />
        <Route
          path="/*"
          element={
            <Layout>
              <PageError />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

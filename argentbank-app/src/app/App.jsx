import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageError from "../pages/PageError";
import Layout from "../components/Layout";
import Root from "../pages/Root";
import UserPage from "../pages/UserPage";
import SignIn from "../pages/SignIn";
import "../assets/css/index.css";
import Counter from "../features/counter/Counter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Root />
              <Counter />
            </Layout>
          }
        />
        <Route
          path="SignIn"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route
          path="UserPage"
          element={
            <Layout>
              <UserPage />
            </Layout>
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
    </BrowserRouter>
  );
}

export default App;

/*
 loader: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      return response.json();
    }, */

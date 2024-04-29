import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import PageError from "../pages/PageError";
import Layout from "../components/Layout";
import Root from "../pages/Root";
import UserPage from "../pages/UserPage";
import SignIn from "../pages/SignIn";
import "../assets/css/index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Root />
      </Layout>
    ),
    errorElement: <PageError />,
  },
  {
    path: "SignIn",
    element: (
      <Layout>
        <SignIn />
      </Layout>
    ),
  },
  {
    path: "UserPage",
    element: (
      <Layout>
        <UserPage />
      </Layout>
    ),
    loader: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      return response.json();
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

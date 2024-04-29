import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import PageError from "../pages/PageError";
import Root from "../pages/Root";
import UserPage from "../pages/UserPage";
import SignIn from "../pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: "SignIn",
        element: <SignIn />,
      },
      {
        path: "UserPage",
        element: <UserPage />,
        loader: async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
          );
          return response.json();
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

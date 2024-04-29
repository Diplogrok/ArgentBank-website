import React from "react";
import {
  NavLink,
  useLoaderData,
  useNavigation,
  useRouteError,
} from "react-router-dom";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Spinner from "../components/Spinner";

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
function SignIn() {
  return (
    <>
      <h1>Hello</h1>
      <NavLink to="/UserPage">Go to User Page</NavLink>
    </>
  );
}

function PageError() {
  const error = useRouteError();
  return (
    <>
      <h1>Oops une erreur est survenue</h1>
      <p>{error?.error?.toString() ?? error?.toString()}</p>
    </>
  );
}

function UserPage() {
  const data = useLoaderData();
  return (
    <>
      <h1>Welcome back</h1>
      <ul>
        {data.map((data) => (
          <li key={data.id}>
            <NavLink to={data.id}>{data.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

function Root() {
  const { state } = useNavigation();
  return (
    <>
      <header className="App-header">
        <nav>
          <NavLink to="/">HomePage</NavLink>
          <NavLink to="/SignIn">SignIn</NavLink>
        </nav>
      </header>
      <div>
        {state === "loading" && <Spinner />}
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;

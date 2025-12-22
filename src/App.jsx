import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorPage from "./pages/error";
import Dashboard from "./pages/dashboard";
import BalancePage from "./pages/balance";

function App() {
    const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      errorElement:<ErrorPage/>,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    },
  ]);


  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
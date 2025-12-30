import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorPage from "./pages/error";
import Dashboard from "./pages/dashboard";
import BalancePage from "./pages/balance";
import TransactionPage from "./pages/transaction";
import BillPage from "./pages/bill";
import ExpensePage from "./pages/expense";
import GoalsPage from "./pages/goal";
import SettingsPage from "./pages/setting";


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
    {
      path: "/transaction",
      element: <TransactionPage />,
    },
    {
      path: "/bill",
      element: <BillPage />,
    },
    {
      path: "/expense",
      element: <ExpensePage />,
    },
     {
      path: "/goal",
      element: <GoalsPage />,
    },
    {
      path: "/setting",
      element: <SettingsPage />,
    },
  ]);


  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
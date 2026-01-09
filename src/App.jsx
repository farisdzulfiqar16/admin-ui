import "./App.css";
import { 
  createBrowserRouter, 
  RouterProvider,
  Navigate, 
} from "react-router-dom";
import { AuthContext } from "./context/authContext";
import react , { useContext } from "react";


// halaman sebelum login
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorPage from "./pages/error";
// halamanan setelah login
import Dashboard from "./pages/dashboard";
import BalancePage from "./pages/balance";
import TransactionPage from "./pages/transaction";
import BillPage from "./pages/bill";
import ExpensePage from "./pages/expense";
import GoalsPage from "./pages/goal";
import SettingsPage from "./pages/setting";


function App() {
  const { user } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  const NotRequireAuth = ({ children }) => {
    return user ? <Navigate to="/" /> : children;
  };



    const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: (
        <NotRequireAuth>
          <SignInPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/register",
      element: (
        <NotRequireAuth>
          <SignUpPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/balance",
      element: (
        <RequireAuth>
          <BalancePage />
        </RequireAuth>
      ),
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
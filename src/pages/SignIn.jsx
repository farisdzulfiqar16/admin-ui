import React , { useContext , useState } from 'react'
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";

function SignIn() {
  const { login } = useContext(AuthContext);

  // state untuk snackbar
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  }); 
  
  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  // fungsi untuk menangani login
  	const handleLogin = async (email, password) => {
    try {
      const { refreshToken } = await loginService(email, password);
			
			login(refreshToken);
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.msg,
        severity: "error"
      });
    }
  };

  return (
    <div>
      <AuthLayout>
        <FormSignIn onSubmit={handleLogin} />
        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
      </AuthLayout>
    </div>
  )
}

export default SignIn;

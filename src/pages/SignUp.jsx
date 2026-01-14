import React , { useContext , useState } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignUp from "../components/Fragments/FormSignUp";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";
import { useNavigate } from "react-router-dom";


function SignUp() {
   const { SignUp } = useContext(AuthContext);
   const navigate = useNavigate();
    
  // state snackbar (disamakan dengan SignUp)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleSignUp = async (values) => {
    try {
      // simulasi proses register
      console.log("Signup payload:", values);

      // fake async biar terasa real
      await new Promise((resolve) => setTimeout(resolve, 800));

      setSnackbar({
        open: true,
        message: "Akun berhasil dibuat, silakan login",
        severity: "success",
      });

      // redirect ke login (beda utama dengan signin)
      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Gagal membuat akun",
        severity: "error",
      });
    }
  };

  return (
    <div>
      <AuthLayout>
        <FormSignUp onSubmit={handleSignUp} />  
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

export default SignUp;

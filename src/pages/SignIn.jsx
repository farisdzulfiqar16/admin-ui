import React , { useContext } from 'react'
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/authContext";


function SignIn() {
  const { login } = useContext(AuthContext);

  // fungsi untuk menangani login
  	const handleLogin = async (email, password) => {
    try {
      const { refreshToken } = await loginService(email, password);
			
			login(refreshToken);
    } catch (err) {
      console.error(err.msg);
    }
  };

  return (
    <div>
      <AuthLayout>
        <FormSignIn onSubmit={handleLogin} />
      </AuthLayout>
    </div>
  )
}

export default SignIn;

import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import PropTypes from "prop-types";

const API_URL = import.meta.env.VITE_API_URL;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        return jwtDecode(token);
      } catch {
        localStorage.removeItem("token");
        return null;
      }
    }

    return null;
  });

  const login = (token) => {
    try {
      const decoded = jwtDecode(token);
      setUser(decoded);
      localStorage.setItem("token", token);
    } catch {
      console.error("Invalid token");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const logoutService = async () => {
  try {
    const token = localStorage.getItem("token");

    await axios.post(
      `${API_URL}/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg,
    };
  }
};

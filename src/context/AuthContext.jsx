import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const CartContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [theme, setTheme] = useState(true);
  const [cart, setCart] = useState(0);

  const [auth, setAuth] = useState(false);
  const login = () => {
    setAuth(true);
    navigate("/");
  };

  const logout = () => {
    setAuth(false);
    navigate("/");
  };
  return (
    <CartContext.Provider value={{ auth, login, logout }}>
      {children}
    </CartContext.Provider>
  );
};

export default AuthProvider;

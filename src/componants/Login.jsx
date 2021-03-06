import React, { useContext, useState } from "react";
import { CartContext } from "../context/AuthContext";

const Login = () => {
  const [log, setLog] = useState({});

  const { login } = useContext(CartContext);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLog({
      ...log,
      [name]: value
    });
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    login();
    alert(log.email);
  };

  return (
  <div className="main" >
      <div className="login" >
      <form onSubmit={handleOnClick}>
        <input className="input"
          type="email"
          placeholder="Enter Email..."
          name="email"
          onChange={handleOnChange}
        />{" "}
        <br />
        <br />
        <input className="input"
          type="password"
          placeholder="Enter Your Password..."
          onChange={handleOnChange}
        />{" "}
        <br /> <br />
        <button className="log" >Login</button> <br /> <br />
      </form>
    </div>
  </div>
  );
};

export default Login;

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/AuthContext";
import { CounterApp } from "../pages/CounterApp";
import { TodoApp } from "../pages/TodoApp";

function Navbar() {
  const { logout, auth } = useContext(CartContext);
  const navigate = useNavigate();
  const handleOnClick = () => {
    if (auth) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className='nav'>
      <Link to="/">CounterApp</Link>
      <Link to="/todoApp">TodoApp</Link>
      <button className="button" onClick={handleOnClick}>
        {" "}
        {auth ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Navbar;

import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
    const navigate=useNavigate()
    const { handleAuth } = useContext(AuthContext)
    const {pathname}=useLocation()
    const handleLogin = () => {
        handleAuth()
        navigate("/services")
    }
  return (
    <div>
      <Navbar currentPath={pathname}/>
      <button onClick={handleLogin}>Login First to see services</button>
    </div>
  );
}

export default Login;

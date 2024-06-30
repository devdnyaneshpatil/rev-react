import React, { useContext, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

function Services() {
  const { isAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const {pathname}=useLocation()

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
          <Navbar currentPath={pathname} />
          <h1>You have unlocked services</h1>
    </div>
  );
}

export default Services;

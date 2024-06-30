import React from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";

function About() {
  const { pathname } = useLocation();
  return (
    <div>
      <Navbar currentPath={pathname} />
      <h1>This is about page</h1>
    </div>
  );
}

export default About;

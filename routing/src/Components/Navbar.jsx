import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar({ currentPath }) {
  return (
    <div className={styles.container}>
      <div>LOGO</div>
      <div>
        <ul>
          {currentPath !== "/" && (
            <li>
              <NavLink to={"/"}>HOME</NavLink>
            </li>
          )}
          {currentPath !== "/about" && (
            <li>
              <NavLink to={"/about"}>ABOUT</NavLink>
            </li>
          )}
          {currentPath !== "/contact" && (
            <li>
              <NavLink to={"/contact"}>CONTACT</NavLink>
            </li>
          )}
          {currentPath !== "/services" && (
            <li>
              <NavLink to={"/services"}>SERVICES</NavLink>
            </li>
          )}
        </ul>
      </div>
      <div>
        {currentPath !== "/login" && <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </div>
  );
}

export default Navbar;

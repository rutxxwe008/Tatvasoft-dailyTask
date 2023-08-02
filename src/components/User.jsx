import React from "react";
// import { ReactDOM } from "react-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
export const User = () => {
  return (
    <>
      {/* this is also written as <></> */}

      <h1>
        This is User Component.
        <NavLink to="/"> Home </NavLink>
      </h1>
      <div>User Component.</div>
      <img src={logo} />
    </>
  );
};

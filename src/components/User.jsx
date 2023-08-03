import React, { useState } from "react";
// import { ReactDOM } from "react-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
export const User = () => {
  const [x, setX] = useState(5);
  return (
    <>
      <h1>
        This is User Component.
        <NavLink to="/"> Home </NavLink>
      </h1>
      <div>User Component.</div>
      <br></br>
      {x} <br></br>
      <button onClick={() => setX(x + 2)}>Click Here</button>
      <img src={logo} />
    </>
  );
};

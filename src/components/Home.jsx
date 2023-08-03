import React from "react";
import { NavLink } from "react-router-dom";

export const Home = (props) => {
  return (
    <h1>
      This is Home component. My name is {props.name}
      <NavLink to="/user"> User </NavLink>
      <br></br>
      <NavLink to="/profile"> Profile </NavLink>
      <br></br>
      <NavLink to="/loginform"> Login Form </NavLink>
      <br></br>
    </h1>
  );
};

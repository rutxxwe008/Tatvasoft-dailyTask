import { Formik } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import * as Yup from "yup";

export const LoginForm = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e, property) => {
    setDetails({
      ...details,
      [property]: e.target.value,
    });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is not valid"),
    password: Yup.string()
      .required("Password is required.")
      .min(5, "Password must be at least 5 characters long"),
  });

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(data) => {alert(JSON.stringify(data))}}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <input name="email" onChange={handleChange} />
              <br></br>
              {errors.email ? errors.email : ""}
              <br></br>
              <input name="password" type="password" onChange={handleChange} />
              <br></br>
              {errors.password ? errors.password : ""}
              <button type="submit">Submit</button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};
// useEffect(() => {
//   console.log("Hello");
//   window.addEventListener("click", () => {});
//   return () => {
//     window.removeEventListener("click", () => {});
//   };
// }, []);

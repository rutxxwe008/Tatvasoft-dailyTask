import "./App.css";

import React from "react";
import { User } from "./components/User";
import { LoginForm } from "./components/LoginForm";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile/Profile";

import {
  Box,
  Button,
  Checkbox,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d32f2f",
    },
    secondary: {
      main: "#d24f2f",
    },
    shadows: ["none", "1px 1px gray"],
  },
});

function App() {
  const username = "Rutvi";
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  let filteredArray = array.filter((item) => item !== 6);
  console.log("array", filteredArray);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          HELLO!
          <br></br>
          <Routes>
            <Route path="/" element={<Home name={username} />} />
            <Route path="/user" element={<User />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/loginform" element={<LoginForm />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

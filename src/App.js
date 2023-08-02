import "./App.css";

import React from "react";
import { User } from "./components/User";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile/Profile";

function App() {
  const username = "Rutvi";
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  let filteredArray = array.filter((item) => item !== 6);
  console.log("array", filteredArray);
  return (
    <BrowserRouter>
      <div className="App">
        HELLO!
        <br></br>
        <Routes>
          <Route path="/" element={<Home name={username} />} />
          <Route path="/user" element={<User />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

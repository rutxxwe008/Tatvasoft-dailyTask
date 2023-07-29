import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { User } from "./components/User";
import { ReactDOM } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  const username = "Rutvi";
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  let filteredArray = array.filter((item) => item != 6);
  console.log("array", filteredArray);
  return (
    <BrowserRouter>
      <div className="App">
        HELLO!
        <br></br>
        <Routes>
          <Route path="/" element={<Home  name = {username}  />} />
          <Route path="/user" element={<User/>} />
        </Routes>
        {/* <Header></Header>
      <User> </User>  
      <Home name={username}></Home>
      <Footer></Footer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

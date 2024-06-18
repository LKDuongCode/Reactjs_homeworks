import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Home() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
      {"     "}
      <Link to={"/signup"}>
        <button>Sign Up</button>
      </Link>
      <Routes>
        <Route path="/" element={<div>Welcome to the Home Page!</div>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

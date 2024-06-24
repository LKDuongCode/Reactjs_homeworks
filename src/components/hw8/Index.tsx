import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";

export default function Index() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route index element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

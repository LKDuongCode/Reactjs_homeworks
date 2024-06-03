import { useState } from "react";

import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import ProductDeltail from "./components/hw1/ProductDeltail";
import Student from "./components/hw2/Student";
import Employee from "./components/hw3/Employee";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/product/:id"
          element={<ProductDeltail></ProductDeltail>}
        ></Route>
        <Route path="/student/:name" element={<Student></Student>}></Route>
        <Route path="/employee" element={<Employee></Employee>}></Route>
      </Routes>
    </>
  );
}

export default App;

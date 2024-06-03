import { useState } from "react";

import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import ProductDeltail from "./components/hw1/ProductDeltail";
import Student from "./components/hw2/Student";
import Employee from "./hw3+4/Employee";
import Main from "./components/hw5+6/Main";
import Account from "./components/hw5+6/Account";
import Login from "./components/hw5+6/Login";
import PrivateRouter from "./components/hw5+6/PrivateRouter";

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
        <Route path="/main" element={<Main></Main>}>
          <Route path="account" element={<Account></Account>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route
            path="private-router"
            element={<PrivateRouter></PrivateRouter>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

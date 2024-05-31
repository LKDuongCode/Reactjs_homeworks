import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/hw1/Home";
import Contact from "./components/hw2/Contact";
import Login from "./components/hw3/Login";
import Register from "./components/hw4/Register";
import NotFound from "./components/hw5/NotFound";

import Product from "./components/hw7/Product";
import Detail from "./components/hw8/Detail";
import Acc from "./components/hw8/Acc";
import Admin from "./components/hw8/Admin";
import CustomLink from "./components/hw9/CustomLink";
import HomePage from "./components/hw9/HomePage";
import UserDetail from "./components/hw10/UserDetail";
import ListUser from "./components/hw10/ListUser";

//using scss, tailwin, boostrap, fontawesome.
export default function App() {
  return (
    <>
      <nav className="flex gap-4">
        <NavLink to={""} className="text-xl p-2">
          Home
        </NavLink>
        <NavLink to={"/contact"} className="text-xl p-2">
          Contact
        </NavLink>
        <NavLink to={"/detail"} className="text-xl p-2">
          Detail
        </NavLink>
        <NavLink to={"/customLink"} className="text-xl p-2">
          CustomLink
        </NavLink>
        <NavLink to={"/list-user"} className="text-xl p-2">
          List Use
        </NavLink>
      </nav>
      <Routes>
        <Route path="" element={<Home></Home>}>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/acc" element={<Acc></Acc>}></Route>
          <Route path="/admin" element={<Admin></Admin>}></Route>
        </Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/detail" element={<Detail></Detail>}></Route>
        <Route path="/customLink" element={<CustomLink></CustomLink>}></Route>
        <Route path="/home-page" element={<HomePage></HomePage>}></Route>
        <Route path="/list-user" element={<ListUser></ListUser>}></Route>
        <Route
          path="/user-detail/:userId"
          element={<UserDetail></UserDetail>}
        ></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

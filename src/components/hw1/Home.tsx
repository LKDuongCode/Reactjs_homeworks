import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>This is Home page</p>
      <br />
      <nav className="flex gap-4">
        <NavLink to={"/product"}>Product</NavLink>
        <NavLink to={"/acc"}>Account</NavLink>
        <NavLink to={"/admin"}>Admin</NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

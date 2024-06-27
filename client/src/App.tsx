import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Sell from "./pages/Sell";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div>
      <div className="flex gap-5">
        <button className="border-2 p-2 border-solid m-5">
          <NavLink to={""}>List Product</NavLink>
        </button>
        <button className="border-2 p-2 border-solid m-5">
          <NavLink to={"/carts"}>Your Cart</NavLink>
        </button>
      </div>

      <Routes>
        <Route path="" element={<Sell></Sell>}></Route>
        <Route path="/carts" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

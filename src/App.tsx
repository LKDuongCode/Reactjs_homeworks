import React from "react";
import ListProduct from "./components/listProduct/ListProduct";
import YourCart from "./components/yourCart/YourCart";

export default function App() {
  return (
    <>
      <h1 className="text-center">Shopping Cart</h1>
      <div className="m-5 p-2 flex justify-between border-solid border-2 border-yellow-400 bg-yellow-50">
        <ListProduct></ListProduct>
        <YourCart></YourCart>
      </div>
    </>
  );
}

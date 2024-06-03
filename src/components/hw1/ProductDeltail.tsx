import React from "react";
import { Outlet, useParams } from "react-router-dom";

export default function ProductDeltail() {
  let { productId } = useParams();
  console.log(productId);
  return (
    <div>
      <h2>Product Id : {productId}</h2>
    </div>
  );
}

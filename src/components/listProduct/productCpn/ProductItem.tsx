import React, { useState } from "react";
import Cart from "../../../model/carts";
import { useDispatch, useSelector } from "react-redux";
import Combine from "../../../model/combine";
import { actAdd } from "../../../action";
import Product from "../../../model/products";
interface Props {
  index: number;
  product: Product;
}
export default function productItem(props: Props) {
  let { product } = props;

  let productCart = {
    id: product.id,
    name: product.name,
    quantity: 1,
    price: product.price,
  };
  let ditpatch = useDispatch();
  //add
  let handleAdd = (id: number) => {
    ditpatch(actAdd("ADD", productCart));
  };
  return (
    <>
      <li className="flex  gap-3 p-3">
        <img src={product.img} alt="" className="w-[200px] h-[180px]" />
        <div className="flex flex-col gap-2">
          <h3>{product.name}</h3>
          <div>{product.describle}</div>
        </div>
        <div className="flex flex-col justify-evenly">
          <input
            readOnly
            className="w-[70px] text-center border-2 border-solid text-xl"
            defaultValue={product.quantity}
            min={1}
          />
          <button
            className="w-[70px] text-center border-transparent bg-orange-500 text-white text-xl"
            onClick={() => handleAdd(product.id)}
          >
            ${product.price}
          </button>
        </div>
      </li>
    </>
  );
}

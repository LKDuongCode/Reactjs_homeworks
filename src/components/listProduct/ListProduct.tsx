import React from "react";
import ProductItem from "./productCpn/ProductItem";
import { useSelector } from "react-redux";
import Combine from "../../model/combine";
import Product from "../../model/products";

export default function ListProduct() {
  //get data
  let products = useSelector((state: Combine) => {
    // products này là products đã được khai báo bên store
    return state.products;
  });

  return (
    <div className="border-3 border-blue-500 border-solid w-[48%] ">
      <div className="bg-blue-500 p-2 text-blue-50 text-xl text-center ">
        List Products
      </div>
      <div>
        <ul>
          {products.map((item: Product, index: number) => {
            return (
              <ProductItem
                key={index}
                index={index}
                name={item.name}
                des={item.describle}
                quantity={item.quantity}
                img={item.img}
                id={item.id}
                price={item.price}
              ></ProductItem>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

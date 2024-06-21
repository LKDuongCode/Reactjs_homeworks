import React from "react";
import { useSelector } from "react-redux";
import Combine from "../../../model/combine";

export default function TotalCartsLen() {
  let lenCart = useSelector((state: Combine) => {
    return state.carts.length;
  });

  let carts = useSelector((state: Combine) => {
    //đây là cart được khai báo trong store khác với biến cart trong file
    return state.carts;
  });

  //tính tổng tiền
  let sumMoney = carts.reduce((accumulator: number, curValue, index) => {
    return accumulator + curValue.price * curValue.quantity;
  }, 0);

  return (
    <>
      {lenCart === 0 && (
        <tr className="">
          <th className="text-center text-green-500" colSpan={4}>
            There aren't any items in your cart
          </th>
          <th className="text-3xl text-green-500">${sumMoney}</th>
        </tr>
      )}
      {lenCart !== 0 && (
        <tr>
          <th className="text-center text-green-500" colSpan={4}>
            There are {lenCart} items in your cart
          </th>
          <th className="text-3xl text-green-500">${sumMoney}</th>
        </tr>
      )}
    </>
  );
}

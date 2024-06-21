import React, { useEffect, useState } from "react";
import ModalSuccess from "./ModalSuccess";
import CartItem from "./cartCpn/CartItem";
import Cart from "../../model/carts";
import { useSelector } from "react-redux";
import Combine from "../../model/combine";
import TotalCartsLen from "./cartCpn/TotalCartsLen";

export default function YourCart() {
  //get data
  let carts = useSelector((state: Combine) => {
    return state.carts;
  });
  //kiểm tra thay đổi cart
  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(carts));
  }, [carts]);

  //state check modal
  let [checkAdd, setCheckAdd] = useState<boolean>(false);

  // state check số lượng sản phẩm
  let [checkCart, setCheckCart] = useState<boolean>(false);
  // kiểm tra carts trống không.
  useEffect(() => {
    carts.length !== 0 ? setCheckCart(true) : setCheckCart(false);
  }, [checkCart]);

  return (
    <div className="w-[48%] flex flex-col gap-5">
      <div className="border-3 border-orange-500 border-solid  ">
        <div className="bg-orange-500 p-2 text-blue-50 text-xl text-center ">
          Your Cart
        </div>
        <div>
          <table className="w-full" cellPadding={10} cellSpacing={10}>
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center w-[45%]">Name</th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {checkCart &&
                carts.map((item: Cart, index: number) => {
                  return (
                    <tr key={index}>
                      <CartItem cart={item} index={index}></CartItem>
                    </tr>
                  );
                })}
              <TotalCartsLen></TotalCartsLen>
              {!checkCart && (
                <tr>
                  <th className="text-center text-red-500 " colSpan={5}>
                    Your cart is empty !
                  </th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {checkAdd && <ModalSuccess></ModalSuccess>}
    </div>
  );
}

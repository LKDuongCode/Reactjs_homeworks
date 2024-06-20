import React, { useState } from "react";
import ModalSuccess from "./ModalSuccess";
import CartItem from "./cartCpn/CartItem";

export default function YourCart() {
  //state check modal
  let [checkAdd, setCheckAdd] = useState<boolean>(false);

  // state check số lượng sản phẩm
  let [checkCart, setCheckCart] = useState<boolean>(false);

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
              {checkCart && <CartItem></CartItem>}
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

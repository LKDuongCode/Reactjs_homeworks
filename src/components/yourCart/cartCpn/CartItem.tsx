import React from "react";
import DeleteBtn from "./DeleteBtn";
import UpdateBtn from "./UpdateBtn";
import Combine from "../../../model/combine";
import Cart from "../../../model/carts";
interface Props {
  cart: Cart;
  index: number;
}
export default function CartItem(props: Props) {
  let { cart } = props;
  let { index } = props;

  return (
    <>
      <td className="text-center">{index + 1}</td>
      <td className="text-center">{cart.name}</td>
      <td className="text-center">${cart.price}</td>
      <td className="text-center">{cart.quantity}</td>
      <td className=" flex gap-2 justify-center">
        <UpdateBtn></UpdateBtn>
        <DeleteBtn cart={cart} index={index}></DeleteBtn>
      </td>
    </>
  );
}

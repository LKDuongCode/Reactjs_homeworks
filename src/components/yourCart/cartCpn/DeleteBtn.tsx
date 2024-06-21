import React from "react";
import Cart from "../../../model/carts";
import { useDispatch } from "react-redux";
import { actDelete } from "../../../action";
interface Props {
  cart: Cart;
  index: number;
}
export default function DeleteBtn(props: Props) {
  let { cart } = props;
  let { index } = props;
  let dispatch = useDispatch();

  let handleDelete = (id: number) => {
    dispatch(actDelete("DELETE", index));
  };
  return (
    <>
      <button
        className="border-none text-white  px-3 py-1  bg-red-400"
        onClick={() => handleDelete(cart.id)}
      >
        Delete
      </button>
    </>
  );
}

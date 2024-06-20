import React from "react";

export default function CartItem() {
  return (
    <>
      <tr>
        <td className="text-center">STT</td>
        <td className="text-center">Name</td>
        <td className="text-center">Price</td>
        <td className="text-center">Quantity</td>
        <td className=" flex gap-2 justify-center">
          <button className="border-none text-white px-3 py-1  bg-green-400">
            Update
          </button>
          <button className="border-none text-white  px-3 py-1  bg-red-400">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

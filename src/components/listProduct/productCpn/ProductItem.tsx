import React from "react";
interface Props {
  index: number;
  id: number;
  name: string;
  quantity: number;
  img: string;
  des: string;
  price: number;
}
export default function productItem(props: Props) {
  let product = {
    index: props.index,
    id: props.id,
    name: props.name,
    quantity: props.quantity,
    img: props.img,
    des: props.des,
    price: props.price,
  };
  return (
    <>
      <li className="flex  gap-3 p-3">
        <img src={product.img} alt="" className="w-[200px] h-[180px]" />
        <div className="flex flex-col gap-2">
          <h3>{product.name}</h3>
          <div>{product.des}</div>
        </div>
        <div className="flex flex-col justify-evenly">
          <input
            type="number"
            className="w-[70px] text-center border-2 border-solid text-xl"
            defaultValue={product.quantity}
          />
          <button className="w-[70px] text-center border-transparent bg-orange-500 text-white text-xl">
            ${product.price}
          </button>
        </div>
      </li>
    </>
  );
}

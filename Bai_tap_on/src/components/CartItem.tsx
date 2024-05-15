import React from "react";
interface ProductTypeChild{
  id:number;
  name:string;
  price:number;
  quantity:number;
  img:string;
}
interface PropType{
  cartItem:ProductTypeChild;
}
export default function CartItem(props:PropType) {
  let {cartItem} = props;
  return (
    <>
      <li
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        >
          <img
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
            src={cartItem.img}
            alt=""
          />
        </div>
        <p style={{ width: "50%" }}>{cartItem.name}</p>

        <div className="sumOrSub">
          <button>+</button>
          <span>{cartItem.quantity}</span>
          <button>-</button>
        </div>
        <div className="trash">del</div>
      </li>
    </>
  );
}

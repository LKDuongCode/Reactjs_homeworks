import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";
interface ProductTypeReal {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

export default function Cart() {

  // truyền tableCart sang cpn product để render ra mà không cần load trang
  let [showHide, setShowHide] = useState<boolean>(false);
  let handleClick = () => {
    setShowHide(!showHide);
  };
  // hàm ẩn hiện
  let tableCart = (showHide: boolean) => {
    if (showHide) {
      return (
        <div
          style={{
            width: "400px",
            padding: "20px",
            color: "white",
            backgroundColor: "black",
            position: "absolute",
            right: "0",
            top: "70px",
            borderRadius: "10px",
          }}
        >
          <h3>Cart</h3>
          <br />
          <hr />
          <br />
          <ul>
            {localCart.map((item) => (
              <div key={item.id}>
                <CartItem cartItem={item} />
              </div>
            ))}
          </ul>
          <br />
          <hr />
          <br />
          <h3>Tổng số tiền là: 0</h3>
        </div>
      );
    } else {
      return <></>;
    }
  };

  // //tạo một mảng rỗng chứa mảng giỏ
  // let cartList:ProductTypeReal[] = [];
  // localStorage.setItem('cartsList',JSON.stringify(cartList));
  // hàm lấy dữ liệu local
  let [localCart, setLocalCart] = useState<ProductTypeReal[]>(() => {
    let carts = localStorage.getItem("cartsList");
    let localCart = carts ? JSON.parse(carts) : [];
    return localCart;
  });
  console.log("dữ liệu lấy từ local giỏ: ", localCart);

  return (
    <>
      <div
        style={{
          paddingRight: "20px",
        }}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faCartShopping} size="lg" />
      </div>
      {tableCart(showHide)}
    </>
  );
}

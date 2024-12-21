import React from "react";
import "./productDetail.css";
import { Outlet, useParams } from "react-router-dom";
export default function ProductDetail() {
  let products = [
    {
      id: 1,
      name: "iphoneX",
      price: 50000,
      des: "this is iphone",
      stock: 5,
      image:
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818",
    },
    {
      id: 2,
      name: "iphoneXnXX",
      price: 20000,
      des: "this is iphone xxx",
      stock: 5,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
    },
    {
      id: 3,
      name: "Samsung",
      price: 5000,
      des: "this is samsung",
      stock: 4,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png",
    },
    {
      id: 4,
      name: "iphone SSS",
      price: 1000000,
      des: "this is iphone sss",
      stock: 3,
      image:
        "https://clickbuy.com.vn/uploads/images/2023/10/avt-iphone-14-plus-tim.jpg",
    },
  ];
  // get id on URL
  let { productId } = useParams();
  console.log(productId);

  let productDetail = products.filter((item) => {
    return item.id === Number(productId);
  });
  return (
    <>
      <div className="detail">
        <p> name: {productDetail[0].name}</p>
        <p>price: {productDetail[0].price} $</p>
        <p>price: {productDetail[0].des} </p>
        <img
          src={productDetail[0].image}
          alt=""
          style={{
            width: "300px",
            height: "300px",
          }}
        />
      </div>
    </>
  );
}

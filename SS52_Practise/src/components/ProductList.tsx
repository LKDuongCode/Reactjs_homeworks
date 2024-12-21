import React from "react";
import "./ProductList/product.css";
import { Outlet, useNavigate } from "react-router-dom";
export default function ProductList() {
  let navigate = useNavigate();
  // get data to render
  // fetch data : create mock data
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
  let handleClick = (id: number) => {
    console.log(id);
    navigate(`/product-detail/${id}`);
  };
  return (
    <>
      <div className="container">
        {products.map((e) => {
          return (
            <div key={e.id} className="item">
              <p>product name: {e.name}</p>
              <p>product price: {e.price} $</p>
              <img
                src={e.image}
                alt=""
                style={{
                  width: "300px",
                  height: "300px",
                }}
              />
              <br />
              <button>Buy</button>
              <button onClick={() => handleClick(e.id)}>Detail</button>
            </div>
          );
        })}
      </div>
      <Outlet></Outlet>
    </>
  );
}

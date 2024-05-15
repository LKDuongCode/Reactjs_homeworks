import React, { useState } from "react";
import Product from "./Product";
//interface cho kiểu dữ liệu của phần tử product
interface ProductTypeReal {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

export default function ProductList() {
  //tạo state chứa dữ liệu từ
  let [productsList, setProductsList] = useState<ProductTypeReal[]>(() => {
    let proLocal = localStorage.getItem("productList");
    //validate nếu có sẽ tiến hành ép kiểu js, ko thì mảng rỗng.
    let products = proLocal ? JSON.parse(proLocal) : [];
    return products;
  });
  console.log("dữ liệu lấy từ local", productsList);

  let saveCart = [];
  // hàm lấy dữ liệu local
  let [localCart, setLocalCart] = useState<ProductTypeReal[]>(() => {
    let carts = localStorage.getItem("cartsList");
    let localCart = carts ? JSON.parse(carts) : [];
    return localCart;
  });
  console.log("dữ liệu lấy từ local giỏ: ", localCart);

  //thêm vào giỏ
  const getId = (id: number) => {
    alert('thêm vào giỏ thành công!')
    console.log(" id truyền từ product:", id);
    let productItem = productsList.find((e)=>{
      return e.id === id;
    })
    console.log(productItem);
    //lưu lên local
    saveCart.push(productItem);
    localStorage.setItem('cartsList',JSON.stringify(saveCart));
  };
  return (
    <>
      <ul
        className="productList"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}
      >
        {productsList.map((product: ProductTypeReal) => (
          <div key={product.id}>
            {/* truyền sang con */}
            <Product function1={getId} product={product}></Product>
          </div>
        ))}
      </ul>
    </>
  );
}

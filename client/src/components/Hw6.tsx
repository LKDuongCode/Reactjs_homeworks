import React from "react";

export default function Hw6() {
  let updateProductById = () => {
    fetch(`http://localhost:3000/product/${2}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 13,
        product_name: "iphone",
        image:
          "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png",
        price: 10000,
        quantity: 5,
        create_at: "10/10/2010",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("thêm mới thành công");
      })
      .catch((err) => {
        console.log("error");
      });
  };
  return <div>Hw6</div>;
}

import React from "react";

export default function Hw3() {
  let getProductById = () => {
    fetch(`http://localhost:3000/product/${1}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("không thấy bản ghi");
      });
  };
  getProductById();
  return <div>Hw3</div>;
}

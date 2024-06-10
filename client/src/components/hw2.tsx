import React from "react";

export default function Hw2() {
  let getAllProduct = () => {
    fetch("http://localhost:3000/product")
      .then((reponse) => reponse.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  getAllProduct();
  return <div>hw2</div>;
}

import React from "react";

export default function Hw4() {
  let removeProductById = () => {
    fetch(`http://localhost:3000/product/${1}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("xóa thành công!");
        } else {
          console.log("error");
        }
      })
      .catch((err) => {
        console.log("error");
      });
  };
  removeProductById();
  return <div>Hw4</div>;
}

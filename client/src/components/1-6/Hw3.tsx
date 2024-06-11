import axios from "axios";
import React from "react";

export default function Hw3() {
  let deleteId: number = 2;
  let removeById = () => {
    axios
      .delete(` http://localhost:8000/students/${deleteId}`)
      .then((data) => {
        console.log(data.data, " đã được xóa !");
      })
      .catch((err) => {
        console.log("không tìm thấy học sinh cần xóa!", err);
      });
  };
  removeById();
  return <div>Hw3</div>;
}

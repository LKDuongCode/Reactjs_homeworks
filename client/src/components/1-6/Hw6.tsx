import axios from "axios";
import React from "react";
type Student = {
  name: string;
};
export default function Hw6() {
  let upStudentId: number = 2;
  let upStudent: Student = {
    name: "Huy",
  };
  let updateStudentById = () => {
    axios
      .patch(`http://localhost:8000/students/${upStudentId}`, upStudent)
      .then((data) => {
        console.log("Đã cập nhật thành công", data.data);
      })
      .catch((err) => {
        console.log("không tìm thấy sinh viên cần sửa!", err);
      });
  };
  updateStudentById();
  return <div>Hw6</div>;
}

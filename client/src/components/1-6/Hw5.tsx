import axios from "axios";
import React from "react";
type Student = {
  name: string;
  address: string;
  email: string;
  phone: string;
};
export default function Hw5() {
  let newStudent: Student = {
    name: "Tuan",
    address: "Binh Duong",
    email: "tuan@gmail.com",
    phone: "0987654321",
  };
  let createStudent = () => {
    axios
      .post("http://localhost:8000/students", newStudent)
      .then((data) => {
        console.log("Đã thêm học sinh mới thành công!", data.data);
      })
      .catch((err) => {
        console.log(" Không thêm được học sinh", err);
      });
  };
  createStudent();
  return <div>Hw5</div>;
}

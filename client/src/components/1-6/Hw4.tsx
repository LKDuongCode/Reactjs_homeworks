import axios from "axios";
import React from "react";

export default function Hw4() {
  let studentId: number = 1;
  let getStudentById = () => {
    axios
      .get(`http://localhost:8000/students/${studentId}`)
      .then((data) => {
        console.log("Tìm thấy sinh viên :", data.data);
      })
      .catch((err) => {
        console.log("không tìm thấy sinh viên!");
      });
  };
  getStudentById();
  return <div>Hw4</div>;
}

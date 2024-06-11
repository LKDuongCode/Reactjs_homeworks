import axios from "axios";
import React from "react";

export default function Hw2() {
  let studentId: number = 2;
  let getStudentById = () => {
    axios
      .get(`http://localhost:8000/students/${studentId}`)
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getStudentById();
  return <div>Hw2</div>;
}

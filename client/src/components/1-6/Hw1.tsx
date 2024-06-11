import axios from "axios";
import React from "react";

export default function Hw1() {
  let getAllStudent = () => {
    axios
      .get("  http://localhost:8000/students")
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log("Error");
      });
  };
  getAllStudent();
  return <div></div>;
}

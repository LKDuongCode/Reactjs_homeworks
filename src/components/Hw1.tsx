import React, { useState } from "react";

export default function Hw1() {
  //tạo useState
  const [myName, setMyName] = useState<string>("Lê Khánh Dương");

  return (
    <div>
      <h3>HomeWork 1</h3>
      <p>My Name: {myName}</p>
      <hr />
    </div>
  );
}

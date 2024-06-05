import React from "react";

export default function Hw5() {
  let checkCondition = (condition: boolean, callback: Function) => {
    setInterval(() => {
      condition ? callback(true) : callback(false);
    }, 1000);
  };
  let display = (status: boolean) => {
    console.log(`Điều kiện trả về : ${status}`);
  };

  checkCondition(true, display);
  return <div>Hw5</div>;
}

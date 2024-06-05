import React from "react";

export default function Hw1() {
  function calculate(a: number, b: number, callback: Function) {
    callback(a + b);
  }
  calculate(1, 2, callbackF);
  function callbackF(result: number) {
    console.log("Result is :", result);
  }
  return <div>Hw1</div>;
}

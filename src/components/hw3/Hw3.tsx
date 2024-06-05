import React from "react";

export default function Hw3() {
  let processArray = (arr: number[], callback: Function) => {
    arr.map((e, i) => {
      setTimeout(() => {
        callback(e);
      }, (i + 1) * 1000);
    });
  };
  let callbackF = (num: number) => {
    console.log(`element : ${num}`);
  };
  let arr: number[] = [1, 2, 3, 4, 5];
  processArray(arr, callbackF);

  return <div>Hw3</div>;
}

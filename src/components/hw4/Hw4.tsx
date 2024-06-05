import React from "react";

export default function Hw4() {
  let displayNumber = (delayTime: number, callback: Function) => {
    setInterval(() => {
      callback(delayTime);
      delayTime++;
    }, 1000);
  };
  let callbackF = (num: number) => {
    console.log(`element : ${num}`);
  };
  displayNumber(1, callbackF);
  return <div>Hw4</div>;
}

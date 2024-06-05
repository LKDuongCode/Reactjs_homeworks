import React from "react";

export default function Hw2() {
  let delayCallback = (second: number, callback: Function) => {
    setTimeout(() => {
      callback("hello!");
    }, second * 1000);
  };
  let callbackF = (message: string) => {
    console.log(message);
  };
  delayCallback(5, callbackF);
  return <div>Hw2</div>;
}

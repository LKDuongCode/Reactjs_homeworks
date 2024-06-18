import React from "react";
import { useSelector } from "react-redux";

export default function Counter() {
  let count: any = useSelector((state: any) => {
    return state.countReducer;
  });
  //
  let handleIn = () => {};
  let handleDe = () => {};
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={handleIn}>Increase</button>
      <button onClick={handleDe}>Decrease</button>
    </div>
  );
}

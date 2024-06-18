import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCount } from "../../action";

export default function Counter() {
  let count: any = useSelector((state: any) => {
    return state.countReducer;
  });
  //use dispath to action
  let dispatch = useDispatch();

  let handleIn = () => {
    dispatch(actionCount("INCREASE", 1));
  };
  let handleDe = () => {
    dispatch(actionCount("DECREASE", 1));
  };
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={handleIn}>Increase</button>
      <button onClick={handleDe}>Decrease</button>
    </div>
  );
}

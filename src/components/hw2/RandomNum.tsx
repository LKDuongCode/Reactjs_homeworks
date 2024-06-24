import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrRandom, Combine } from "../../model/interface";
import {
  randomNumber,
  resetRandom,
} from "../../store/reducers/randomNumReducer";

export default function RandomNum() {
  //get data
  let nums: ArrRandom = useSelector((state: Combine) => {
    return state.nums;
  });
  let numString: string[] = [];
  nums.map((item: number) => {
    numString.push(item.toString(), ",");
  });

  let dispatch = useDispatch();
  let handleAdd = () => {
    dispatch(randomNumber(Math.ceil(Math.random() * 100)));
  };
  return (
    <div>
      <p>[{numString}]</p>
      <button onClick={handleAdd}>Random Number</button>
      <button onClick={() => dispatch(resetRandom())}>Reset</button>
    </div>
  );
}

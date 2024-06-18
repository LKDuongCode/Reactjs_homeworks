import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionRandom } from "../../action";
// làm sao để tạo dấu phẩy giữa các phần tử trong mảng.
export default function GenerateRandom() {
  //get
  let listNumber: any = useSelector((state: any) => {
    return state.generateRandomReducer;
  });
  let dispatch = useDispatch();
  let handleAdd = () => {
    dispatch(actionRandom("ADD", Math.ceil(Math.random() * 1000)));
  };
  return (
    <div>
      <p>[{listNumber}]</p>
      <button onClick={handleAdd}>Generate Random Number</button>
    </div>
  );
}

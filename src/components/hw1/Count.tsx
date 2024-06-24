import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Combine } from "../../model/interface";
import { decrease, increase, reset } from "../../store/reducers/countsReducer";

export default function Count() {
  //lấy dữ liệu từ store
  let count = useSelector((state: Combine) => {
    return state.count;
  });
  // nếu muốn thực hiện hành động thì dùng dispatch
  let dispatch = useDispatch();
  return (
    <div>
      <p>Count : {count}</p>
      {/* gọi phương thức đã tạo */}
      <button onClick={() => dispatch(increase(1))}>Increase</button>
      <button onClick={() => dispatch(decrease(1))}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

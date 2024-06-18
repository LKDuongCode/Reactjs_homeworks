import React from "react";
import "./changeBackground.css";
import { useDispatch, useSelector } from "react-redux";
import { actionBackground } from "../../action";

//làm sao để load lại trang mà không mất đi hiệu ứng cũ.
export default function ChangeBackground() {
  let backgroundStatus: any = useSelector((state: any) => {
    return state.changeBackgroundReducer;
  });

  //use action
  let dispatch = useDispatch();

  let handleChange = () => {
    dispatch(actionBackground("CHANGEBACK"));
  };
  return (
    <div>
      <div className={backgroundStatus ? "darkBg" : "whiteBg"}>
        <input type="checkbox" onChange={handleChange} />
        <span>{backgroundStatus ? <>Tối</> : <>Sáng</>}</span>
      </div>
    </div>
  );
}

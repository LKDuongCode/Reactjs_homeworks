import React from "react";
import "./changeBackground.css";
import { useDispatch, useSelector } from "react-redux";
import { actionBackground } from "../../action";
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
        <span>Sáng</span>
      </div>
    </div>
  );
}

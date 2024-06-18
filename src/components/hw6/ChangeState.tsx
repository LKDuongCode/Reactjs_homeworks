import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCompany } from "../../action";

export default function ChangeState() {
  // get
  let companyName: any = useSelector((state: any) => {
    return state.companyStateReducer;
  });

  let dispatch = useDispatch();
  let handleChange = () => {
    dispatch(actionCompany("CHANGE", "Rikkei Soft"));
  };
  return (
    <div>
      <p>{companyName}</p>
      <button onClick={handleChange}>Change State</button>
    </div>
  );
}
function actioncompany(arg0: string, arg1: string): any {
  throw new Error("Function not implemented.");
}

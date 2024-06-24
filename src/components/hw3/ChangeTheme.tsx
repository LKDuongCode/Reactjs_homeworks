import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Combine, StatusTheme } from "../../model/interface";
import { changeUI3 } from "../../store/reducers/statusTheme";

export default function ChangeTheme() {
  let statusTheme: StatusTheme = useSelector((state: Combine) => {
    return state.theme;
  });

  let dispatch = useDispatch();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div
        className={`${
          statusTheme
            ? "bg-[#333333] transition-colors duration-500"
            : "bg-[#FFFFFF] border-3 border-slate-400 border-solid transition-colors duration-500 "
        } w-96 h-60 flex justify-center items-center`}
      >
        <button
          className={`border-2
        ${
          statusTheme
            ? "border-slate-300 text-slate-300 bg-[#333333]"
            : "border-slate-500 text-slate-900 bg-[#FFFFFF]"
        }
        border-solid
        font-semibold
        text-sm
        
        leading-5
        rounded-[0.375rem]
        px-[14px]
        py-[10px]
      
      h-max`}
          onClick={() => dispatch(changeUI3())}
        >
          Dark
        </button>
      </div>
    </div>
  );
}

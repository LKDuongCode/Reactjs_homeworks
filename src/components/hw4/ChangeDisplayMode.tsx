import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Combine, DisplayMode } from "../../model/interface";
import {
  changeDisplay4Dlist,
  changeDisplay4Grid,
  changeDisplay4List,
} from "../../store/reducers/changeDisplayModeReducer";

export default function ChangeDisplayMode() {
  //get data
  let displayStatus: DisplayMode = useSelector((state: Combine) => {
    return state.displayMode;
  });
  console.log(displayStatus);
  // xử lí
  let dispatch = useDispatch();

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex flex-col gap-6">
        <div className="flex gap-5">
          <button
            className="font-semibold text-sm leading-5 rounded-[0.375rem] px-[30px] py-[6px] border-solid border-2 border-slate-300 bg-[#FFFFF] h-max"
            onClick={() => dispatch(changeDisplay4List())}
          >
            List
          </button>
          <button
            className="font-semibold text-sm leading-5 rounded-[0.375rem] px-[30px] py-[6px] border-solid border-2 border-slate-300 bg-[#FFFFF] h-max"
            onClick={() => dispatch(changeDisplay4Dlist())}
          >
            Double-List
          </button>
          <button
            className="font-semibold text-sm leading-5 rounded-[0.375rem] px-[30px] py-[6px] border-solid border-2 border-slate-300 bg-[#FFFFF] h-max"
            onClick={() => dispatch(changeDisplay4Grid())}
          >
            Grid
          </button>
        </div>

        <div
          className={`transition-all duration-700 gap-4 ${
            displayStatus === "list"
              ? "flex flex-col"
              : displayStatus === "double-list"
              ? "grid grid-cols-2"
              : displayStatus === "grid"
              ? "grid grid-cols-4"
              : "flex flex-col"
          }`}
        >
          <div className="h-8 bg-orange-500 font-semibold flex justify-center items-center">
            1
          </div>
          <div className="h-8 bg-orange-500 font-semibold flex justify-center items-center">
            2
          </div>
          <div className="h-8 bg-orange-500 font-semibold flex justify-center items-center">
            3
          </div>
          <div className="h-8 bg-orange-500 font-semibold flex justify-center items-center">
            4
          </div>
          <div className="h-8 bg-orange-500 font-semibold flex justify-center items-center">
            5
          </div>
          <div className="h-8 bg-orange-500 font-semibold flex justify-center items-center">
            6
          </div>
          <div className="h-8 bg-orange-500 font-semibold flex justify-center items-center">
            7
          </div>
          <div className="h-8 bg-orange-500 font-semibold flex justify-center items-center">
            8
          </div>
          <div className="h-8 bg-orange-500 font-semibold flex justify-center items-center">
            9
          </div>
        </div>
      </div>
    </div>
  );
}

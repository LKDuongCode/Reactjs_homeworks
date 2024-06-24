import React, { useState } from "react";
import { Combine, Language } from "../../model/interface";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage6 } from "../../store/reducers/changeLanguageReducer";

export default function ChangeLangue() {
  let languages: Language = useSelector((state: Combine) => {
    return state.languages;
  });
  console.log(languages);
  let dispatch = useDispatch();
  //hàm check tick xanh.
  let [checkChoose, setCheckChoose] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  //hàm xóa tick khi chọn phần tử khác
  let resetOther = (index: number) => {
    let newArray = checkChoose.map((item, idx) => {
      return idx === index;
    });
    setCheckChoose(newArray);
  };

  return (
    <>
      <div className="relative w-full items-center mx-auto max-w-screen-sm bg-slate-300">
        {/* điều chỉnh độ dài chiều cao của phần hiện ra thông qua div gần button nhất */}
        <div className="relative group/bouton w-96 bg-slate-500">
          <button className="bg-stone-100 py-3 pr-12 min-w-44 relative font-semibold">
            Language
            <span className="absolute flex items-center justify-center bg-stone-200 w-12 top-0 h-full right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 group-hover/bouton:rotate-90 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </button>

          {/* show */}
          <div className="absolute w-full top-full bg-stone-50 origin-top opacity-0 hidden flex-col group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all">
            {/* child */}
            <div
              className="relative w-full py-3 border-b border-t-transparent border-stone-200 hover:bg-stone-300 border-solid px-10 flex items-center justify-between"
              onClick={() => {
                dispatch(changeLanguage6("Vietnamese"));
                resetOther(0);
              }}
            >
              <p className="text-xl">Vietnamese</p>
              {checkChoose[0] && (
                <svg
                  className="h-8 w-8 text-green-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
            <div
              className="relative w-full py-3 border-b border-t-transparent border-stone-200 hover:bg-stone-300 border-solid px-10 flex items-center justify-between"
              onClick={() => {
                resetOther(1);
                dispatch(changeLanguage6("English"));
              }}
            >
              <p className="text-xl">English</p>
              {checkChoose[1] && (
                <svg
                  className="h-8 w-8 text-green-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
            <div
              className="relative w-full py-3 border-b border-t-transparent border-stone-200 hover:bg-stone-300 border-solid px-10 flex items-center justify-between"
              onClick={() => {
                resetOther(2);
                dispatch(changeLanguage6("Bảnh_language"));
              }}
            >
              <p className="text-xl">Bảnh language</p>
              {checkChoose[2] && (
                <svg
                  className="h-8 w-8 text-green-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="text-7xl mt-14 text-center">
        {languages === "English" ? (
          "Rikkei Academy"
        ) : languages === "Bảnh_language" ? (
          <a
            href="https://www.youtube.com/watch?v=ihKWxN8jQQY"
            className="flex gap-2 items-center"
          >
            <svg
              className="size-24 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
            Bảnh ft Linda: Viên thuốc kim cương
          </a>
        ) : languages === "Vietnamese" ? (
          "Học viện Rikkei"
        ) : (
          "Rikkei Academy"
        )}
      </p>
    </>
  );
}

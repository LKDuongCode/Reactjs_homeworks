import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Combine } from "../../model/interface";
import {
  hiddenSidebar5,
  showSidebar5,
} from "../../store/reducers/sidebarReducer";

export default function SideBar() {
  //get data
  let sideBar = useSelector((state: Combine) => {
    return state.sideBar;
  });
  let dispatch = useDispatch();
  //thanh cuộn ngang hiện ra mất thẩm mĩ => hàm này sẽ khắc phục
  const [timeShow, setTimeShow] = useState<boolean>(false);
  /*
  kiểm soát điều kiện
  nếu sideBar true thì sau 1s timeShow true,
  ngược lại.
  */
  useEffect(() => {
    if (sideBar === true) {
      setTimeout(() => {
        setTimeShow(true);
      }, 150);
    }
  }, [sideBar === true]);

  useEffect(() => {
    setTimeShow(false);
  }, [sideBar === false]);
  // console.log("time", timeShow);
  // console.log("side", sideBar);
  // console.log("-----------------------------");
  return (
    <>
      <button className="ml-96" onClick={() => dispatch(showSidebar5())}>
        Show
      </button>
      <div
        className={`fixed top-3 left-3 z-40 h-[97%] p-4 bg-[#242527] transition-all duration-300 ease-in-out ${
          sideBar ? "w-64" : "w-16"
        } `}
      >
        <h3
          className={` font-semibold text-white uppercase ${
            timeShow ? "text-base" : "text-xs"
          }`}
        >
          Menu
        </h3>
        {timeShow && (
          <button
            onClick={() => dispatch(hiddenSidebar5())}
            type="button"
            className="border-none text-white bg-transparent hover:text-gray-300 text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        )}
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium flex flex-col justify-center items-center">
            <li className="w-full">
              <a
                href="#"
                className="flex items-center  p-2 text-white rounded-lg hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 text-white transition duration-75 flex-shrink"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                {timeShow && <span className="ml-3">Dashboard</span>}
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                {timeShow && (
                  <>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Kanban
                    </span>
                    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-white bg-gray-700 rounded-full">
                      Pro
                    </span>
                  </>
                )}
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                {timeShow && (
                  <>
                    <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-white bg-gray-700 rounded-full">
                      3
                    </span>
                  </>
                )}
              </a>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200">
            <li className="w-full">
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                {timeShow && (
                  <>
                    <span className="flex-1 ml-3 whitespace-nowrap">Mode</span>
                    <svg
                      className="h-8 w-8 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
                      <circle cx="16" cy="12" r="3" />
                    </svg>
                  </>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

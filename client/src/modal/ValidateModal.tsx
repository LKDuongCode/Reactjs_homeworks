import React, { useState } from "react";

export default function ValidateModal() {
  // modal setting
  let [check, setCheck] = useState<boolean>(false);

  // modal không biến mất mà chỉ ẩn đi, điều này dẫn đến việc không ấn được nút để xho nó xuất hiện lần nữa vì nút đó đã bị cái ẩn đi che mất ( thực chất là ấn vào phần bị ẩn chứ không phải nút hiện), hàm này giải quyết vấn đề đó = z-index vào thằng to nhất
  // modal setting
  return (
    <div className="z-[0]">
      {/* modal delete */}
      <button
        className={`
        border-none
        font-semibold
        text-sm
        leading-5
        rounded-[0.375rem]
        px-[14px]
        py-[10px]
      bg-red-500
      h-max
      ${check ? "z-[-1]" : "z-[1]"}`}
        onClick={() => {
          setCheck(true);
        }}
      >
        Button text
      </button>
      <div
        className={`relative ${check ? "z-[1]" : "z-[-1]"}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
            check
              ? "ease-out duration-300 opacity-100 "
              : "ease-in duration-200 opacity-0"
          } `}
        ></div>

        <div
          onClick={() => {
            setCheck(false);
          }}
          className={`fixed inset-0 z-10 w-screen overflow-y-auto  ${
            check
              ? "ease-out duration-300 opacity-100 "
              : "ease-in duration-200 opacity-0 "
          }`}
        >
          <div
            className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ${
              check
                ? "ease-out duration-300  translate-y-0 sm:scale-100 "
                : "ease-in duration-200  translate-y-4 sm:translate-y-0 sm:scale-95 "
            }`}
          >
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Warning
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete? All of your data will
                        be permanently removed. This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className=" border-none inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  onClick={() => {
                    setCheck(false);
                  }}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className=" border-none mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={() => {
                    setCheck(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

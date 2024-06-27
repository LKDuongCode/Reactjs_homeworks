import React, { useEffect, useState } from "react";
import type { Cart, CombineType } from "../model/modelType";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarts } from "../service/cartService/getCart.service";

export default function Cart() {
  // modal setting
  let [checkDel, setCheckDel] = useState<boolean>(false);
  let [checkUp, setCheckUp] = useState<boolean>(false);
  let [alertAdd, setAlertAdd] = useState<boolean>(false);
  let [alertUpdate, setAlertUpdate] = useState<boolean>(false);
  let [alertDelete, setAlertDelete] = useState<boolean>(false);

  // modal setting

  //lấy dữ liệu carts
  let carts: Cart[] = useSelector((state: CombineType) => {
    return state.carts.data;
  });
  let dispatch: any = useDispatch();
  useEffect(() => {
    //gọi dispatch để đổ data
    dispatch(fetchCarts());
  }, []);

  //hàm tính tổng tiền
  let calculateSubMoney = () => {
    return carts.reduce((accumulator: number, curValue, index) => {
      return accumulator + curValue.price * curValue.quantity;
    }, 0);
  };

  return (
    <>
      <div className="border-2 border-solid p-5 w-2/3 bg-white flex flex-col gap-3">
        <h3 className="text-center">Your Cart</h3>

        <ul className=" p-5 ">
          {carts.map((item: Cart, index: number) => {
            return (
              <li className="h-32  p-2 flex gap-2 bg-slate-100 " key={item.id}>
                <div>
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-28 border-2 border-solid"
                  />
                </div>
                <div className="flex flex-col justify-between w-full">
                  <p className="font-semibold">{item.name}</p>
                  <input
                    type="number"
                    readOnly
                    className="w-[80px] py-2 text-center"
                    value={item.quantity}
                  />
                </div>
                <div className="flex flex-col justify-between w-20">
                  <p className="font-semibold">$ {item.price}</p>

                  <button
                    className="py-2 px-3 flex justify-center items-center"
                    onClick={() => {
                      setCheckUp(true);
                    }}
                  >
                    <p>Update</p>
                  </button>
                  <button
                    className={`py-2 px-3 flex justify-center items-center ${
                      checkDel ? "z-[auto]" : "z-[1]"
                    }`}
                    onClick={() => {
                      setCheckDel(true);
                    }}
                  >
                    <p>Remove</p>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-between p-3">
          <h3>SubTotal</h3>
          <h3>$ {calculateSubMoney()}</h3>
        </div>
        {/* modal alert*/}
        {alertAdd && (
          <div className="p-3 bg-green-200">
            <p className="text-green-600 text-center">
              Add product successful !
            </p>
          </div>
        )}
        {alertUpdate && (
          <div className="p-3 bg-orange-200">
            <p className="text-orange-600 text-center">
              Update product successful !
            </p>
          </div>
        )}
        {alertDelete && (
          <div className="p-3 bg-red-200">
            <p className="text-red-600 text-center">
              Delete product successful !
            </p>
          </div>
        )}
      </div>
      {/* modal delete confirm */}
      <div className="z-[0]">
        <div
          className={`relative ${checkDel ? "z-[1]" : "z-[-1]"}`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
              checkDel
                ? "ease-out duration-300 opacity-100 "
                : "ease-in duration-200 opacity-0"
            } `}
          ></div>

          <div
            onClick={() => {
              setCheckDel(false);
            }}
            className={`fixed inset-0 z-10 w-screen overflow-y-auto  ${
              checkDel
                ? "ease-out duration-300 opacity-100 "
                : "ease-in duration-200 opacity-0 "
            }`}
          >
            <div
              className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ${
                checkDel
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
                      setCheckDel(false);
                      setAlertDelete(true);
                      setAlertUpdate(false);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className=" border-none mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => {
                      setCheckDel(false);
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
      {/* modal update confirm */}
      <div className="z-[0]">
        <div
          className={`relative ${checkUp ? "z-[1]" : "z-[-1]"}`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
              checkUp
                ? "ease-out duration-300 opacity-100 "
                : "ease-in duration-200 opacity-0"
            } `}
          ></div>

          <div
            onClick={() => {
              setCheckUp(false);
            }}
            className={`fixed inset-0 z-10 w-screen overflow-y-auto  ${
              checkUp
                ? "ease-out duration-300 opacity-100 "
                : "ease-in duration-200 opacity-0 "
            }`}
          >
            <div
              className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ${
                checkUp
                  ? "ease-out duration-300  translate-y-0 sm:scale-100 "
                  : "ease-in duration-200  translate-y-4 sm:translate-y-0 sm:scale-95 "
              }`}
            >
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-yellow-600"
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
                          Are you sure you want to update? All of your data will
                          be updated. This action cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className=" border-none inline-flex w-full justify-center rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 sm:ml-3 sm:w-auto"
                    onClick={() => {
                      setCheckUp(false);
                      setAlertDelete(false);
                      setAlertUpdate(true);
                    }}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className=" border-none mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => {
                      setCheckUp(false);
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
    </>
  );
}

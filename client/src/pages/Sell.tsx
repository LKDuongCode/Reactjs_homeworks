import React, { useEffect, useState } from "react";
import type { CombineType } from "../model/modelType";
import type { Sell } from "../model/modelType";
import { useDispatch, useSelector } from "react-redux";
import { fetchSells } from "../service/sellService/getSells.service";
import { addToCarts } from "../service/cartService/addCart.service";
// lưu ý : import type cần dùng import type để phân biệt với module.
export default function Sell() {
  // modal setting
  let [checkAdd, setCheckAdd] = useState<boolean>(false);
  // modal setting
  //lấy dữ liệu
  let sells: Sell[] = useSelector((state: CombineType) => {
    return state.sells.data;
  });
  let dispatch: any = useDispatch();
  useEffect(() => {
    //gọi dispatch lấy data
    dispatch(fetchSells());
  }, []);

  //hàm thêm
  let handleAdd = (idOfSell: number) => {
    //tìm phần từ có id đó
    let sellFound: Sell | undefined = sells.find(
      (item: Sell) => item.id === idOfSell
    );
    //nếu tìm được
    if (sellFound) {
      //clone lại sellFound = cartIsAdded với thuộc tính miêu tả bị loại bỏ
      let { description, ...cartIsAdded } = sellFound;
      //gọi dispatch để truyền vào hàm xử lí
      dispatch(addToCarts(cartIsAdded));
    }
  };

  return (
    <>
      <div className="border-2 border-solid p-5 w-2/3 bg-white">
        <h3 className="text-center">Product List</h3>

        <ul className=" p-5 flex flex-col gap-4">
          {sells.map((item: Sell, index: number) => {
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
                  <p>{item.description}</p>
                  <p className="font-semibold">Total : {item.quantity}</p>
                </div>
                <div className="flex flex-col justify-between w-20">
                  <input
                    type="number"
                    className="py-2 text-center"
                    readOnly
                    value={1}
                  />
                  <p>Price:{item.price}$</p>
                  <button
                    className="py-2 flex justify-center items-center"
                    onClick={() => {
                      handleAdd(item.id);
                      setCheckAdd(true);
                    }}
                  >
                    <p>Add cart</p>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* modal add */}
      <div className="z-[0]">
        <div
          className={`relative ${checkAdd ? "z-[1]" : "z-[-1]"}`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
              checkAdd
                ? "ease-out duration-300 opacity-100 "
                : "ease-in duration-200 opacity-0"
            } `}
          ></div>

          <div
            onClick={() => {
              setCheckAdd(false);
            }}
            className={`fixed inset-0 z-10 w-screen overflow-y-auto  ${
              checkAdd
                ? "ease-out duration-300 opacity-100 "
                : "ease-in duration-200 opacity-0 "
            }`}
          >
            <div
              className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ${
                checkAdd
                  ? "ease-out duration-300  translate-y-0 sm:scale-100 "
                  : "ease-in duration-200  translate-y-4 sm:translate-y-0 sm:scale-95 "
              }`}
            >
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Added to cart successfully
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          This item was added to your carts successfully ! Now,
                          you can check your carts and are continuing to shop.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useEffect } from "react";
import type { CombineType } from "../model/modelType";
import type { Sell } from "../model/modelType";
import { useDispatch, useSelector } from "react-redux";
import { fetchSells } from "../service/sellService/getSells.service";
import { addToCarts } from "../service/cartService/addCart.service";
// lưu ý : import type cần dùng import type để phân biệt với module.
export default function Sell() {
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
                  onClick={() => handleAdd(item.id)}
                >
                  <p>Add cart</p>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

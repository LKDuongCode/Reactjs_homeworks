import React, { useState } from "react";

export default function AddButton() {
  let [checkModal, setCheckModal] = useState<boolean>(false);
  let handleAdd = () => {
    setCheckModal(!checkModal);
  };

  let handleClose = () => {
    setCheckModal(false);
  };

  let handleSubAdd = () => {
    setCheckModal(false);
  };
  return (
    <div>
      <button
        className="
  border-transparent
   bg-blue-500
   rounded-md
   font-semibold
   text-sm
   h-10
   text-blue-50
   "
        onClick={handleAdd}
      >
        Thêm thông tin
      </button>
      {/* modal add */}
      {checkModal && (
        <div className="w-[350px] h-96 p-5 border-solid border-2 bg-white fixed inset-0  z-50 translate-x-[100%] translate-y-[30%] ">
          <div className="flex justify-between">
            <h3>Thêm thông tin mượn sách</h3>
            <button
              className="border-transparent bg-transparent "
              onClick={handleClose}
            >
              <h3>X</h3>
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <label htmlFor="">Tên sách</label>
              <br />
              <br />
              <input type="text" className="w-[98%] outline-none" />
            </div>
            <div>
              <label htmlFor="">Tên người mượn</label>
              <br />
              <br />
              <input type="text" className="w-[98%] outline-none" />
            </div>
            <div>
              <label htmlFor="">Ngày mượn</label>
              <br />
              <br />
              <input type="date" className="w-[98%] outline-none" />
            </div>
            <div>
              <label htmlFor="">Ngày trả</label>
              <br />
              <br />
              <input type="date" className="w-[98%] outline-none" />
            </div>
            <button
              className="w-full text-white bg-blue-500 p-1 text-base border-transparent"
              onClick={handleSubAdd}
            >
              Thêm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

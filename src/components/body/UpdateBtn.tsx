import React, { useState } from "react";

export default function UpdateBtn() {
  let [checkModal, setCheckModal] = useState<boolean>(false);

  let handleUpdate = () => {
    setCheckModal(!checkModal);
  };

  let handleSubUp = () => {
    setCheckModal(false);
  };
  let handleClose = () => {
    setCheckModal(false);
  };
  return (
    <>
      <button
        className="px-3 py-1  border-orange-500 rounded-md text-orange-700 bg-orange-200"
        onClick={handleUpdate}
      >
        Sửa
      </button>
      {/* modal update */}
      {checkModal && (
        <div className="w-[350px] h-96 p-5 border-solid border-2 fixed inset-0  z-50 translate-x-[100%] translate-y-[30%] bg-white ">
          <div className="flex justify-between">
            <h3>Cập nhật thông tin mượn sách</h3>
            <button
              className="border-transparent bg-transparent"
              onClick={handleClose}
            >
              <h3>X</h3>
            </button>
          </div>
          <div className=" flex flex-col gap-3">
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
              onClick={handleSubUp}
            >
              Cập nhật
            </button>
          </div>
        </div>
      )}
    </>
  );
}

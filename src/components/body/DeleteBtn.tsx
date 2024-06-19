import React, { useState } from "react";

export default function DeleteBtn() {
  let [checkModal, setCheckModal] = useState<boolean>(false);
  let handlDel = () => {
    setCheckModal(true);
  };

  let handleClose = () => {
    setCheckModal(false);
  };

  let handleSubDel = () => {
    setCheckModal(false);
  };

  let handleCancel = () => {
    alert("Không có gì thay đổi !");
    setCheckModal(false);
  };
  return (
    <>
      <button
        className="px-3 py-1 border-red-500 rounded-md text-red-700 bg-red-200"
        onClick={handlDel}
      >
        Xóa
      </button>
      {/* modal delete */}
      {checkModal && (
        <div className="w-[350px] h-36 p-5 border-solid border-2 bg-red-200 fixed inset-0  z-50 translate-x-[100%] translate-y-[100%] ">
          <div className="flex justify-between">
            <h3>Bạn có chắc chắn muốn xóa ?</h3>
            <button
              className="border-transparent bg-transparent"
              onClick={handleClose}
            >
              <h3>X</h3>
            </button>
          </div>
          <div className=" flex justify-evenly">
            <button
              className="border-none px-3 py-1 bg-blue-400"
              onClick={handleCancel}
            >
              Hủy
            </button>
            <button
              className="border-none px-3 py-1 bg-red-400"
              onClick={handleSubDel}
            >
              Xóa
            </button>
          </div>
        </div>
      )}
    </>
  );
}

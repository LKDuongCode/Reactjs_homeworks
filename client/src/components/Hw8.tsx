import React from "react";
//modal delete
export default function Hw8() {
  return (
    <>
      <div className=" w-1/3 border-2">
        <h2>Xác nhận</h2>
        <p>Bạn có chắc chắn muốn xóa bài viết này không ?</p>
        <br />
        <hr />
        <div className="flex gap-3 justify-end">
          <button>Hủy </button>
          <button>Xác nhận </button>
        </div>
      </div>
    </>
  );
}

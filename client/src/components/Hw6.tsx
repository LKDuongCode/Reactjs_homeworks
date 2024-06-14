import React from "react";

export default function Hw6() {
  return (
    <div className=" w-1/3 border-2">
      <h2>Xác nhận</h2>
      <p>Bạn có chắc chắn muốn ngừng bài viết ?</p>
      <br />
      <hr />
      <div className="flex gap-3 justify-end">
        <button>Hủy </button>
        <button>Xác nhận </button>
      </div>
    </div>
  );
}

import React from "react";

export default function Hw7() {
  return (
    <>
      {/* modal add */}
      <div className=" bg-slate-50  p-4 w-60 flex-col gap-3">
        <h2>Thêm mới bài viết</h2>
        <div>
          <label htmlFor="">Tên bài viết:</label>
          <br />
          <input type="text" className="w-full" />
        </div>

        <div>
          <label htmlFor="">Hình ảnh:</label>
          <br />
          <input type="text" className="w-full" />
        </div>

        <div>
          <label htmlFor="">Nội dung:</label>
          <br />
          <textarea
            name=""
            id=""
            placeholder="Nhập nội dung ..."
            className="w-full"
          ></textarea>
        </div>

        <div className="flex justify-between">
          <button>Làm mới</button>
          <button>Xuất bản</button>
        </div>
      </div>
    </>
  );
}

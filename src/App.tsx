import React from "react";

export default function App() {
  return (
    <div>
      <div className="m-14">
        <div className="flex justify-between">
          <h2>Quản lí mượn trả sách</h2>
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
          >
            Thêm thông tin
          </button>
        </div>
        <div>
          <table border={1} cellPadding={10} cellSpacing={0} className="w-full">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sách</th>
                <th>Sinh viên mượn</th>
                <th>Ngày mượn</th>
                <th>Ngày trả</th>
                <th>Trạng thái</th>
                <th>Chức năng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">STT</td>
                <td>Tên sách</td>
                <td>Sinh viên mượn</td>
                <td className="text-center">Ngày mượn</td>
                <td className="text-center">Ngày trả</td>
                <td className="text-center">
                  <button className="rounded-xl border-transparent">
                    Trạng thái
                  </button>
                </td>
                <td className="flex justify-around">
                  <button className="px-3 py-1  border-orange-500 rounded-md text-orange-700 bg-orange-200">
                    Sửa
                  </button>
                  <button className="px-3 py-1 border-red-500 rounded-md text-red-700 bg-red-200">
                    Xóa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* modal add */}
      <div className="w-[350px] p-5 border-solid border-2">
        <div className="flex justify-between">
          <h3>Thêm thông tin mượn sách</h3>
          <h3>X</h3>
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
          <button className="w-full text-white bg-blue-500 p-1 text-base border-transparent">
            Thêm
          </button>
        </div>
      </div>
      {/* modal update */}
      <div className="w-[350px] p-5 border-solid border-2">
        <div className="flex justify-between">
          <h3>Cập nhật thông tin mượn sách</h3>
          <h3>X</h3>
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
          <button className="w-full text-white bg-blue-500 p-1 text-base border-transparent">
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";

export default function ListUser() {
  let userList: any = useSelector((state: any) => {
    return state.reducerUser2;
  });
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th colSpan={2}>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item: any, index: number) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.sex}</td>
                <td>{item.born}</td>
                <td>{item.address}</td>
                <td>
                  <button>Sửa</button>
                </td>
                <td>
                  <button>Xóa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

import React from "react";
import BookItem from "./BookItem";
export default function BookList() {
  return (
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
          <BookItem></BookItem>
        </tbody>
      </table>
    </div>
  );
}

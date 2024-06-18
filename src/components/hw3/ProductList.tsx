import React from "react";
import { useSelector } from "react-redux";

export default function ProductList() {
  let productList: any = useSelector((state: any) => {
    return state.productlistReducer;
  });
  return (
    <div>
      {" "}
      <div>
        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Tên</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th colSpan={2}>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((item: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
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
    </div>
  );
}

import React, { createContext, useEffect, useState } from "react";
import "./css/mainTodo.css";
import Hw3 from "./logic/Hw3";
import axios from "axios";
// truyền data sang phần render
export let SetData = createContext([]);
//https://docs.google.com/document/d/1hHBN6Q07NFoLmBrsUHttH_nNhsUxYPsE/edit
// link tạo thanh cuộn
interface Task {
  id: number;
  name: string;
  status: boolean;
}
export default function () {
  let [data, setData] = useState<any>();
  //lấy dữ liệu
  useEffect(() => {
    axios
      .get(`  http://localhost:8000/task`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <>
      <div className="all-container bg-slate-300">
        <h1 className="text-3xl "> Quản lí công việc</h1>
        <div className="w-full">
          <input
            type="text"
            placeholder="Nhập tên công việc..."
            className="w-full"
          />
          <br />
          <button className="bg-yellow-300">Thêm công việc</button>
        </div>
        <div>
          <nav className="nav-list p-3 bg-blue-500">
            <button className="bg-blue-300">Tất cả</button>
            <button className="bg-blue-300">Đang thực hiện</button>
            <button className="bg-blue-300">Đã hoàn thành</button>
          </nav>
        </div>
        <SetData.Provider value={data}>
          <Hw3></Hw3>
        </SetData.Provider>
        <div className="func-button-container">
          <button className="bg-red-500">Xóa công việc đã hoàn thành</button>
          <button className="bg-red-500">Xóa tất cả công việc</button>
        </div>
      </div>
    </>
  );
}

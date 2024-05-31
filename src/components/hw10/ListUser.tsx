import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import UserDetail from "./UserDetail";
interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}
export default function ListUser() {
  //tạo mảng user
  let listUser: User[] = [
    {
      id: 1,
      name: "duong",
      email: "duong@gmail.com",
      address: "HN",
    },
    {
      id: 2,
      name: "hoang",
      email: "goang@gmail.com",
      address: "BG",
    },
    {
      id: 3,
      name: "doan",
      email: "doan@gmail.com",
      address: "PT",
    },
  ];

  return (
    <div>
      <nav className="flex gap-4">
        <div>List User</div>
      </nav>
      {listUser.map((user) => (
        <UserDetail user={user} />
      ))}
    </div>
  );
}

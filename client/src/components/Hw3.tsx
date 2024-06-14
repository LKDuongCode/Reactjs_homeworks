import React from "react";
import { NavLink } from "react-router-dom";

export default function Hw3() {
  //định tuyến trang /post bên app
  return (
    <div>
      Đây là trang chủ
      <NavLink to={"/list-post"}>Danh sách bài viết</NavLink>
    </div>
  );
}

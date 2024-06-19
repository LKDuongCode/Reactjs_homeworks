import React from "react";
import AddButton from "./AddButton";

export default function Header() {
  return (
    <div className="flex justify-between">
      <h2>Quản lí mượn trả sách</h2>
      <AddButton></AddButton>
    </div>
  );
}

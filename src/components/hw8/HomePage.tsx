import React from "react";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-72 border-2 border-solid flex flex-col gap-2 p-4">
        <h2>User Info</h2>
        <div>Name : Duong</div>
        <div>Email : duong@gmail.com</div>
        <button>Logout</button>
      </div>
    </div>
  );
}

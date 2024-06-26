import React from "react";

export default function NavStatus() {
  return (
    <div>
      <nav className="flex justify-evenly">
        <button className="px-5 py-2">All</button>
        <button className="px-5 py-2">Unfinished</button>
        <button className="px-5 py-2">Completed</button>
      </nav>
    </div>
  );
}

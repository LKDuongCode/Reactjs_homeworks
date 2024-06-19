import React from "react";
import Header from "./components/header/Header";
import BookList from "./components/body/BookList";

export default function App() {
  return (
    <div>
      <div className="m-14">
        <Header></Header>
        <BookList></BookList>
      </div>
    </div>
  );
}

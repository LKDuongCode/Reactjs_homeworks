import React from "react";
import TodoListMain from "./pages/UserApp/TodoListMain";
import ModalDelete from "./modal/ModalDelete";
import ValidateModal from "./modal/ValidateModal";

export default function App() {
  return (
    <div className="flex justify-center">
      <TodoListMain></TodoListMain>
    </div>
  );
}

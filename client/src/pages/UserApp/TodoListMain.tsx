import AddTask from "../../components/TodolistCpn/AddTask";
import ListTask from "../../components/TodolistCpn/ListTask";
import NavStatus from "../../components/TodolistCpn/NavStatus";
import ModalDelete from "../../modal/ModalDelete";

export default function TodoListMain() {
  return (
    <>
      <div className="border-solid border-2 p-5 w-1/2 flex flex-col gap-3 bg-yellow-100 ">
        <h1 className="text-center">My Todo</h1>
        <div className="border-solid border-2 p-5 flex flex-col gap-5">
          <AddTask></AddTask>
          {/* nav */}
          <NavStatus></NavStatus>
          {/* list */}
          <ListTask></ListTask>
        </div>
      </div>
    </>
  );
}

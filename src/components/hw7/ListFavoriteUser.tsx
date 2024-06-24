import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Combine, ProtectedUserType } from "../../model/interface";
import { controlProtect } from "../../store/reducers/protectedUser";

export default function ListFavoriteUser() {
  let protectedUsers: ProtectedUserType[] = useSelector((state: Combine) => {
    return state.protectedUser;
  });
  console.log(protectedUsers);
  let dispatch = useDispatch();

  return (
    <div className="flex justify-center">
      <div className=" flex flex-col gap-4 mt-8 border-solid border-blue-300 border-3 p-5">
        <h1 className="p-3 bg-cyan-200">List Protected User</h1>
        <ul className="flex flex-col gap-3">
          {protectedUsers.map((item: ProtectedUserType) => {
            return (
              <li
                key={item.id}
                className="flex items-center justify-between px-5 py-2  border-cyan-400 border-[5px] border-solid"
              >
                <p className="text-2xl">{item.name}</p>
                <svg
                  onClick={() => dispatch(controlProtect(item.id))}
                  className={`size-10 ${
                    item.status ? "text-cyan-400" : ""
                  } hover:bg-cyan-100 rounded-full p-2`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

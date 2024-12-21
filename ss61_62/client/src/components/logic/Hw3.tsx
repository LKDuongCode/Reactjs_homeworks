import React, { useContext } from "react";
// nhận data
import { SetData } from "../Hw4-MainTodo";
export default function Hw3() {
  let { data } = useContext(SetData);
  // console.log(data);
  console.log(typeof data);
  return (
    <>
      <div>
        <ul className="taskList max-h-[200px] overflow-auto bg-slate-100 ">
          {data.map((e) => {
            return (
              <li className="item" key={e.id}>
                <div>
                  <input type="checkbox" />
                  <span>{e.name}</span>
                </div>
                <div>
                  <button>Del</button>
                  <button>Up</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

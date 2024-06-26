import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CombineType, Task } from "../../model/interface";
import { fetchData } from "../../store/reducers/other/getDataReducer";

export default function ListTask() {
  //lấy dữ liệu
  let tasksList: Task[] = useSelector((state: CombineType) => {
    return state.tasksList.data;
  });

  //mới đầu chạy sẽ bị lỗi vì trước khi cpn mount vào dom thì giá trị của tasksList = null ==> cách xử lí:
  if (tasksList === null) {
    tasksList = [];
  }

  //gọi dispatch lấy data.
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {tasksList.map((item: Task, index: number) => {
          return (
            <li className="flex justify-between p-3 bg-slate-200" key={index}>
              <div className="flex gap-5 items-center">
                <input type="checkBox" defaultChecked={item.status} />
                {item.status ? <s>{item.name}</s> : <p>{item.name}</p>}
              </div>
              <div className="flex gap-3 items-center">
                <button className="px-2 py-1">Up</button>
                <button className="px-2 py-1">Del</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

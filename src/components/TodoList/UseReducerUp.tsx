import React, { useReducer } from "react";
import './todolist.css'
interface Todo {
  name: string;
  status: boolean;
  id: number;
}
export default function UseReducerUp() {
  /*
    Thực hành làm todo list dùng useReducer
    */
  //1.khai báo state
  const initial: any = {
    todos: [],
    isloadding: false,
    todo: {
      id: 0,
      name: "",
      status: false,
    },
  };
  //action
  let action = (type: string, payload: any) => {
    return {
      type,
      payload,
    };
  };
  //khai báo hàm reducer
  const reducer = (state = initial, action: any) => {
    switch (action.type) {
      case "CHANGE_INPUT":
        // console.log(111,action);

        return { ...state, todo: { ...state.todo, name: action.payload } };
      //hiểu lại đoạn code này
      case "ADD_TODO":
        state.todo.id = Math.ceil(Math.random() * 9999);
        console.log(333333, action);
        return { ...state, todos: [...state.todos, action.payload] };
      default:
        return state;
    }
  };

  // input value
  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    dispatch(action("CHANGE_INPUT", inputValue));
    console.log(state.todo);
  };
  //add
  const addTodo = () => {
    dispatch(action("ADD_TODO", state.todo));
  };

  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <div>
      <div className="container">
        <h1 className="titleTodo">Todo List</h1>
        <div className='input-button'>
        <input onChange={handleChange} type="text" className="input"/>
        <button onClick={addTodo} className="button">Add a work</button>
        </div>
        <p className="listTitle">Work list</p>
        <ul>
          {state.todos.map((e: any, i: any) => {
            return (
              <li key={e.id + Math.ceil(Math.random() * 123456789)}>
                {e.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

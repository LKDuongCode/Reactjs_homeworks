import React, { ButtonHTMLAttributes, useEffect, useReducer, useState } from "react";
interface Todo {
    id:string;
    name:string;
    status:boolean;
}
import { v4 as uuidv4 } from 'uuid';
    // làm sạch input sau khi thêm
    let cleanInput:string = '';
    //validate input
    let check = false;
export default function AddTask() {


    // tạo initial
    const initial: any = {
        todos: [()=>{
            let arr = JSON.parse(localStorage.getItem('TaskList')||"[]");
            return arr;
        }],
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
            state.todo.id = uuidv4();
            // console.log(333333, action);
            let term = {
                //clone state
                ...state,
                //clone arr todos và thêm action.payload.
                todos:[...state.todos,action.payload]
            }
            localStorage.setItem('TaskList',JSON.stringify(term.todos));
            cleanInput = '';
            return term;
          default:
            return state;
        }
      };
      const [state, dispatch] = useReducer(reducer, initial);
      // input value
      let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value;
        cleanInput = e.target.value;
        dispatch(action("CHANGE_INPUT", inputValue));
        // console.log(state.todo);
      };
      //add
      const handleAdd = (e:any) => {
        e.preventDefault();
        cleanInput === ''? check = true : check = false;
        
        check?  alert('Tên công việc không được để trống!'):dispatch(action("ADD_TODO", state.todo));
        
      };
      console.log(state);
      
  return (
    <div>
      <form className="d-flex justify-content-center align-items-center mb-4">
        <div className="form-outline flex-fill">
          <input type="text" id="form2" className="form-control" onChange={handleChange} value={cleanInput} />
          <label className="form-label" htmlFor="form2">
            Nhập tên công việc
          </label>
        </div>
        <button onClick={handleAdd} type="submit" className="btn btn-info ms-2">
          Thêm
        </button>
      </form>
    </div>
  );
}

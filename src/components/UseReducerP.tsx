import React, { useReducer } from 'react'

export default function UseReducerP() {
    //khai báo initial
    let initial:number = 0;
    //khai báo hàm reducer nhận vào initial = state và hành động action
    let reducer = (state = initial,action:any)=>{
        //trong hàm này, dùng điều kiện xét trường hợp
        switch (action.type) {
            case 'ADD':
                
                return state + action.payload;
            case 'REMOVE':
                return state - action.payload;
            default:
                return state;
        }
    }
    //tạo useReduser nhận hàm reducer và initial
    let [count,dispatch] = useReducer(reducer,initial);
    //tạo hàm trả về một đối tượng
    let actionFunction = (type:string,payload:number)=>{
        return {
            type :type,
            payload: payload,
        }
    }
    //tạo hai hàm onclick
    let handleAdd = ()=>{
        console.log('add');
        // gọi hàm dispatch trong này, hàm dispatch gọi hàm 
        // actionFunction.
        dispatch(actionFunction('ADD',1))
    }
    let handleRemove = ()=>{
        console.log('remove');
        //tương tự hàm tăng
        dispatch(actionFunction('REMOVE',1))
    }

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
    </div>
  )
}

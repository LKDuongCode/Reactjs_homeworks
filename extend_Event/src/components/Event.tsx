import React, { useState } from 'react'

export default function Event() {
    let [value,setValue] = useState<string>('')
    // kiểu dữ liệu cho event
    let handleClick = (event:React.MouseEvent)=>{
        console.log('Clicked',event.clientX);
    };
    let handleDelete = (id:number)=>{
        console.log(id);
    }
    //kiểu dữ liệu cho event
    //lấy dữ liệu từ dom ảo
    let handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log('change',event.target.value);
        setValue(event.target.value)

    }
  return (
    <div>
        {/* Quy tắc đặt tên hàm bắt đầu từ handle */}
        <button onClick={handleClick}>Click</button>

        {/* lấy dữ liệu truyền vào khi nhấn delete */}
        <button onClick={()=> handleDelete(1)}>Delete</button>

        {/* input */}
        <h3>input value:{value} </h3>
        <input type="text" id='input1' onChange={handleChange} />
    </div>
  );
}

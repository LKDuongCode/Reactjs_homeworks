import React, { useState } from 'react'
let index = 0; 

export default function UseState() {
    let cart = [
        {
            name:'iphone',
            price:5000,
            quantity:5,
        },
        {
            name:'iphoneXVD',
            price:100000,
            quantity:1,
        },
        {
            name:'iphoneXNXX',
            price:999999,
            quantity:2,
        },
    ]
    //cú pháp destructoring
   
    const [name,setName]= useState<string>('duong');
    const [count,setCount] = useState<number>(0);
    const [price,setPayment] = useState<number>(cart.reduce((currentValue,item,index)=>{
        return currentValue + item.price*item.quantity;
    },0));
    // duong , 0 được goi là giá trị khởi tạo (initial-value)
    let handleClick = ()=>{
        index++;
        setCount(count + 1)
        setCount(pre => pre +1)
        // khi có nhiều useState giống nhau cùng chạy 1 lúc thì sẽ đưa hết các useState vào một cái 
        // hàng đợi để xử lí.
    }
    console.log('cpn re-render');
    // sử dụng batch update
    console.log(index);

  return (
    <div>
        {/* 
        useState = use+State (sử dụng trạng thái)
        trạng thái của dữ liệu tức là khi dữ liêu thay đổi thì giao diện nó thay đổi theo
        các hook là các phương thức được React cung câp  cho nên khi sử dụng thì phải import để dùng
        
        bản chất useState là 1 function trả về 1 cái [] có 2 phần tử.

        - đối với batch update thì nó sẽ lấy giá trị trả về của useState trước làm giá trị tham số đầu vào
        của useState sau.

        -initial của useState
            + truyền trực tiếp giá trị
            + dùng arrow function để nhận về một giá trị.
        */}
        <p>Count value : {count}</p>
        <button onClick={handleClick}>count</button>
        <p>Giá phải trả là : {price}</p>
    </div>
  )
}

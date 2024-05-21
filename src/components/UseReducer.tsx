import React, { useReducer } from 'react'

export default function UseReducer() {
    // initial
    let initial:number = 0;
    // khoi tao ham reducer
    const reducer = (state = initial,action:any)=>{
        console.log(action);
        //dùng điều kiện
        switch (action.type) {
            case 'INCREASE':
                return state + action.payload;
            case 'DECREASE':
                return state - action.payload;
        
            default:
                return state;
        }
    }
    /*
    -Đối với những action có số liệu phức tạp thì nên tạo ra một function 

    */
   let actionF = (type:string,payload:number)=>{
    return {
        type:type,
        payload:payload,
    }
   }
    // dung destructoring để hứng kết quả
    let [count,ditspatch] = useReducer(reducer,initial);

    //hàm tăng 
    let handleIn = ()=>[
        // ditspatch('increase')
        //hoặc
        ditspatch(actionF('INCREASE',1))
    ]
    //hàm giảm
    let handleDe = ()=>{
        ditspatch(actionF('DECREASE',1))
    }
    
  return (
    <div>
        {/* 
        - Công dụng:
            +Quản lí state phức tạp , khi muốn quản lí state thường sử dụng useState
            (chỉ dùng quản lí state đơn giản)
            +Bản chất những gì useState làm được thì useReducer cũng làm được nhưng sẽ đi xử lí
            những state phức tạp hơn.
            
            +Tiền đề để sau này học Redux (thư viện giúp tạo kho chứa dữ liệu)

        - Cách dùng:
            +hook, cần import vào.
            Cú pháp: useReducer()
            nhận 2 tham số
                - hàm reduce
                - giá trị khởi tạo.

        
        */}
        <p>Cout's value : {count}</p>
        <button onClick={handleIn}>Increase</button>
        <button onClick={handleDe}>Decrease</button>
    </div>
  )
}

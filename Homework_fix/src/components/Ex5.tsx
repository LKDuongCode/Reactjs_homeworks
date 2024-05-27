import React, { Component } from 'react'
interface Props{
    status:string,
    test:any
}
export default class Ex5 extends Component<any,Props> {
    constructor(pro:Props) {
        super(pro);
        this.state = {
          // pro là bên app : <Ex5 status = {statusValue} test={test}></Ex5> cũng chứa 2 thuộc tính.
            status:this.props.status,
            test:this.props.test,
        }
        console.log(' hàm được truyền từ app ',this.state.test);
        console.log(pro);
        
    }
    
  render() {
    console.log(999999999999);
    
    return (
      <>
        <h3>Status : {this.props.status}</h3> 
        {/* tại sao khi chuyển sang this.state.status lại không đổi giao diện
        -trong class cpn, re-render chỉ re-render lại từ render(), phần bên trên không chạy
        => do đó this.state.status chưa được up mới nhât,
        test bấm lần 2, clg hàm test sẽ không hiện ra
        */}
        <button onClick={()=>this.state.test("close")}>Change</button>
      </>
    )
  }
}

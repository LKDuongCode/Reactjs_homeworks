import React, { Component } from 'react'
//tạo một interface
interface Props {
    mess:string;
    updateMess:any,
}
//truyền kiểu dữ liệu vào cpn
export default class Ex6 extends Component<any,Props> {
    //tạo constructor
    constructor(pro:Props) {
        // pro là bên app <Ex6 iMess = {messVal} updateMess = {updateMess}></Ex6>
        super(pro);
        //tạo state
        this.state = {
            //truyền dữ liệu từ props vào, props là <Ex6 iMess = {messVal} updateMess = {updateMess}></Ex6>
            mess: this.props.iMess,
            updateMess: this.props.updateMess, //đây là một hàm.
        }
    }
    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<Props>, nextContext: any): boolean {
        return false; // chặn re-render
    }
  render() {
    return (
      <>
        <h3>Mess : {this.props.iMess}</h3>
        <button onClick={() => this.state.updateMess('Interface Up')}>Change</button>
      </>
    )
  }
}

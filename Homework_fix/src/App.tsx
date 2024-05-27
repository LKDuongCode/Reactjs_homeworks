import { useState } from 'react'

import './App.css'
import Ex5 from './components/Ex5'
import Ex6 from './components/Ex6'
import Ex7 from './components/Ex7'

function App() {
  //hw5----------------------------------------------------------------
  let [statusValue,setStatusValue] = useState<string>('Open')
  let test=(a:any)=>{
    console.log('giá trị được truyền = ',a);
    setStatusValue(a);

  }
  // console.log(44444,statusValue);
  //hw5----------------------------------------------------------------

  //hw6================================================================
  let [messVal,setMessVal] = useState<string>('Interface rendering'); //tạo một useState
  let updateMess = (newMess:string)=>{// tạo hàm thay đổi mess bên app và newMess là giá trị truyền vào từ bên Ex6.
    setMessVal(newMess);
  }
  //hw6================================================================
  return (
    <>
      {/* <Ex5 status = {statusValue} test={test}></Ex5> */}
      {/* <Ex6 iMess = {messVal} updateMess = {updateMess}></Ex6> */}
      <Ex7></Ex7>

    </>
  )
}

export default App

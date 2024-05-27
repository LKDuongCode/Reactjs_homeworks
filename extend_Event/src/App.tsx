import React from 'react'
import Listproduct from './components/Listproduct'
import Count from './components/Count'
import Event from './components/Event'
//tách một cpn
//- nếu dữ liệu thay đổi và cần dùng lại nhiều lần thì tách.
export default function () {
  return (
    <div>
      {/* <Listproduct></Listproduct> */}
      {/* <Count></Count> */}
      <Event></Event>
    </div>
  )
}


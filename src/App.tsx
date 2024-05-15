import { useState } from 'react'

import './App.css'
import UseState from './components/useState/UseState'

function App() {

  return (
    <>
        {/* 
        React - hook
        hook: móc
        ==> bản chất là những hàm, phương thức giúp cho function cpn có thể thực hiện các tính năng y hệt như
        class cpn 

        + ra đời ở phiên bản react 16.8 (2018)
        + trước khi hook ra đời thì function cpn chỉ đơn giản là tạo ra các UI.
        function Header (){
          return <>header</>
        }

        => hook ra đời giúp code ngắn gọn hơn và dễ dùng hơn so với class cpn
        + dự án bây giờ đa phần sử dụng react-hook
        + sau này đi làm vẫn gặp những dự án vẫn dùng class (maintain).
        

        +Khi làm việc với class thì phải nắm lifecycle
        +react hook chỉ áp dụng với function cpn.

        => khi làm việc với hook cần quan tâm đến đầu vào và đầu ra của các phương thức.
        + Các hook học sẽ gồm: 
                              1.useState
                              2.useEffect
                              3.useRef
                              4.useMemo
                              5.useCallback
                              6.useReducer
        
        */}
        <UseState></UseState>
    </>
  )
}

export default App

import React, { useState } from 'react'

export default function() {
    let [count,setCount] = useState<number>(0);
    let handleCount = ()=>{
        //cập nhật giá trị của state
        setCount(count + 1);
    };
  return (
    <div>
        <h3>Count: {count}</h3>
        <button onClick={handleCount}>Count</button>
    </div>
  )
}

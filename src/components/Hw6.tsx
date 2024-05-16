import React, { useState } from 'react'

export default function Hw6() {
    const [count,setCount] = useState<number>(0);
    const handleClick = ()=>{
        setCount(count + 1);
    }
  return (
    <div>
        <h3>Home Work 6</h3>
        <p>You clicked : {count}</p>
        <button onClick={handleClick}>Click to increase</button>
        <hr />
    </div>
  )
}

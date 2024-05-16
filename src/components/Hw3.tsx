import React, { useState } from 'react'

export default function Hw3() {
    let [text,setText] = useState<any>(
        <p style={{color:'black'}}>Title of text</p>
    )
    const handleClick = ()=>{
        setText(
            <p style={{color:'red'}}>Title of text</p>
        )
    }
  return (
    <div>
        <h3>Home Work 3</h3>
        <div>{text}</div>
        <button onClick={handleClick}>Change color</button>
        <hr />
    </div>
  )
}

import React, { useState } from 'react'

export default function Hw4() {
    const [status,setStatus] = useState<boolean>(false);
    const handleClick = ()=>{
        setStatus(!status)
    }
  return (
    <div>
        <h3>Home Work 4</h3>
        <button onClick={handleClick}>{status?'Ẩn':'Hiện'}</button>
        <p>{status?'Title of text':''}</p>
        <hr />
    </div>
  )
}

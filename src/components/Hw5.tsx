import React, { useState } from 'react'

export default function Hw5() {
  const [content,setContent] = useState<string>('');
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        let text = e.target.value;
        setContent(text)
    }
  return (
    <div>
        <h3>Home Work 5</h3>
        <input onChange={handleChange} type="text" />
        <p>{content}</p>
        <hr />
    </div>
  )
}

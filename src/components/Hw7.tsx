import React, { useState } from 'react'

export default function Hw7() {
    const [text,setText] = useState<string>('');
    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setText(e.target.value);
    }
  return (
    <div>
        <h3>Home Work 7</h3>
        <textarea name="" id="" onChange={handleChange}></textarea>
        <p>Characters : {text.length}</p>
        <hr />
    </div>
  )
}

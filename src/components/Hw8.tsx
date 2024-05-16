import React, { useState } from 'react'

export default function Hw8() {
    const [opt,seOpt] = useState<string>('');
    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        console.log(e);
    }
  return (
    <div>
        <h3>Home Work 8</h3>
        <p>Tỉnh/ Thành phố : {}</p>
        <select name="" id="" onChange={handleChange}>
            <option value="hnoi">Hà Nội</option> 
            <option value="hnam">Hà Nam</option> 
            <option value="pt">Phú Thọ</option> 
        </select>
        <hr />
    </div>
  )
}

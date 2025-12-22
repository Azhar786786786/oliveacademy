import React, { useState } from 'react'

function InputBoxData() {

  const [val,setVal]=useState("AHK");
  return (
    <>
      <h1>Input box data</h1>
      <h1><input type="text" value={val} placeholder='Enter your name' onChange={(e)=>setVal(e.target.value)} /></h1>
     <h2> {val}</h2>
      <button onClick={()=>setVal("")}>Reset Button</button>
    </>
  )
}

export default InputBoxData
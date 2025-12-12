import React, { useState } from 'react'

function InputData() {

  const [val,setVal]=useState("");
  return (
    <>
      <hr></hr>
      <h1>Input Data</h1>
      <input type="text" value={val} onChange={(event)=> setVal(event.target.value)} placeholder="Your Name Here" name="" id="" />
      <h2 style={{color:"Green"}}>{val} </h2>
        <button onClick={()=> setVal("")}>Clear</button>
    </>
  )
}

export default InputData
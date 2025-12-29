import React, { useState } from 'react'

function RadioButtonData() {

  const [gender,setGender]=useState('Male')
  return (
    <>
    <hr/>
    <h3>Please choose one Gender</h3>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} checked={gender=='Male'} name="gender" id="Male" value="Male" />
      <label htmlFor='Male' value="Male">Male</label>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} checked={gender=='Female'} name="gender" id="Female" value="Female" />
      <label htmlFor='Female' value="Female">Female</label>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} checked={gender=='Other'} name="gender" id="Other" value="Other" />
      <label htmlFor='Other' value="Other">Other</label>
      <h2 style={{color:'green'}}>Select Gender is : {gender}</h2>
      <hr/>
    </>
  )
}

export default RadioButtonData
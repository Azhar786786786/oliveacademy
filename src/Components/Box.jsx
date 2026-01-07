import React from 'react'

const Box = (props) => {
  console.log(props);
  return (
    <div className='box'>
      {/* <h1>AHK</h1>
      <h3>socialist</h3> */}
      <h1>{props.name}</h1>
      <h3>{props.post}</h3>
    </div>
  )
}

export default Box
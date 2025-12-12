import React from 'react'

function PropsMultipleDataInReact({empName,empAge,addr}) {
  return (
    <>
      <h1>Props Multiple Data transfer in React</h1>
      <h2>Employee Name::{empName}</h2>
      <h2>Employee Age:::{empAge}</h2>
      <h3>Employee Addr::{addr}</h3>
    </>
  )
}

export default PropsMultipleDataInReact
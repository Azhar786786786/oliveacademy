import React from 'react'

function PropsMultipleObjectInReact({ user }) {
  return (
    <>
      <h2>User Name::{user.name}</h2>
      <h2>User Age:::{user.age}</h2>
      <h2>Salary::{user.salary}</h2>
      <h2>EmailId::{user.emailId}</h2>
      <hr />
    </>

  )
}

export default PropsMultipleObjectInReact
import React from 'react'

function PropsObjectInReact({user}) {
  return (
    <>
    <hr/>
      <h1>PropsObject in react means property</h1>
      <h2>User Name::{user.name}</h2>
      <h2>User Age:::{user.age}</h2>
      <h2>Salary::{user.salary}</h2>
      <h2>EmailId::{user.emailId}</h2>
      <hr/>
    </>
  )
}

export default PropsObjectInReact
import React from 'react'

function EventCondition() {

  function myFunction() {
    alert("this is my function");
  }
  const city = () => {
    alert("Capital of India is New Delhi");
  }
  const natureURL="https://plus.unsplash.com/premium_photo-1764190656884-6f6194616995?q=80&w=742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <>
      <h1>EventCondition</h1>
      <button onClick={city}>City Name</button>
      <img src={natureURL} width="300px" height="300px" alt="No Image"></img>
    </>
  )
}

export default EventCondition
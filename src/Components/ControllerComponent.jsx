import React, { useState } from 'react'

function ControllerComponent() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phno, setPhNo] = useState('');

  function resetData() {
    setName('');
    setPassword('');
    setPhNo('');
  }

  return (
    <>
      <h1>Input Controlled Component</h1>
      {/* <form action=""> */}
      <h2><input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter you name' /></h2>
      <h2><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter you password' /></h2>
      <h2><input type="tel" value={phno} onChange={(e) => setPhNo(e.target.value)} placeholder='Enter you phone' /></h2>
      <h2><button>Submit</button></h2>
      {/* <h2><button onClick={resetData}>Reset</button></h2> */}
      {/* OR */}
      <h2><button onClick={() => { setName(''); setPassword(''); setPhNo(''); }}>Clear Data</button></h2>
      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{phno}</h3>
      {/* </form> */}
    </>
  )
}

export default ControllerComponent
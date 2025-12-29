import React, { useState } from 'react'

function DifferentStateCounter() {

  const [black, setBlack] = useState(0);
  const [red, setRed] = useState(0);
  const [pink, setPink] = useState(0);
  const [yellow, setYellow] = useState(0);

  return (
    <div>
      {/* <DisplayData black={black} red={red} /> */}
      <h1>Value of Black : {black}</h1>
      <h2>Value of Red : {red}</h2>
      <h2>Value of Pink : {pink}</h2>
      <h2>Value of Yellow : {yellow}</h2>
      <button onClick={() => setBlack(black + 1)}>Increase Black</button>
      <button onClick={() => setPink(pink + 2)}>Increase Pink</button>
      <button onClick={() => setYellow(yellow + 3)}>Increase Yellow</button>
      <button onClick={() => setRed(red + 5)}>Increase Red</button>
    </div>
  )
}

export default DifferentStateCounter
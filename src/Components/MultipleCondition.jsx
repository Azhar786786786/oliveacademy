import React, { useState } from 'react'

function MultipleCondition() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("AHK");
  const [city, setCity] = useState("GKP");
  const [display, setDisplay] = useState(true);

  return (
    <>
      <hr></hr>
      <h1>MultipleCondition in UseState</h1>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <h1>{city}</h1>

      <button onClick={() => setCount(count + 1)}>Plus</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
      <button onClick={() => setCount(0)}>Reset</button>
      {
        count == 0 ? <h2>Zero</h2> :
          count == 1 ? <h2>One</h2> :
            count == 2 ? <h2>Two</h2> :
              count == 3 ? <h2>Three</h2> :
                count == 4 ? <h2>Four</h2> :
                  count == 5 ? <h2>Five</h2> :
                    count == 6 ? <h2>Six</h2> :
                      count == 7 ? <h2>Seven</h2> :
                        count == 8 ? <h2>Eight</h2> :
                          count == 9 ? <h2>Nine</h2> : <h2>out of Range</h2>
      }

      <button onClick={() => setName("Azhar Hussain Khan")}>Change Name</button>
      <button onClick={() => setCity("Gorakhpur")}>Change City</button>

      {display ? <h2>Mere Pyare Dosto Kya hal hai aap sabke?</h2> : null}

      <button onClick={() => setDisplay(!display)}>Hide/Display</button>

    </>
  )
}

export default MultipleCondition
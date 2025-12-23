import React, { useState } from 'react'

function CheckBoxData() {

  //const [hobby, setHobby] = useState(["Reading","Writing","Playing","Walking","Singing","Music","Gardening","Traveling"]);
  const [hobby, setHobby] = useState([]);

  const Hobbies = (event) => {
    console.log(event.target.value, event.target.checked);

    if (event.target.checked) {
        setHobby([...hobby,event.target.value]);
    }
    else{
      setHobby([...hobby.filter((item)=>item!=event.target.value)])
    }
  }

  return (
    <>
      <h2>Checkbox to check the hobbies details</h2>
      <input type="checkbox" onChange={Hobbies} id="Cooking" value="Cooking" />
      <label htmlFor='Cooking'>Cooking</label>

      <input type="checkbox" onChange={Hobbies} id="Music" value="Music" />
      <label htmlFor='Music'>Music</label>

      <input type="checkbox" onChange={Hobbies} id="Playing" value="Playing" />
      <label htmlFor='Playing'>Playing</label>

      <input type="checkbox" onChange={Hobbies} id="Singing" value="Singing" />
      <label htmlFor='Singing'>Singing</label>

      <input type="checkbox" onChange={Hobbies} id="Reading" value="Reading" />
      <label htmlFor='Reading'>Reading</label>

      <input type="checkbox" onChange={Hobbies} id="Writing" value="Writing" />
      <label htmlFor='Writing'>Writing</label>

      <input type="checkbox" onChange={Hobbies} id="Traveling" value="Traveling" />
      <label htmlFor='Traveling'>Traveling</label>

      <input type="checkbox" onChange={Hobbies} id="Gardening" value="Gardening" />
      <label htmlFor='Gardening'>Gardening</label>

      <input type="checkbox" onChange={Hobbies} id="Walking" value="Walking" />
      <label htmlFor='Walking'>Walking</label>

      <h1>{hobby.toString()}</h1>
    </>
  )
}

export default CheckBoxData
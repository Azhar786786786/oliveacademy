import React, { useState } from 'react'

function DropDownListData() {

  const [city, setCity] = useState('Gorakhpur');
  return (
    <>
      <h2>Select City of India</h2>
      <select defaultValue={'Gorakhpur'} name='' id='' onChange={(evt) => setCity(evt.target.value)}>
        <option value="Gorakhpur">Gorakhpur</option>
        <option value="Allahabad">Allahabad</option>
        <option value="Basti">Basti</option>
        <option value="Kanpur">Kanpur</option>
        <option value="Lucknow">Lucknow</option>
        <option value="Banaras">Banaras</option>
        <option value="Delhi">Delhi</option>
        <option value="Bombay">Bombay</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Chennai">Chennai</option>
        <option value="Karnataka">Karnataka</option>
      </select>
      <h2 style={{ color: 'green' }}>Selected City : {city}</h2>
      <hr/>
    </>
  )
}

export default DropDownListData
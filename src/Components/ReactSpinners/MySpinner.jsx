import React, { useState } from 'react'
import { ScaleLoader, FadeLoader, DotLoader, BarLoader } from 'react-spinners'

function MySpinner() {

  const [load, setLoad] = useState(true)
  const [data, setData] = useState("")

  setTimeout(() => {
    setLoad(false)
    setData("Data Loading Completed !")
  }, 9000)

  return (
    <div style={{ margin: 250 ,backgroundColor:"yellow"}}>
    
      <ScaleLoader loading={load} cssOverride={{ marginTop: 22 }} />
      <FadeLoader loading={load} cssOverride={{ marginTop: 22 }} />
      <BarLoader loading={load} cssOverride={{ marginTop: 22 }} />
      <DotLoader loading={load} cssOverride={{ marginTop: 22 }} />
      <h1>{data}</h1>

    </div>
  )
}

export default MySpinner
import React from 'react'

function PropsWithDifferentTheme({textcol,bg}) {
  return (
    <div style={{color:textcol,border:"5px solid pink",width:"700px",backgroundColor:bg,borderRadius:"20px",margin:"10px"}}>
    PropsWithDifferentTheme
    </div>
  )
}

export default PropsWithDifferentTheme
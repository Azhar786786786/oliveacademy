import React from 'react'

function PassJsxToProps({children,textcol="green"}) {
  return (
    <div style={{color:textcol,border:"5px solid pink",width:"700px",backgroundColor:"gray",borderRadius:"20px",margin:"10px"}}>
    <h1>Pass Jsx with Props</h1>
    <h2>{children}</h2>
    </div>
    
  )
}

export default PassJsxToProps
import React, { useState } from 'react'

function Position() {
    const [xoffset, setxoffset] = useState(0)
    const [yoffset, setyoffset] = useState(0)

  return (
    <div>
        <h1 style={{
            position:'absolute',
            left:xoffset,
            top:yoffset
        }}>
             hi
        </h1>

        <button type='button' onClick={()=>setxoffset(xoffset-10)}>left</button>
        <button type='button' onClick={()=>setxoffset(xoffset+10)}>right</button>
        <button type='button' onClick={()=>setyoffset(yoffset-10)}>top</button>
        <button type='button' onClick={()=>setyoffset(yoffset+10)}>bottom</button>
    </div>
  )
}

export default Position
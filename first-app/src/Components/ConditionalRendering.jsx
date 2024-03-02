import React from 'react'
import { useState } from 'react';
const ConditionalRendering = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <>
    <div>
        {toggle?<button>This is True</button>: <button>This is False</button>}

        {toggle && <button>This is True</button>}
<br />
<br />
<br />
        <button onClick={()=>setToggle(!toggle)}>toggle</button>
    </div>
    </>
  )
}

export default ConditionalRendering
import React from 'react'
import { useState } from 'react'


const Counter = () => {
    const [value,setvalue] = useState(9);

    const add = () =>{
        setvalue(value + 1)
    }
    const sub = () =>{
        setvalue(value-1)
    }
  return (
    <div>
        <h1>Count {value}</h1>
        <button onClick={add}>Add 1</button> 
        <button onClick={sub}>Subrtact 1</button>
    </div>

  )
}

export default Counter
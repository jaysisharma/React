import React from 'react'
import { useState } from 'react'


const Counter = () => {
    const [count,setcount] = useState(9);

    const add = () =>{
        setcount(count + 1)
    }
    const sub = () =>{
        setcount(count-1)
    }
  return (
    <div>
        <h1>Count {count}</h1>
        <button onClick={add}>Add 1</button> 
        <button onClick={sub}>Subrtact 1</button>
    </div>

  )
}

export default Counter
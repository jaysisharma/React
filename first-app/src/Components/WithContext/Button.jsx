import React, { useContext } from 'react'
import Component1 from './Component1'
import { counterContext } from './context'

const Button = () => {
  const value = useContext(counterContext);
  return (
    <div>
      <button onClick={()=>value.setCount((count)=> count+1)} className="btn bg-purple-700 p-2 px-6 text-white" ><span> <Component1 /> </span> <br /> Add</button>
    </div>
  )
}

export default Button
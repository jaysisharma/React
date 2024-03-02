import React from 'react'
import { useEffect,useState } from 'react'

const Hooks = () => {
    const [value,setValue] = useState(0);

    const add = () =>{
      setValue(value+1)
    }
    const sub =()=>{
      setValue(value-1)
    }

    useEffect(() => {
      alert("Everytime executed when re rendering component")
    })
    

    useEffect(() => {
      alert("First time executed")
    }, [])
    
    useEffect(() => {
      alert("Clean Up function When component is mounted that is hidden")
    
      return () => {
        console.log("vv")
      }
    }, [])
    

  return (
    <>
    <div className="val">
        <h2>Value is {value}</h2>
        <button onClick={add}>Add 1</button> 
        <button onClick={sub}>Subrtact 1</button>
    </div>
    </>
  )
}

export default Hooks
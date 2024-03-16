import React, { useContext } from 'react'
import { useState } from 'react'
import { counterContext } from './context'

const Counter2 = () => {
  const [count, setCount] = useState(0)

  const sum = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>

      <counterContext.Provider value={count}>
        <div>{count}</div>
        <button className="btn bg-red-400 p-2 px-4" onClick={sum}>Add</button>
      </counterContext.Provider>

    </>


  )
}

export default Counter2
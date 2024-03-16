import { useState } from 'react'
import Navbar from './Components/Navbar'
import Counter from './Components/Counter'
import Hooks from './Components/Hooks'
import Ref from './Components/Ref'
import ConditionalRendering from './Components/ConditionalRendering'
import Task from './Components/task'
import HandlingEvents from './Components/HandlingEvents'
import Counter2 from './Components/WithContext/Counter2'
import Button from './Components/WithContext/Button'

import { counterContext } from './Components/WithContext/context'

function App() {
  const [count, setCount] = useState(0)

  const sum = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      {/* <Navbar/> */}
      {/* <Counter /> */}
      {/* <Hooks/> */}
      {/* <Ref/> */}counter
      {/* <ConditionalRendering/> */}
      {/* <Task/> */}
      {/* <HandlingEvents/> */}


      <counterContext.Provider value={{count,setCount}}>
        <div className="w-full h-screen flex justify-center items-center flex-col gap-5">
        <div>{count}</div>
        <button className="btn bg-red-400 p-2 px-4" onClick={sum}>Add</button>
          <Button />
        </div>
      </counterContext.Provider>
    </>
  )
}

export default App

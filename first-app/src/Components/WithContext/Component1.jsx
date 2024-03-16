  import React, { useContext } from 'react'
  import { counterContext } from './context'

  const Component1 = () => {
    const value  = useContext(counterContext)
    return (
      <div>ssss{value.count}</div>
    )
  }

  export default Component1
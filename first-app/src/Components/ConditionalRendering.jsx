import React from 'react'
import { useState } from 'react';
const ConditionalRendering = () => {
  const [toggle, setToggle] = useState(false);
  const [mapvalue, setMapvalue] = useState([
    {
      id: 1,
      title: "Item 1",
      des: "Desc 1",
    },
    {
      id: 2,
      title: "Item 2",
      des: "Desc 2",
    },
    {
      id: 3,
      title: "Item 3",
      des: "Desc 3",
    },
    {
      id: 4,
      title: "Item 4",
      des: "Desc 4",
    }
  ])

 


  return (
    <>
      <div>
        {toggle ? <button>This is True</button> : <button>This is False</button>}

        {toggle && <button>This is True</button>}
        <br />
        <br />
        <br />
        <button onClick={() => setToggle(!toggle)}>toggle</button>

        <div className="list">List rendering</div>
        {mapvalue.map(value=>{
          return <div className="card" key={value.id}>
            <h1>{value.id}</h1>
            <p>{value.title}</p>
            <p>{value.des}</p>
          </div>
        })}
      </div>
    </>
  )
}

export default ConditionalRendering
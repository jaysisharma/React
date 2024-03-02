import React from 'react'
import { useState,useRef } from 'react';
const HandlingEvents = () => {
    const [form, setform] = useState({});
    const email = useRef(null)
    const phone = useRef(null)

    const handleClick = () =>{
        alert("Button Clicked")
    }
    const handlehover = () =>{
        alert("Mouse Hovered")
    }

    const handleChange = (e) => {
        setform({...form, [e.target.name]:e.target.value})
        console.log(form)
    }

    const handleSubmit = () =>{
        console.log(email.current.value, phone.current.value)
    }

  return (
    <>
    <div className="box text-3xl font-bold underline w-full h-screen flex flex-col gap-2 justify-center items-center">
        <button className="btn bg-black text-white p-2 rounded-xl" onClick={handleClick}>Click me</button>
        {/* <button className="btn bg-black text-white p-2 rounded-xl" onMouseOver={handlehover}>Click me</button> */}
        
        <input type="text" ref={email} name="email" className='border border-5 border-black' value={form.email?form.email:""}  onChange={handleChange} />
        <input type="text" ref={phone} name="phone" className='border border-5 border-black' value={form.phone?form.phone:""}  onChange={handleChange} />

        <button className="btn bg-black text-white p-2 rounded-xl" onClick={handleSubmit}>Submit</button>

        
    </div>
    </>
  )
}

export default HandlingEvents
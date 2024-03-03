import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar flex w-full h-20 bg-pink-400 text-white text-xl justify-around items-center">
      <div className="logo">Logo</div>
      <ul className='flex gap-5'>
        <NavLink to="/" className={(e)=> {return e.isActive? "underline text-black": ""}}> <li>Home</li></NavLink>
        <NavLink to="/about"  className={(e)=> {return e.isActive? "underline text-black": ""}}> <li>About</li></NavLink>

      </ul>
    </div>
  )
}

export default Navbar
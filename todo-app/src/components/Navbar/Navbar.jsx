import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar text-2xl text-white bg-purple-900 h-16 w-full flex justify-around items-center">
        <div className="logo">MyTodo</div>
        <ul className='flex gap-5 '>
            <li><a href="#">Home</a></li>
            <li><a href="#">Your Tasks</a></li>
        </ul>
    </div>
  )
}

export default Navbar
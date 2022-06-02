import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <span>&copy; Hudir 2022</span>
       <Link className='btn btn-secondary text-light mx-3 px-5' to='/'>Home</Link>
        <Link className='btn btn-secondary text-light mx-3 px-5' to='/about'>About</Link>
        <Link className='btn btn-secondary text-light mx-3 px-5' to='/blogs'>Blogs</Link>
        <Link className='btn btn-secondary text-light mx-3 px-5' to='/contact'>Contact</Link>
  
    </footer>
  )
}

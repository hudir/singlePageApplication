import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar App-header'>Navbar
        <Link className='btn-warning btn mx-3' to="/"> Home </Link>
        <Link className='btn-warning btn mx-3' to="/about"> About </Link>
        <Link className='btn-warning btn mx-3' to="/contact"> Contact </Link>

        {/* <a className='btn-warning btn mx-3' href="/contact" onClick={e=>e.preventDefault()}> Contact </a>  this don't work*/}
    </nav>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='App-header'>
        <p>Footer &copy; 2022 hudir</p>

        <Link className='btn-light btn mx-3' to="/"> Home </Link>
        <Link className='btn-light btn mx-3' to="/about"> About </Link>
        <Link className='btn-light btn mx-3' to="/contact"> Contact </Link>
    </footer>
  )
}

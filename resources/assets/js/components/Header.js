import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './Navbar'


const Header = () => (
  <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
    <div className='container'>
      <Link className='navbar-brand' to='/'>e_Bid</Link>
    </div>
  </nav>
)


/*const Header = () => (
  <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
    <NavBar />
  </nav>
)*/

export default Header

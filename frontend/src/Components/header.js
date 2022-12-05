import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

const Header=()=> {
  return (
    <div className='pages'>
        
          
        <NavLink to='/' activeClassName='is-active' id="home"exact ={true}>Home</NavLink>
        <NavLink to='/about' activeClassName='is-active' id='about'>About Us</NavLink>
        <NavLink to='/service' activeClassName='is-active' id='service'>Services</NavLink>
        <NavLink to='/products' activeClassName='is-active' id='product'>Products</NavLink>
        
        
    </div>
    
  )
}

export default Header;
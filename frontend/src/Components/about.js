import React from 'react';
import { NavLink } from 'react-router-dom';
import './about.css';

const About=()=> {
  return (
    <div className='about'>
      
      <h1>About Us</h1>
      <h3>Beverly spices is located at Highway street <br></br>
      next to Kimberly Gardens.</h3>
      {/* <NavLink to='./contact'>Contact Us</NavLink> */}
      <h3>We both do home and office deliveries</h3>
    </div>
  )
}

export default About;
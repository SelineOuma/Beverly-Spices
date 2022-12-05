import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook,FaTwitter,FaGithub,FaPhone,FaYouTube } from 'react-icons/fa';
import './home.css';

const Home=()=> {
  return (
    <div className='main'>
      
      <div className='home1'>
      <h1>Beverly Spices</h1>
      <h2>Your number one supplier of a wide variety of spices.<br></br>
      We do our deliveries from 6am to 9pm daily from <br></br>
      Monday to Sunday across our Lake-Region Counties</h2>
      
       {/* <button><NavLink id='deliver'to='/delivery'>Free-delivery</NavLink></button>  */}


     </div>
     
     <div className='footer'>
      <div className='policies'>
        <h2>Terms and policies</h2>
      <NavLink to='/policies'>Terms and policies</NavLink>
      </div>
      <div className='contact1'>
        <h2>Follow Us</h2>
        
         
      <a href='https//www.facebook.com'id='facebook'>Facebook<FaFacebook/></a> 
      <a href='https//www.twitter.com'id='twitter'>Twitter<FaTwitter/></a>
      <a href='https//www.github.com'id='github'>Github<FaGithub/></a> 
      <a href='#'id='phone'>+254781254181<FaPhone/></a>
      <a href ='https//www.youtube.com'id='youtube'>YouTube</a>
    
  

         </div>
       <div className='company'>
        <h2>Company</h2>
        <NavLink id='home1'to='/'>Home</NavLink> 
        <NavLink id='service1' to='/service'>Services</NavLink>
        <NavLink id='about1'to='/about'>About Us</NavLink>  
        <NavLink id='product1'to='/products'>Products</NavLink> 
        </div>
        
      {/* <div className='foot'>
      <h5>All Rights Reserved@2022</h5></div>   */}
     </div> 
    
     </div>
  )
}

export default Home;
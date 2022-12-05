import React from 'react';
import './products.css';
import image1 from '../Components/images/cardamon.jpg';
import image2 from '../Components/images/paprika.jpg';
import image3 from '../Components/images/tumeric.jpg';
import image4 from'../Components/images/black pepper.webp';
import image5 from '../Components/images/cinnamon.jpg';
import image6 from '../Components/images/coriander.jpg';
import image7 from '../Components/images/ginger.webp';
import image8 from '../Components/images/Mixed-herbs.png';
import image9 from '../Components/images/mustard.jpg';
import image10 from '../Components/images/Red-Chilly.jpg';
import { NavLink } from 'react-router-dom';

const Products=()=>{
  return (
    <div className='product'>
      <hr></hr> 
        <h1>Featured Products</h1>
        <div className='images'>
          
        <div className='top'>
          <div className='cardmon'>
            <img src={image1} alt='cardmon'/>
            <h4>Cardamon<br></br>1kg-5kg<br></br>Kshs.1500-Kshs.7000</h4>
            <button><NavLink id='btn' to='/delivery'>Free-delivery</NavLink></button>
            </div>
          
          <div className='paprika'>
            <img src={image2} alt='paprika'/>
            <h4>Paprika <br></br>5kg-25kg<br></br>Kshs.3000-Kshs.15000</h4>
            <button><NavLink id='btn' to='./delivery'>Free-delivery</NavLink></button>
            </div>
          
          <div className='tumeric'>
            <img src={image3} alt='tumeric'/>
            <h4>Tumeric<br></br>5kg-25kg<br></br>Kshs.2000-Kshs.10000</h4>
            <button><NavLink id='btn' to='./delivery'>Free-delivery</NavLink></button>
            </div>

            </div>
            <hr></hr>
            <div className='middle'>
          <div className='pepper'>
            <img src={image4} alt='black pepper'/>
            <h4>Black pepper<br></br>500grams-5kg<br></br>Kshs.500-Kshs.6000</h4>
            <button><NavLink id='btn' to='./delivery'>Free-delivery</NavLink></button>
            </div>
            <div className='cinnamon'>
              <img src={image5} alt='cinnamon'/>
              <h4>Cinnamon<br></br>1kg-5kg<br></br>Kshs.1000-Kshs.5000</h4>
              <button><NavLink id='btn' to='./delivery'>Free-delivery</NavLink></button>
            </div>
            <div className='coriander'>
              <img src={image6} alt='coriander'/>
              <h4>Coriander<br></br>1kg-5kg<br></br>Kshs.1500-Kshs.6000</h4>
              <button><NavLink id='btn' to='./delivery'>Free-delivery</NavLink></button>
            </div>
            </div>
            <hr></hr>
            <div className='bottom'>
            <div className='ginger'>
              <img src={image7} alt='ginger'/>
              <h4>Ginger<br></br>1kg-5kg<br></br>Kshs.1200-Kshs.5600</h4>
              <button><NavLink id='btn' to='./delivery'>Free-delivery</NavLink></button>
            </div>
            <div className='mixed-herbs'>
              <img src={image8} alt='herbs'/>
              <h4>Mixed-herbs<br></br>1kg-5kg<br></br>Kshs.1500-Kshs.6000</h4>
              <button><NavLink id='btn' to='./delivery'>Free-delivery</NavLink></button>
            </div>
            <div className='mustard'>
              <img src={image9} alt='mustard'/>
              <h4>Mustard<br></br>1kg-5kg<br></br>Kshs.1500-Kshs.6000</h4>
              <button><NavLink id='btn' to='./delivery'>Free-delivery</NavLink></button>
            </div>
            </div>
            <hr></hr>
            <div className='final'>
            <div className='Red-chilly'>
              <img src={image10} alt='chilly'/>
              <h4>Coriander<br></br>1kg-5kg<br></br>Kshs.1500-Kshs.6000</h4>
              <button><NavLink id='btn' to='./delivery'>Free-delivery</NavLink></button>
            </div>
            </div>
            </div>
            </div>
        
        
        
  );
};

export default Products;
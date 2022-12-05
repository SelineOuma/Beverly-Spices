import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './delivery.css';

 class Delivery extends Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      phonenumber:"",
      deliverylocation:"",
      spice:"",
      payment:"",
    };
  }

  handleEmail=(event)=>{
    this.setState({
      email: event.target.value,
    });
  };
  handlePhonenumber=(event)=>{
    this.setState({
      phonenumber: event.target.value,
    });
  };
  deliverylocation=(event)=>{
    this.setState({
      deliverylocation:event.target.value,
    });
  };
  handleSpice=(event)=>{
    this.setState({
      spice:event.target.value,
    });
  };
  handlePayment=(event)=>{
    this.setState({
      payment:event.target.value,
    });
  };
  handleSubmit=(event)=>{
    event.preventDefault();
    const userObject={
      email:this.state.email,
      phonenumber:this.state.phonenumber,
      deliverylocation:this.state.deliverylocation,
      spice:this.state.spice,
      payment:this.state.payment,
    };

  }

  render() {
    return (
      <div className='wrapper'>
        <div>
        
        </div>
        <form className='deliver' onSubmit={this.handleSubmit}>
          <div>
          {!this.state.email && this.state.error && (
              <p>{this.state.error.response.data.errors.email.message}</p>
            )}
            <label htmlFor='email'>Email</label>
            <input type='text' placeholder='email' value={this.state.email}
            onChange={this.handleEmail}/>
          </div>
          <div>
          {!this.state.phonenumber && this.state.error && (
              <p>{this.state.error.response.data.errors.phonenumber.message}</p>
            )}
            <label htmlFor='phonenumber'>Enter Phonenumber</label>
            <input type='text' placeholder='phonenumber' value={this.state.phonenumber}
            onChange={this.handlePhonenumber}/>
          </div>
          <div>
          {!this.state.deliverylocation && this.state.error && (
              <p>{this.state.error.response.data.errors.deliverylocation.message}</p>
            )}
            <label htmlFor='location'>Enter your location</label>
            <input type='text' placeholder='Select county' value={this.state.handledeliveryLocation}
            onChange={this.handledeliveryLocation}/>
          </div>
          <div>
          {!this.state.spice && this.state.error && (
              <p>{this.state.error.response.data.errors.spice.message}</p>
            )}
            <label htmlFor='spice'>Spice</label>
            <input type='text' placeholder='spice for delivery' value={this.state.spice}
            onChange={this.handleSpice}/>
          </div>
          <div className='dropdown1'>
          {!this.state.payment && this.state.error && (
              <p>{this.state.error.response.data.errors.payment.message}</p>
            )}
            <label htmlFor='payment'>Mode of payment</label>
            <input type='text' placeholder='choose mode of payment' value={this.state.payment}
            onChange={this.handlePayment}/>
            {/* <div className='content1'>
              <a href ='#'>Mpesa</a>
              <a href='#'>Pay on delivery</a>
            </div> */}
          </div>
          <button><NavLink to='login'> Make your orders</NavLink></button>
        </form>
        
      </div>
    )
  }
}
export default Delivery;


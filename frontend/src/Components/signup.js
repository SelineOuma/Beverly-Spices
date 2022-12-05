import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './signup.css';

 class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      username:"",
      email:"",
      phonenumber:"",
      password:"",
    };
  }

  handleUsername=(event)=>{
    this.setState({
      username: event.target.value,
    });
  };
  handleEmail=(event)=>{
    this.setState({
      email: event.target.value,
    });
  };
  handlePhonenumber=(event)=>{
    this.setState({
      phonenumber:event.target.value,
    });
  };
  handlePassword=(event)=>{
    this.setState({
      password:event.target.value,
    });
  };
  
  handleSubmit=(event)=>{
    event.preventDefault();
    const userObject={
      username:this.state.username,
      email:this.state.email,
      phonenumber:this.state.phonenumber,
      password:this.state.password,
      
    };

  }

  render() {
    return (
      <div className='wrapper'>
        <div>
        
        </div>
        <form className='signup' onSubmit={this.handleSubmit}>
          <div>
          {!this.state.username && this.state.error && (
              <p>{this.state.error.response.data.errors.username.message}</p>
            )}
            <label htmlFor='username'>Username</label>
            <input type='text' placeholder='username' value={this.state.username}
            onChange={this.handleUsername}/>
          </div>
          <div>
          {!this.state.email && this.state.error && (
              <p>{this.state.error.response.data.errors.email.message}</p>
            )}
            <label htmlFor='email'>Enter email</label>
            <input type='text' placeholder='email' value={this.state.email}
            onChange={this.handleEmail}/>
          </div>
          <div>
          {!this.state.phonenumber && this.state.error && (
              <p>{this.state.error.response.data.errors.phonenumber.message}</p>
            )}
            <label htmlFor='phonenumber'>Enter your phonenumber</label>
            <input type='number' placeholder='Phonenumber' value={this.state.handlephonenumber}
            onChange={this.handlePhonenumber}/>
          </div>
          <div>
          {!this.state.password && this.state.error && (
              <p>{this.state.error.response.data.errors.password.message}</p>
            )}
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='password' value={this.state.password}
            onChange={this.handlePassword}/>
          </div>
          
          <button><NavLink to='signup'>Signup</NavLink></button>
        </form>
        
      </div>
    )
  }
}
export default Signup;

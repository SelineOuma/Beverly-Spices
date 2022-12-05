import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './login.css';

 class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      phonenumber:"",
      password:"",
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
  handlePassword=(event)=>{
    this.setState({
      password:event.target.value,
    });
  };
  
  
  handleSubmit=(event)=>{
    event.preventDefault();
    const userObject={
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
        <form className='login' onSubmit={this.handleSubmit}>
          <div>
          {!this.state.email && this.state.error && (
              <p>{this.state.error.response.data.errors.email.message}</p>
            )}
            <label htmlFor='email'>Email</label>
            <input type='text' placeholder='email' value={this.state.email}
            onChange={this.handleEmail}/>
          </div>
          
          <div>
          {!this.state.password && this.state.error && (
              <p>{this.state.error.response.data.errors.password.message}</p>
            )}
            <label htmlFor='location'>Password</label>
            <input type='password' placeholder='Password' value={this.state.handledeliveryLocation}
            onChange={this.password}/>
          </div>
          
          
          <button><NavLink to='signup'>Do you have an account? Signup</NavLink></button>
        </form>
        
      </div>
    )
  }
}
export default Login;

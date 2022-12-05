import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import About from '../Components/about';
import Home from '../Components/home';
import Products from '../Components/products';
import Service from '../Components/service';
import Header from '../Components/header';
import Delivery from '../Components/delivery';
import Login from '../Components/login';
import Signup from '../Components/signup';

const AppRouters=()=> {
  return (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route exact path = "/" component={Home}/>
            <Route path ="/about" component={About}/>
            <Route path="/service" component={Service}/>
            <Route path ="/products" component={Products}/>
            <Route path="/delivery" component={Delivery}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
        </Switch>
    </div>
    </BrowserRouter>
  )
}

export default AppRouters;
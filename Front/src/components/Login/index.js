// Dependecies
import React, { Component } from 'react';

// Assets
import './login.css'

// Component
import LoginForm from './LoginForm';

class Login extends Component {
  render(){
    return (
      <div className="bg-secondary ml-auto mr-auto">
        <h1 className="title">Login</h1>
        <LoginForm />
      </div>
    );
  }
}

export default Login;

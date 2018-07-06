// Dependecies
import React, { Component } from 'react';

// Assets
import './register.css'

// Component
import RegisterForm from './RegisterForm';

class Register extends Component {
  render(){
    return (
      <div>
        <div className="bg-secondary ml-auto mr-auto">
          <h1 className="title">Register</h1>
          <RegisterForm />
        </div>
      </div>
    );
  }
}

export default Register;

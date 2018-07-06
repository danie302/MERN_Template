// Dependencies
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class UserWindow extends Component {
  render(){
    const token = sessionStorage.getItem('Token');
    if (token) {
      return(
        <div>
          <h1> Tasks </h1>
        </div>
      );
    }else {
      return(<Redirect to ="/"/>);
    }
  }
}

export default UserWindow;

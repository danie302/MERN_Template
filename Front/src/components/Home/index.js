// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import  './home.css';

class Home extends Component {
  render(){
    const token = sessionStorage.getItem('Token');
    let Name =  sessionStorage.getItem('Name');
    if (token) {
      return(
        <div className="container-fluid">
          <div className="jumbotron jumbotron-fluid bg-secondary">
            <div className="container">
              <h1 className="display-4 center-title"> My Task App </h1>
              <p className="lead center">Welcome { Name }.</p>
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div >
          <div className="jumbotron jumbotron-fluid bg-secondary">
            <div className="container">
              <h1 className="display-4 center-title"> My Task App </h1>
              <p className="lead center">Get your own task reminder.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-5 ml-auto">
              <div className="card bg-warning  rad">
                <div className="card-body text-center">
                  <h1 className="card-title">Log In</h1>
                  <Link className="box" to="/login">|||||||||||</Link>
                </div>
              </div>
            </div>
            <div className="col-5 mr-auto">
              <div className="card bg-warning  rad">
                <div className="card-body  text-center">
                  <h1 className="card-title">Register</h1>
                  <Link className="box" to="/register">|||||||||||</Link>
                </div>
              </div>
            </div>
            </div>
        </div>
      );
    }
  }
}

export default Home;

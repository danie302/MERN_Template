// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import logo from './favicon.ico';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      now: "",
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e){
    sessionStorage.removeItem("Token");
  }
  render(){
    const token = sessionStorage.getItem('Token');
    if (token) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <Link to="/" className="navbar-brand" >
            <img src={ logo } className="img-fluid" width="30vw" height="30vw"  alt="Logo" />
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to ="/" className="nav-link" onClick={ this.onSubmit } >Logout <span className="sr-only">(current)</span></Link>
              </li>
            </ul>

          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <Link to="/" className="navbar-brand" >
            <img src={ logo } className="img-fluid" width="30vw" height="30vw"  alt="Logo" />
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to ="/login" className="nav-link" >Login <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item active">
                <Link to="/register" className="nav-link" >Register</Link>
              </li>
            </ul>

          </div>
        </nav>
      );
    }
  }
}

export default Navbar;

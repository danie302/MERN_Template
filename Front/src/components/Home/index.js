// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import  './home.css';

class Home extends Component {
  render(){
    return(
      <div className="container-fluid">
        <div className="jumbotron jumbotron-fluid bg-dark">
          <h1 className="center-title"> Bienvenido </h1>
          <pre className="center">Plantilla de Logeo.</pre>
        </div>
        <div className="row">
          <div className="card carta mr-auto ml-auto">
            <div className="card-body text-center">
              <h1 className="card-title">Inicia Sesion</h1>
              <Link className="textcolor" to="/login">||||||||||||</Link>
            </div>
          </div>
          <div className="card carta ml-auto mr-auto">
            <div className="card-body  text-center">
              <h1 className="card-title">Crear Cuenta</h1>
              <Link className="textcolor" to="/register">||||||||||||</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

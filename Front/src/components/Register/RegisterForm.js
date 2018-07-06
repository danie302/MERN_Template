// Dependencies
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Assets
import './register.css';

// Actions
import { registerUser } from '../../actions/userActions';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: "",
      Name: "",
      Email: "",
      Password: "",
      Success: false,
      RegSuccess: false,
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

onChange(e){
  this.setState({ [e.target.name]: e.target.value});
}
onSubmit(e){
  e.preventDefault();
  const newUser = {
    username: this.state.User,
    name: this.state.Name,
    email: this.state.Email,
    password: this.state.Password,
  };
  console.log(newUser);
  this.props.registerUser(newUser);
  console.log("User register");
}
componentWillReceiveProps(nextProps) {
  if (nextProps.RegSuccess !== this.state.RegSuccess) {
    this.setState({RegSuccess: nextProps.RegSuccess});
  }
}

  render(){
    if(this.state.RegSuccess === true) {
      console.log("Redirecting");
      return(<Redirect to ="/"/>);
    }else {
      return (
        <div className="container">
          <form>
            <div className="row">
              <div className="col">
                <input className="form-box" type="text" name="User" value= { this.state.User } placeholder=" User" onChange= {this.onChange}></input>
              </div>
              <div className="col">
                <input className="form-box" type="email" name="Email" value= { this.state.Email } placeholder=" Email" onChange= {this.onChange}></input>
              </div>
              <div className="col">
                <input className="form-box" type="text" name="Name" value= { this.state.Name } placeholder=" Name" onChange= {this.onChange}></input>
              </div>
              <div className="col">
                <input className="form-box" type="password" name="Password" value= { this.state.Password } placeholder=" Password" onChange= {this.onChange}></input>
              </div>
              <div className="col">
                <button className="btn btn-primary bg-warning form-input" onClick={ this.onSubmit } >Submit</button>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
}

RegisterForm.propTypes = {
    registerUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  RegSuccess: state.users.RegSuccess,
});

export default connect(mapStateToProps,{ registerUser })(RegisterForm);

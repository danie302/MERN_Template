// Dependencies
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
        <div>
          <form>
            <div>
              <label>User: </label>
              <input type="text" name="User" value= { this.state.User } placeholder="User" onChange= {this.onChange}></input>
            </div>
            <div>
              <label>Email: </label>
              <input type="email" name="Email" value= { this.state.Email } placeholder="Email" onChange= {this.onChange}></input>
            </div>
            <div>
              <label>Name: </label>
              <input type="text" name="Name" value= { this.state.Name } placeholder="Name" onChange= {this.onChange}></input>
            </div>
            <div>
              <label>Password: </label>
              <input type="password" name="Password" value= { this.state.Password } placeholder="Password" onChange= {this.onChange}></input>
            </div>
            <div>
              <button className="btn btn-primary bg-warning" onClick={ this.onSubmit } >Submit</button>
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

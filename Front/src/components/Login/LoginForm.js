// Dependencies
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Assets
import './login.css'

// Actions
import { validateUser } from '../../actions/userActions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: "",
      Password: "",
      LogSuccess: false,
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

onSubmit(e){
  const userData = {
    username: this.state.User,
    password: this.state.Password,
  }
  e.preventDefault();
  this.props.validateUser(userData);
  console.log("Make a submit");
}

onChange(e){
  this.setState({ [e.target.name]: e.target.value});
}

componentWillReceiveProps(nextProps) {
  if (nextProps.LogSuccess !== this.state.LogSuccess) {
    this.setState({LogSuccess: nextProps.LogSuccess});
    sessionStorage.setItem('Token', nextProps.Token);
    sessionStorage.setItem('Name', nextProps.name);
  }
}

  render(){
    if (this.state.LogSuccess === true) {
        console.log("Redirecting");
        return(<Redirect to ="/"/>);
    } else {
      return(
      <div>
        <form>
          <div className="row">
            <div className="col">
              <input className="form-box" type="text" name="User" value= { this.state.User } placeholder="User" onChange= {this.onChange}></input>
            </div>
            <div className="col">
              <input className="form-box" type="password" name="Password" value= { this.state.Password } placeholder="Password" onChange= {this.onChange}></input>
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

LoginForm.propTypes = {
  validateUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  LogSuccess: state.users.LogSuccess,
  Token: state.users.token,
  name: state.users.name,
});

export default connect(mapStateToProps, { validateUser })(LoginForm);

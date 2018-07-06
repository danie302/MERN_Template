// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Navbar from '../Nav/';

// Assets
import './App.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const {children } = this.props;
    return (
      <div className="">
        <Navbar />
        {children}
      </div>
    );
  }
}

export default App;

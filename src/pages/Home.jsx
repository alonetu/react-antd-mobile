import React, { Component } from 'react';
import Login from './Login';
import '../style/home.scss'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Login></Login>
      </div>
    );
  }
}

export default Home;
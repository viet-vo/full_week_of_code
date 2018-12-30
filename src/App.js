import React, { Component } from 'react';
import './App.css';
// import Signin from './comp/Signin';
// import Original from './comp/Original';
import Navbar from './comp/Navbar'

class App extends Component {
  handleClick() {
    console.log('info')
  }
  render() {
    return (
      <div className="App">
      <Navbar></Navbar>
        {/* <Signin></Signin> */}
        {/* <Original></Original> */}
      </div>
    );
  }
}

export default App;

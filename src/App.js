import React, { Component } from 'react';
import logo from './v2.png';
import './App.css';
import Signin from './comp/Signin';

class App extends Component {
  handleClick() {
    console.log('info')
  }
  render() {
    return (
      <div className="App">
        <Signin></Signin>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://github.com/viet-vo/full_week_of_code"
            target="_blank"
            rel="noopener noreferrer"
          >
            full week of code start
          </a>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      color: ['Green', 'Orange', 'Blue', 'Red', 'Purple', 'Yellow']
    };
  }

  render() {
    let colorDisplay = this.state.color.map((element, index) => {
      return <h2 type={index}>{element}</h2>;
    });

    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React. Don’t start counting until it Hurts</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.state.color}</p>
        <p>{colorDisplay}</p>
      </div>
    );
  }
}

export default App;

// 8:05 - 11/9

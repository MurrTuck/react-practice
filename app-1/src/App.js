import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: 'Here'
    };
  }

  handleChange(value) {
    this.setState({ message: value });
  }
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React. Don’t start counting until it Hurts.</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.state.message}</p>
        <input onChange={e => this.handleChange(e.target.value)} type='text' />
      </div>
    );
  }
}

export default App;

// 2:46 - 11/20

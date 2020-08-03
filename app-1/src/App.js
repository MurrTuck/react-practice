import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: 'murray'
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
        <input onChange={e => this.handleChange(e.target.value)} type='text' />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;

<<<<<<< HEAD
//8/19 - 1:54
=======
// 2:50 - 3/4 - No
>>>>>>> 5a1e83d2dabb8160255689da1a965c53fd11f4b4

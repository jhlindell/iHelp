import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RewardsCarousel from './components/rewards.component.js';
import './App.css';
import Kid from './components/kid';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Kid />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

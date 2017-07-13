import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Navigation from './components/navigation.component';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
      <Navigation />
        <div className="container">
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

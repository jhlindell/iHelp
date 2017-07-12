import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TaskList from './components/taskList.js';
import './App.css';
import Navigation from './components/navigation.component';
import Tasks from './components/tasks.component';
import Kid from './components/kid';
import RewardsCarousel from './components/rewards.component.js';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Navigation />
        <TaskList />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

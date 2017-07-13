import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import TaskList from './components/taskList.js';
import KidList from './components/kidList.js';
import RewardsCarousel from './components/rewards.component.js';
import {Navbar, NavItem} from 'react-materialize'


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar brand='iHelp' right>
            <NavItem><Link to="/">Home</Link></NavItem>
            <NavItem><Link to="/tasks">Tasks</Link></NavItem>
            <NavItem><Link to="/kids">Kids</Link></NavItem>
            <NavItem><Link to="/rewards">Rewards</Link></NavItem>
          </Navbar>

          <Route exact path="/" component={Home}/>
          <Route path="/tasks" component={TaskList}/>
          <Route path="/kids" component={KidList}/>
          <Route path="/rewards" component={RewardsCarousel}/>
        </div>
      </Router>
    )
  }
}

export default App;

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import AggList from './components/aggList.js';
import TaskList from './components/taskList.js';
import KidList from './components/kidList.js';
import RewardsCarousel from './components/rewards.component.js';
import {Navbar, NavItem} from 'react-materialize'


class App extends Component {
  state = {
    tasks: [
      {id: 1, taskName: "Mow the lawn", taskPoints: 3},
      {id: 2, taskName: "Do the dishes", taskPoints: 2}
    ],
    kids: [
      {id: 1, kidName: "Taylor", pointsEarned: 12},
      {id: 2, kidName: "Hunter", pointsEarned: 10}
    ],
    value: 0

  }

  addTask = (task) => {
    let tasks = this.state.tasks;
    task.id = tasks.length +1;
    tasks.push(task);
    this.setState({tasks:tasks})
  };

  addKid = (kid) => {
    let kids = this.state.kids;
    kid.id = kids.length +1;
    kids.push(kid);
    this.setState({kids:kids})
  }

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

          <Route exact path="/" component={() => <AggList tasks={this.state.tasks} kids={this.state.kids}/>}/>
          <Route path="/tasks" component={() => <TaskList tasks={this.state.tasks} addTask={this.addTask} />}/>
          <Route path="/kids" component={() => <KidList kids={this.state.kids} addKid={this.addKid} />}/>
          <Route path="/rewards" component={RewardsCarousel}/>
        </div>
      </Router>
    )
  }
}

export default App;

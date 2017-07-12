import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'
import TaskList from './taskList.js'
import Kid from './kid'
import RewardsCarousel from './rewards.component'

class Navigation extends Component {
  constructor() {
    super()

    this.state = {
      tasks: true,
      kids: false,
      rewards: false
    }

    this.clickTasks = this.clickTasks.bind(this)
    this.clickKids = this.clickKids.bind(this)
    this.clickRewards = this.clickRewards.bind(this)
  }

  clickTasks() {
    this.setState({
      tasks: true,
      kids: false,
      rewards: false
    })
  }

  clickKids() {
    this.setState({
      tasks: false,
      kids: true,
      rewards: false
    })
  }

  clickRewards() {
    this.setState({
      tasks: false,
      kids: false,
      rewards: true
    })
  }

  render() {
    return (
      <div>
        <Navbar brand='iHelp' right>
        <NavItem onClick={this.clickTasks}>Tasks</NavItem>
        <NavItem onClick={this.clickKids}>Kids</NavItem>
        <NavItem onClick={this.clickRewards}>Rewards</NavItem>
        </Navbar>
        { this.state.tasks &&
          <TaskList />
        }
        { this.state.kids &&
          <Kid />
        }
        { this.state.rewards &&
          <RewardsCarousel />
        }
      </div>
    )

  }
}

export default Navigation

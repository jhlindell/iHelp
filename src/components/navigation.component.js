import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'
import Kid from './kid'
import RewardsCarousel from './rewards.component'

class Navigation extends Component {
  constructor() {
    super()

    this.state = {
      kids: false,
      rewards: false
    }

    this.clickKids = this.clickKids.bind(this)
    this.clickRewards = this.clickRewards.bind(this)
  }

  clickKids() {
    this.setState({
      kids: true
    })
  }

  clickRewards() {
    this.setState({
      rewards: true
    })
  }

  render() {
    return (
      <div>
        <Navbar brand='iHelp' right>
        <NavItem onClick={this.clickKids}>Kids</NavItem>
        <NavItem onClick={this.clickRewards}>Rewards</NavItem>
        </Navbar>
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

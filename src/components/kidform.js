import React from 'react';

class Kidform extends React.Component {

  constructor(){
    super();
    this.state = {
      kidName: '',
      pointsEarned: 0
    }
  }

  add = (e) => {
      e.preventDefault();
      this.props.add(this.state)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  render(){
    return (
      <form onSubmit={this.add}>
        <label htmlFor="kidName">Kid Name</label>
        <input id="kidName" name="kidName" value={this.state.kidName} onChange={this.handleChange}/>
        <button>Add Kid</button>
      </form>
    )
  }

}

export default Kidform;

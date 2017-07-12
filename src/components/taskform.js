import React from 'react';

class Taskform extends React.Component {

  constructor(){
    super();
    this.state = {
      taskName: '',
      taskPoints: 0
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
        <label htmlFor="taskName">Task Name</label>
        <input id="taskName" name="taskName" value={this.state.taskName} onChange={this.handleChange}/>
        <label htmlFor="taskPoints">Task Points</label>
        <input id="taskPoints" name="taskPoints"  onChange={this.handleChange}/>
        <button>Add Task</button>
      </form>
    )
  }

}

export default Taskform;

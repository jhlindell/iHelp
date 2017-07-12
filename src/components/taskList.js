import React from 'react';
import Task from "./task.js";
import Taskform from './taskform.js'

class TaskList extends React.Component {

  constructor(){
    super();
    this.state = {
        tasks: [
          {taskName: "Mow the lawn", taskPoints: 3},
          {taskName: "Do the dishes", taskPoints: 2}
        ]
    }
  }

  addTask = (task) => {
    console.log(task);
    let tasks = this.state.tasks;
    tasks.push(task);
    this.setState({tasks:tasks})
  }

  render() {
    return (
      <div>
        <div className="collection">
          { this.state.tasks.map((task, i) => <Task key={ i } task = {task} />)}
        </div>
        <Taskform add={this.addTask}/>
      </div>
    )
  }
}

export default TaskList;

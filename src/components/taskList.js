import React from 'react';
import Task from "./task.js";
import Taskform from './taskform.js';
import {Table, Row, Col} from 'react-materialize'

class TaskList extends React.Component {

  constructor(){
    super();
    this.state = {
        tasks: [
          {id: 1, taskName: "Mow the lawn", taskPoints: 3},
          {id:2, taskName: "Do the dishes", taskPoints: 2}
        ]
    }
  }

  addTask = (task) => {
    let tasks = this.state.tasks;
    task.id = tasks.length +1;
    tasks.push(task);
    this.setState({tasks:tasks})
  }

  render() {
    return (
      <Row className="taskList">
        <Col m={8} offset="m2">
          <Table>
            <thead>
              <tr>
                <th data-field="id">Id</th>
                <th data-field="taskName">Task Name</th>
                <th data-field="taskPoints">Task Points</th>
              </tr>
            </thead>
            <tbody>
              { this.state.tasks.map(task => <Task key={ task.id } task = {task} />)}
            </tbody>
          </Table>
          <Taskform add={this.addTask}/>
        </Col>
      </Row>
    )
  }
}

export default TaskList;

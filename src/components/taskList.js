import React from 'react';
import Task from "./task.js";
import Taskform from './taskform.js';
import {Table, Row, Col} from 'react-materialize'

class TaskList extends React.Component {

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
              { this.props.tasks.map(task => <Task key={ task.id } task = {task} />)}
            </tbody>
          </Table>
          <Taskform add={this.props.addTask}/>
        </Col>
      </Row>
    )
  }
}

export default TaskList;

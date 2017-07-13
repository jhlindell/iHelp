import React from 'react';

class Task extends React.Component {

  render() {
    return (
      <tr>
        <td>{this.props.task.id} </td>
        <td>{this.props.task.taskName} </td>
        <td>{this.props.task.taskPoints} </td>
      </tr>
    )
  }
}

export default Task;

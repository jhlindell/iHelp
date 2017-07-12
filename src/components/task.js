import React from 'react';

class Task extends React.Component {


  render() {
    return (
      <div className="collection-item">
        Task: {this.props.task.taskName} Points: {this.props.task.taskPoints}
      </div>
    )
  }

}

export default Task;

import React, { Component } from 'react';

class TasksList extends Component {
  render() {
    const { tasks } = this.props;
    console.log(this.props.tasks);
    return (
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.text}</li>;
        })}
      </ul>
    );
  }
}

export default TasksList;

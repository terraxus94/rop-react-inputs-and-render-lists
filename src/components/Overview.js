import React, { Component } from 'react';
import DeleteButton from './deleteButton';
import './style.css';

class TasksList extends Component {
  constructor() {
    super();
    this.state = {
      hover: false,
      hoverElementID: null,
    };
  }
  handleMouseOver = (e) => {
    if (e.target.getAttribute('data-key')) {
      this.setState({
        hover: true,
        hoverElementID: e.target.getAttribute('data-key'),
      });
    }
  };
  handleMouseOut = (e) => {
    this.setState({
      hoverElementID: null,
    });
  };

  handleTaskDelete = (taskID) => {
    this.props.onDeleteTask(taskID);
  };

  render() {
    const { tasks } = this.props;
    return (
      <ul style={{ width: '30%' }}>
        {tasks.map((task, i) => {
          return (
            <li
              key={task.id}
              onMouseEnter={this.handleMouseOver}
              onMouseLeave={this.handleMouseOut}
              data-key={task.id}
            >
              {i + 1} {task.text}
              {this.state.hoverElementID === task.id && (
                <button
                  onClick={(e) => {
                    this.handleTaskDelete(task.id);
                  }}
                >
                  Delete task
                </button>
              )}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default TasksList;

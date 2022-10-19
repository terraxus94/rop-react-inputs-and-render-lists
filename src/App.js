import React, { Component } from 'react';
import TasksList from './components/Overview';
import uniqid from 'uniqid';

// Our application will be made of two components, App and Overview. Your application should render an input field and a submit button. With the submit button, you can add the content from your input to a “tasks array” that is managed in state. (We will use class components for this example because we haven’t introduced hooks in this section yet). Finally, for each task in the tasks array, an HTML list element should be rendered.

// Step 1: Break The UI Into A Component Hierarchy
// TaskInputBar
// TasksTable

// Step 2: Build A Static Version in React
class TaskInputBar extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid(),
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  handleTaskSubmit = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid(),
      },
    });
  };

  handleTaskDelete = (taskID) => {
    console.log(taskID);
    const currentTasks = this.state.tasks;
    const newTasks = currentTasks.filter((task) => {
      if (task.id !== taskID) {
        return task;
      }
    });
    this.setState({
      tasks: newTasks,
    });
  };

  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <form onSubmit={this.handleTaskSubmit}>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
          ></input>
          <button type={'submit'}>Add task</button>
        </form>
        <TasksList tasks={tasks} onDeleteTask={this.handleTaskDelete} />
      </div>
    );
  }
}

export default TaskInputBar;

// Step 3: Identify The Minimal (but complete) Representation Of UI State
// Everything I need can be derived from the tasks array

// Step 4: Identify Where Your State Should Live
//

// Step 5: Add Inverse Data Flow

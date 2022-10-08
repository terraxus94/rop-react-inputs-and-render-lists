import React from 'react';
import ReactDOM from 'react-dom/client';
import TaskInputBar from './App';
import TaskInputBar2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskInputBar />
    <TaskInputBar2 />
  </React.StrictMode>
);

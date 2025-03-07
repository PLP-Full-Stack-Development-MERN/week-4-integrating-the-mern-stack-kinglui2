import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await axios.get('/api/tasks');
    setTasks(response.data);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm fetchTasks={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task._id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

import React, { useState } from 'react';
import axios from 'axios';

import './TaskForm.css';

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description, status, dueDate };
    await axios.post('/api/tasks', newTask);
    fetchTasks();
    setTitle('');
    setDescription('');
    setStatus('pending');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border border-gray-300 rounded bg-white">
      <input
        className="border border-gray-300 rounded p-2 mb-2 w-full"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="border border-gray-300 rounded p-2 mb-2 w-full"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)} className="border border-gray-300 rounded p-2 mb-2 w-full">
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <input
        className="border border-gray-300 rounded p-2 mb-2 w-full"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Add Task</button>
    </form>
  );
};

export default TaskForm;

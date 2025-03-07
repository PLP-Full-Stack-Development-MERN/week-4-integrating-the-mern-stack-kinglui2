import React, { useState } from 'react';
import axios from 'axios';
import './TaskEditModal.css';

const TaskEditModal = ({ task, fetchTasks, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [dueDate, setDueDate] = useState(task.dueDate.split('T')[0]); // Format date for input

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTask = { title, description, status, dueDate };
    await axios.put(`/api/tasks/${task._id}`, updatedTask);
    fetchTasks();
    onClose();
  };

  return (
    <div className="modal p-4 border border-gray-300 rounded bg-white">
      <form onSubmit={handleSubmit} className="task-edit-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border border-gray-300 rounded p-2 mb-2 w-full"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded p-2 mb-2 w-full"
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="border border-gray-300 rounded p-2 mb-2 w-full">
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border border-gray-300 rounded p-2 mb-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Update Task</button>
        <button type="button" className="bg-gray-500 text-white rounded px-4 py-2" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default TaskEditModal;

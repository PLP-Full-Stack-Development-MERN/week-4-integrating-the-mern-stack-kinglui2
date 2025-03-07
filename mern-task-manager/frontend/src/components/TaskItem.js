import React, { useState } from 'react';
import axios from 'axios';
import TaskEditModal from './TaskEditModal';
import './TaskItem.css';

const TaskItem = ({ task, fetchTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  // Removed duplicate declaration of isModalOpen
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    await axios.delete(`/api/tasks/${task._id}`);
    fetchTasks();
  };

  return (
    <li className="task-item border border-blue-500 rounded p-4 mb-2 bg-blue-100 transition-transform duration-200 hover:scale-105">
      <h2 className="text-xl">{task.title}</h2>
      <p className="mb-2">{task.description}</p>
      <p className="mb-2">Status: {task.status}</p>
      <p className="mb-2">Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <button className="mr-2 bg-red-500 text-white rounded px-2 py-1" onClick={handleDelete}>Delete</button>
      <button className="bg-blue-500 text-white rounded px-2 py-1" onClick={() => setIsModalOpen(true)}>Edit</button>
      {isModalOpen && (
        <TaskEditModal 
          task={task} 
          fetchTasks={fetchTasks} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
      {isEditing && (
        <TaskEditModal 
          task={task} 
          fetchTasks={fetchTasks} 
          onClose={() => setIsEditing(false)} 
        />
      )}
    </li>
  );
};

export default TaskItem;

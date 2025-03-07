import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TaskItem from './TaskItem';
import axios from 'axios';

jest.mock('axios');

describe('TaskItem Component', () => {
  const task = {
    _id: '1',
    title: 'Test Task',
    description: 'Test Description',
    status: 'pending',
    dueDate: new Date(),
  };

  const fetchTasks = jest.fn();

  test('calls delete function when delete button is clicked', async () => {
    render(<TaskItem task={task} fetchTasks={fetchTasks} />);
    
    axios.delete.mockResolvedValueOnce({});
    
    fireEvent.click(screen.getByText('Delete'));
    
    expect(axios.delete).toHaveBeenCalledWith(`/api/tasks/${task._id}`);
    expect(fetchTasks).toHaveBeenCalled();
  });

  test('opens edit modal when edit button is clicked', () => {
    render(<TaskItem task={task} fetchTasks={fetchTasks} />);
    
    fireEvent.click(screen.getByText('Edit'));
    
    expect(screen.getByText('Edit Task')).toBeInTheDocument(); // Assuming the modal has a title "Edit Task"
  });
});

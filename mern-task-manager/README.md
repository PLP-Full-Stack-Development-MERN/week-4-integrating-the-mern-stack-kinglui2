# Week 4: MERN Stack Integration Project

## Objective
Develop a full-stack web application using the MERN stack, focusing on backend and frontend integration, RESTful API development, and CRUD operations.

## Project Overview
This project is a "Task Manager" application where users can create, read, update, and delete tasks. Each task includes fields like title, description, status, and due date.

## Completed Work (Updated)

### Frontend
- **Task Item Component**: Updated `TaskItem.js` to include:
  - **Delete Functionality**: Users can delete tasks, which sends a DELETE request to the backend.
  - **Edit Functionality**: Integrated `TaskEditModal` to allow users to edit task details. The modal includes a form for updating the task's title, description, status, and due date.

### Task Edit Modal
- **TaskEditModal Component**: Created to handle the editing of tasks. It includes:
  - Input fields for task details.
  - A form submission that sends a PUT request to update the task in the backend.

### Backend
- **Express Server**: Set up and connected to MongoDB.
- **Task Model**: Defined the `Task` model with the following fields:
  - `title` (String, required)
  - `description` (String)
  - `status` (String, default: 'pending', enum: ['pending', 'in progress', 'completed'])
  - `dueDate` (Date)
- **API Routes**: Implemented RESTful API routes for:
  - Creating a new task
  - Retrieving all tasks
  - Updating a task by ID
  - Deleting a task by ID

### Frontend
- **Main Application Component**: Set up in `App.js` to manage tasks.
- **Task Form**: Created in `TaskForm.js` to allow users to add new tasks.
- **Task List**: Implemented in `TaskList.js` to fetch and display tasks.

## Project Overview
This project is a "Task Manager" application where users can create, read, update, and delete tasks. Each task includes fields like title, description, status, and due date.

## Installation Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd mern-task-manager
   ```
3. Install the backend dependencies:
   ```bash
   cd backend
   npm install
   ```
4. Install the frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

## API Endpoint Documentation
- **GET /api/tasks**: Retrieve a list of all tasks.
- **POST /api/tasks**: Create a new task.
- **GET /api/tasks/:id**: Retrieve a specific task by ID.
- **PUT /api/tasks/:id**: Update a specific task by ID.
- **DELETE /api/tasks/:id**: Delete a specific task by ID.

## Features and Usage Guide
- Users can create, update, and delete tasks.
- Tasks can be marked as completed or pending.
- The application provides a responsive design for both desktop and mobile users.


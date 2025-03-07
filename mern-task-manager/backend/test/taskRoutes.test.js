const request = require('supertest');
const app = require('../index'); // Assuming the Express app is exported from index.js
const Task = require('../models/Task');

describe('Task API', () => {
  beforeEach(async () => {
    await Task.deleteMany({}); // Clear the database before each test
  });

  it('should create a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({
        title: 'Test Task',
        description: 'This is a test task',
        status: 'pending',
        dueDate: new Date(),
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should retrieve all tasks', async () => {
    await Task.create({
      title: 'Test Task',
      description: 'This is a test task',
      status: 'pending',
      dueDate: new Date(),
    });
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should update a task by ID', async () => {
    const task = await Task.create({
      title: 'Test Task',
      description: 'This is a test task',
      status: 'pending',
      dueDate: new Date(),
    });
    const res = await request(app)
      .put(`/api/tasks/${task._id}`)
      .send({ status: 'completed' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('completed');
  });

  it('should delete a task by ID', async () => {
    const task = await Task.create({
      title: 'Test Task',
      description: 'This is a test task',
      status: 'pending',
      dueDate: new Date(),
    });
    const res = await request(app).delete(`/api/tasks/${task._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
  });
});

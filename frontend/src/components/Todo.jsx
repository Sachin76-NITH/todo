// Todo.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [token, setToken] = useState('');
  const navigate=useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    } else {
      // Handle the case where the token is not available
      // You might want to redirect the user to the login page or display an error message
      navigate('/');

    }
  }, []);

  useEffect(() => {
    if (token) {
      fetchTasks();
    }
  }, [token]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks', {
        headers: {
          Authorization: token,
        },
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleAddTask = async () => {
    try {
      await axios.post(
        'http://localhost:5000/api/tasks',
        { title, description, dueDate },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      fetchTasks();
      setTitle('');
      setDescription('');
      setDueDate('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleEditTask = async (id, newData) => {
    try {
      await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        newData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      fetchTasks();
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/tasks/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  

  return (
    <div className="todo-container">
       
      <h1 className='he'>TODO LIST</h1>
      <div className="task-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button  className='x'onClick={handleAddTask}>Add Task</button>
      </div>
      <table className="task-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td>
                <button
                  className={task.completed ? 'complete' : 'incomplete'}
                  onClick={() => handleEditTask(task._id, { completed: !task.completed })}
                >
                  {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button
                  className="delete"
                  onClick={() => handleDeleteTask(task._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;

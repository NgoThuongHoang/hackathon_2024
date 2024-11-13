import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Lỗi tải công việc', error);
      }
    };
    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    try {
      const response = await axios.post('/api/tasks', { task: newTask });
      setTasks([...tasks, response.data]);  // Cập nhật danh sách công việc
      setNewTask('');
    } catch (error) {
      console.error('Lỗi thêm công việc', error);
    }
  };

  return (
    <div>
      <h1>Quản lý công việc</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Nhập công việc mới"
      />
      <button onClick={handleAddTask}>Thêm công việc</button>
      <h2>Danh sách công việc:</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.name} - Trạng thái: {task.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManagement;

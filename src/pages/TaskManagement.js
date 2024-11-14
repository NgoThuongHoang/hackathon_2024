import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Lỗi tải danh sách công việc', error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Quản lý công việc</h1>
      <h2>Danh sách các công việc:</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            Tên công việc: {task.name} - Mô tả: {task.description} - Trạng thái: {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManagement;

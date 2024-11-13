import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    totalTasks: 0,
    totalFacilities: 0,
    totalDocuments: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/stats');
        setStats(response.data);
      } catch (error) {
        console.error('Lỗi tải thống kê', error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h1>Bảng điều khiển</h1>
      <div>
        <h2>Thống kê tổng quan:</h2>
        <p>Số nhân viên: {stats.totalEmployees}</p>
        <p>Số công việc: {stats.totalTasks}</p>
        <p>Số cơ sở vật chất: {stats.totalFacilities}</p>
        <p>Số tài liệu: {stats.totalDocuments}</p>
      </div>
    </div>
  );
};

export default Dashboard;

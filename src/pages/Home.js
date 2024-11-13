import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Chào mừng bạn đến với Hệ thống Quản lý Thanh niên</h1>
      <p>Hệ thống hỗ trợ quản lý nhân sự, tài chính, công việc, và các hoạt động trong tổ chức.</p>
      
      <h2>Chức năng chính:</h2>
      <ul>
        <li><Link to="/personnel-management">Quản lý nhân sự</Link></li>
        <li><Link to="/task-management">Quản lý công việc</Link></li>
        <li><Link to="/financial-management">Quản lý tài chính</Link></li>
        <li><Link to="/performance-evaluation">Đánh giá hiệu suất</Link></li>
        <li><Link to="/rewards-and-discipline">Khen thưởng và Kỷ luật</Link></li>
      </ul>
    </div>
  );
};

export default Home;

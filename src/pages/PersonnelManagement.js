import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonnelManagement = () => {
  const [personnel, setPersonnel] = useState([]);

  useEffect(() => {
    const fetchPersonnel = async () => {
      try {
        const response = await axios.get('/api/personnel');
        setPersonnel(response.data);
      } catch (error) {
        console.error('Lỗi tải nhân sự', error);
      }
    };
    fetchPersonnel();
  }, []);

  return (
    <div>
      <h1>Quản lý nhân sự</h1>
      <h2>Danh sách nhân viên:</h2>
      <ul>
        {personnel.map((person) => (
          <li key={person._id}>
            Tên: {person.name} - Chức vụ: {person.position} - Lương: {person.salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonnelManagement;

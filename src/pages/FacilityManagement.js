import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FacilityManagement = () => {
  const [facilities, setFacilities] = useState([]);
  const [newFacility, setNewFacility] = useState('');

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await axios.get('/api/facilities');
        setFacilities(response.data);
      } catch (error) {
        console.error('Lỗi tải cơ sở vật chất', error);
      }
    };
    fetchFacilities();
  }, []);

  const handleAddFacility = async () => {
    try {
      const response = await axios.post('/api/facilities', { name: newFacility });
      setFacilities([...facilities, response.data]);
      setNewFacility('');
    } catch (error) {
      console.error('Lỗi thêm cơ sở vật chất', error);
    }
  };

  return (
    <div>
      <h1>Quản lý cơ sở vật chất</h1>
      <input 
        type="text" 
        value={newFacility} 
        onChange={(e) => setNewFacility(e.target.value)} 
        placeholder="Nhập cơ sở vật chất mới"
      />
      <button onClick={handleAddFacility}>Thêm cơ sở vật chất</button>
      <h2>Danh sách cơ sở vật chất:</h2>
      <ul>
        {facilities.map((facility) => (
          <li key={facility._id}>{facility.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FacilityManagement;

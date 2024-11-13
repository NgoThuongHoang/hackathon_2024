import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RewardsAndDiscipline = () => {
  const [records, setRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({
    employeeId: '',
    action: '',
    date: '',
  });

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get('/api/rewards-discipline');
        setRecords(response.data);
      } catch (error) {
        console.error('Lỗi tải khen thưởng và kỷ luật', error);
      }
    };
    fetchRecords();
  }, []);

  const handleAddRecord = async () => {
    try {
      const response = await axios.post('/api/rewards-discipline', newRecord);
      setRecords([...records, response.data]);
      setNewRecord({ employeeId: '', action: '', date: '' });
    } catch (error) {
      console.error('Lỗi thêm khen thưởng/kỷ luật', error);
    }
  };

  return (
    <div>
      <h1>Khen thưởng và Kỷ luật</h1>
      <input 
        type="text" 
        value={newRecord.employeeId} 
        onChange={(e) => setNewRecord({ ...newRecord, employeeId: e.target.value })} 
        placeholder="Mã nhân viên"
      />
      <input 
        type="text" 
        value={newRecord.action} 
        onChange={(e) => setNewRecord({ ...newRecord, action: e.target.value })} 
        placeholder="Hành động"
      />
      <input 
        type="date" 
        value={newRecord.date} 
        onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })} 
        placeholder="Ngày"
      />
      <button onClick={handleAddRecord}>Thêm khen thưởng/kỷ luật</button>
      <h2>Danh sách khen thưởng và kỷ luật:</h2>
      <ul>
        {records.map((record) => (
          <li key={record._id}>
            Nhân viên ID: {record.employeeId} - Hành động: {record.action} - Ngày: {record.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RewardsAndDiscipline;

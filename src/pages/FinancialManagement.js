import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FinancialManagement = () => {
  const [finances, setFinances] = useState([]);
  const [newFinance, setNewFinance] = useState({
    amount: '',
    description: '',
    date: '',
  });

  useEffect(() => {
    const fetchFinances = async () => {
      try {
        const response = await axios.get('/api/finances');
        setFinances(response.data);
      } catch (error) {
        console.error('Lỗi tải tài chính', error);
      }
    };
    fetchFinances();
  }, []);

  const handleAddFinance = async () => {
    try {
      const response = await axios.post('/api/finances', newFinance);
      setFinances([...finances, response.data]);
      setNewFinance({ amount: '', description: '', date: '' });
    } catch (error) {
      console.error('Lỗi thêm tài chính', error);
    }
  };

  return (
    <div>
      <h1>Quản lý tài chính</h1>
      <input 
        type="text" 
        value={newFinance.amount} 
        onChange={(e) => setNewFinance({ ...newFinance, amount: e.target.value })} 
        placeholder="Số tiền"
      />
      <input 
        type="text" 
        value={newFinance.description} 
        onChange={(e) => setNewFinance({ ...newFinance, description: e.target.value })} 
        placeholder="Mô tả"
      />
      <input 
        type="date" 
        value={newFinance.date} 
        onChange={(e) => setNewFinance({ ...newFinance, date: e.target.value })} 
        placeholder="Ngày"
      />
      <button onClick={handleAddFinance}>Thêm giao dịch tài chính</button>
      <h2>Danh sách giao dịch tài chính:</h2>
      <ul>
        {finances.map((finance) => (
          <li key={finance._id}>
            {finance.amount} - {finance.description} - {finance.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinancialManagement;

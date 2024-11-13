import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PerformanceEvaluation = () => {
  const [evaluations, setEvaluations] = useState([]);
  const [newEvaluation, setNewEvaluation] = useState({
    employeeId: '',
    performance: '',
    date: '',
  });

  useEffect(() => {
    const fetchEvaluations = async () => {
      try {
        const response = await axios.get('/api/evaluations');
        setEvaluations(response.data);
      } catch (error) {
        console.error('Lỗi tải đánh giá hiệu suất', error);
      }
    };
    fetchEvaluations();
  }, []);

  const handleAddEvaluation = async () => {
    try {
      const response = await axios.post('/api/evaluations', newEvaluation);
      setEvaluations([...evaluations, response.data]);
      setNewEvaluation({ employeeId: '', performance: '', date: '' });
    } catch (error) {
      console.error('Lỗi thêm đánh giá', error);
    }
  };

  return (
    <div>
      <h1>Đánh giá hiệu suất</h1>
      <input 
        type="text" 
        value={newEvaluation.employeeId} 
        onChange={(e) => setNewEvaluation({ ...newEvaluation, employeeId: e.target.value })} 
        placeholder="Mã nhân viên"
      />
      <input 
        type="text" 
        value={newEvaluation.performance} 
        onChange={(e) => setNewEvaluation({ ...newEvaluation, performance: e.target.value })} 
        placeholder="Đánh giá"
      />
      <input 
        type="date" 
        value={newEvaluation.date} 
        onChange={(e) => setNewEvaluation({ ...newEvaluation, date: e.target.value })} 
        placeholder="Ngày"
      />
      <button onClick={handleAddEvaluation}>Thêm đánh giá hiệu suất</button>
      <h2>Danh sách đánh giá:</h2>
      <ul>
        {evaluations.map((evaluation) => (
          <li key={evaluation._id}>
            Nhân viên ID: {evaluation.employeeId} - Đánh giá: {evaluation.performance} - Ngày: {evaluation.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformanceEvaluation;

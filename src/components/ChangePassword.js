import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ChangePassword.css'; // Assuming you'll create or modify this CSS file

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert('Mật khẩu mới không khớp!');
      return;
    }

    try {
      const response = await axios.post('https://backend-hackathon-dongnai.vercel.app/api/auth/change-password', {
        currentPassword,
        newPassword,
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.data.success) {
        alert('Đổi mật khẩu thành công!');
      } else {
        alert('Đổi mật khẩu không thành công!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Có lỗi xảy ra trong quá trình đổi mật khẩu');
    }
  };

  return (
    <div className="change-password-container">
      <h2>Đổi Mật Khẩu</h2>
      <form onSubmit={handleChangePassword} className="change-password-form">
        <div className="form-group">
          <label>Mật khẩu hiện tại:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mật khẩu mới:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Nhập lại mật khẩu mới:</label>
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="change-password-button">Đổi mật khẩu</button>
      </form>
    </div>
  );
};

export default ChangePassword;
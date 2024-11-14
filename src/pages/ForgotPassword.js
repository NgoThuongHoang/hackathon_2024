import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Sử dụng cùng file CSS với trang đăng nhập

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    try {
      if (!email) {
        alert('Vui lòng nhập email');
        return;
      }

      const response = await axios.post('https://backend-hackathon-dongnai.vercel.app/api/auth/forgot-password', {
        email: email.trim()
      });

      if (response.data.success) {
        alert(response.data.message || 'Yêu cầu đặt lại mật khẩu đã được gửi');
        navigate('/login');
      } else {
        alert('Yêu cầu đặt lại mật khẩu không thành công');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        alert(error.response.data.message || 'Yêu cầu đặt lại mật khẩu thất bại');
      } else {
        alert('Có lỗi xảy ra trong quá trình yêu cầu đặt lại mật khẩu');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Quên mật khẩu</h2>
        <div className="form-group">
          <div className="input-icon">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="fa fa-envelope icon"></i>
          </div>
        </div>
        <div className="login-actions">
          <button className="login-btn" onClick={handleForgotPassword}>
            Gửi
          </button>
        </div>
        <div className="register-link">
           <a href="/login" style={{marginLeft: '10px', textDecoration: 'none'}}>Quay lại</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
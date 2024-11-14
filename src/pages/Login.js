import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Assuming you'll have this CSS file for background styles

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'admin@gmail.com' && password === '123456') {
      localStorage.setItem('user', JSON.stringify({ email }));
      setIsAuthenticated(true);
      navigate('/dashboard');
    } else {
      alert('Thông tin đăng nhập không chính xác');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Đăng nhập</h2>
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
        <div className="form-group">
          <div className="input-icon">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="fa fa-lock icon"></i>
          </div>
        </div>
        <div className="login-actions">
          <div className="remember-forgot">
            <label style={{color: 'black'}}>
              <input type="checkbox"/> Lưu đăng nhập
            </label>
            <a href="/forgot-password" style={{textDecoration: 'none', color: 'black'}}>Quên mật khẩu?</a>
          </div>
          <button className="login-btn" onClick={handleLogin}>
            Đăng nhập
          </button>
        </div>
        <div className="register-link">
          Chưa có tài khoản? <a href="/register" style={{marginLeft: '10px', textDecoration: 'none'}}>Đăng ký</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
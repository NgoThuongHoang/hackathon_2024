import React, { useState } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Sử dụng cùng file CSS với trang đăng nhập
=======
import '../styles/Register.css'; // Assuming you'll create or modify this CSS file
>>>>>>> c1a94d2 (quản lí công tác)

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      alert('Đăng ký thành công!');
      // Add registration logic here (API call or localStorage)
    } else {
      alert('Mật khẩu không khớp!');
    }
  };

  const handleBack = () => {
    navigate(-1); // Điều hướng trở lại trang trước đó
  };

  return (
<<<<<<< HEAD
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Đăng ký</h2>
=======
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Đăng Ký</h2>
>>>>>>> c1a94d2 (quản lí công tác)
        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <div className="input-icon">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="fa fa-envelope icon"></i>
            </div>
          </div>
          <div className="form-group">
            <div className="input-icon">
              <input
                type="password"
                className="form-control"
<<<<<<< HEAD
                placeholder="Password"
=======
                placeholder="Mật khẩu"
>>>>>>> c1a94d2 (quản lí công tác)
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="fa fa-lock icon"></i>
            </div>
          </div>
          <div className="form-group">
            <div className="input-icon">
              <input
                type="password"
                className="form-control"
<<<<<<< HEAD
                placeholder="Confirm Password"
=======
                placeholder="Nhập lại mật khẩu"
>>>>>>> c1a94d2 (quản lí công tác)
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <i className="fa fa-lock icon"></i>
            </div>
          </div>
<<<<<<< HEAD
          <button type="submit" className="login-btn" style={{marginBottom: '10px'}}>Đăng ký</button>
          <a href="/login" style={{textDecoration: 'none'}}>Quay lại</a>
          </form>
=======
          <button type="submit" className="btn register-btn">Đăng ký</button>
        </form>
>>>>>>> c1a94d2 (quản lí công tác)
      </div>
    </div>
  );
};

export default Register;
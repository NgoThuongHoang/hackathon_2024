import React, { useState } from 'react';
import '../styles/Register.css'; // Assuming you'll create or modify this CSS file

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      alert('Đăng ký thành công!');
      // Add registration logic here (API call or localStorage)
    } else {
      alert('Mật khẩu không khớp!');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Đăng Ký</h2>
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
                placeholder="Mật khẩu"
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
                placeholder="Nhập lại mật khẩu"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <i className="fa fa-lock icon"></i>
            </div>
          </div>
          <button type="submit" className="btn register-btn">Đăng ký</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

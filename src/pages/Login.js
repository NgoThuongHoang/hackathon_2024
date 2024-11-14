import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Assuming you'll have this CSS file for background styles

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        alert('Vui lòng nhập đầy đủ email và mật khẩu');
        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
    if (email === 'admin@gmail.com' && password === '123456') {
      localStorage.setItem('user', JSON.stringify({ email }));
      setIsAuthenticated(true);
      navigate('/dashboard');
    } else {
      alert('Thông tin đăng nhập không chính xác');
=======
      console.log('Đang gửi request đăng nhập...', { email });

=======
>>>>>>> c1a94d2 (quản lí công tác)
      const response = await axios.post('https://backend-hackathon-dongnai.vercel.app/api/auth/login', {
        email: email.trim(),
        password: password.trim()
      });

      if (response.data.success) {
        alert(response.data.message || 'Đăng nhập thành công');
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setIsAuthenticated(true);
        navigate('/home');
      } else {
        alert('Đăng nhập không thành công');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        alert(error.response.data.message || 'Đăng nhập thất bại');
      } else {
        alert('Có lỗi xảy ra trong quá trình đăng nhập');
      }
>>>>>>> a11ba99 (làm login)
    }
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Đăng nhập</h2>
=======
    <div className="login-container">
      <div className="login-card">
<<<<<<< HEAD
        <h2 className="login-title">Login</h2>
>>>>>>> c1a94d2 (quản lí công tác)
=======
        <h2 className="login-title">Đăng nhập</h2>
>>>>>>> 41de5bd (xong login - đăng ký - quên mật khẩu)
        <div className="form-group">
          <div className="input-icon">
            <input
              type="email"
              className="form-control"
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h2 className="text-center mb-4">Đăng Nhập</h2>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary btn-block" onClick={handleLogin}>
              Đăng nhập
            </button>
            <div className="mt-3 text-center">
              <a href="/forgot-password" className="text-decoration-none">Quên mật khẩu?</a>
            </div>
          </div>
        </div>
>>>>>>> a11ba99 (làm login)
=======
              placeholder="Username"
=======
              placeholder="Email"
>>>>>>> 41de5bd (xong login - đăng ký - quên mật khẩu)
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
>>>>>>> c1a94d2 (quản lí công tác)
      </div>
    </div>
  );
};

export default Login;
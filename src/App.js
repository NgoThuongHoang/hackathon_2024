import React, { useState, useEffect } from 'react'; 
import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'; // Thêm trang đăng ký
import UserProfilePage from './pages/UserProfilePage';
import PersonnelManagement from './pages/PersonnelManagement';
import PrivateRoute from './PrivateRoute';  // Ensure this import is correct
import ProposalDashboard from './pages/ProposalDashboard';
import TaskManagement from './pages/TaskManagement';
<<<<<<< HEAD
<<<<<<< HEAD
import ForgotPassword from './pages/ForgotPassword';
=======
>>>>>>> 472f6bc (làm header menu dropdown)
=======
import ForgotPassword from './pages/ForgotPassword';
>>>>>>> 41de5bd (xong login - đăng ký - quên mật khẩu)
import WorkScheduleManagement from './pages/WorkScheduleManagement';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';  // Đảm bảo rằng các styles từ App.css được áp dụng

import './App.css';  // Đảm bảo rằng các styles từ App.css được áp dụng

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation(); // Sử dụng useLocation để lấy đường dẫn hiện tại

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);  // Nếu có user trong localStorage, coi như đã đăng nhập
    }
  }, []);

  return (
    <div>
      {/* Chỉ hiển thị Header nếu không ở trang login hoặc register */}
<<<<<<< HEAD
<<<<<<< HEAD
      {location.pathname !== "/login" && location.pathname !== "/register" &&  location.pathname !== "/forgot-password" && <Header />}
=======
      {location.pathname !== "/login" && location.pathname !== "/register" && <Header />}
>>>>>>> a11ba99 (làm login)
=======
      {location.pathname !== "/login" && location.pathname !== "/register" &&  location.pathname !== "/forgot-password" && <Header />}
>>>>>>> 41de5bd (xong login - đăng ký - quên mật khẩu)
      <div>
        <Routes>
          {/* Redirect đến trang home nếu người dùng vào root "/" và đã đăng nhập */}
          <Route 
            path="/" 
            element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} 
          />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
          {/* Các route bảo vệ (chỉ cho người đã đăng nhập) */}
          <Route path="/home" element={(
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
<<<<<<< HEAD
<<<<<<< HEAD
          )} />
          <Route path="/personnel-management" element={(
=======
          } />
          <Route path="/personnel-management" element={
>>>>>>> 472f6bc (làm header menu dropdown)
=======
          )} />
          <Route path="/personnel-management" element={(
>>>>>>> a11ba99 (làm login)
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <PersonnelManagement />
            </PrivateRoute>
          )} />
          <Route path="/task-management" element={(
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <TaskManagement />
            </PrivateRoute>
<<<<<<< HEAD
<<<<<<< HEAD
          )} />
          <Route path="/proposal-dashboard" element={(
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ProposalDashboard />
            </PrivateRoute>
          )} />
          <Route path="/profile" element={(
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <UserProfilePage />
            </PrivateRoute>
          )} />
          <Route path="/work-schedule-management" element={(
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <WorkScheduleManagement />
            </PrivateRoute>
          )} />
=======
          } />
          <Route path="/proposal-dashboard" element={
=======
          )} />
          <Route path="/proposal-dashboard" element={(
>>>>>>> a11ba99 (làm login)
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ProposalDashboard />
            </PrivateRoute>
          )} />
          <Route path="/profile" element={(
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <UserProfilePage />
            </PrivateRoute>
          )} />
          <Route path="/work-schedule-management" element={(
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <WorkScheduleManagement />
            </PrivateRoute>
<<<<<<< HEAD
          } />
>>>>>>> 472f6bc (làm header menu dropdown)
=======
          )} />
>>>>>>> a11ba99 (làm login)
        </Routes>
      </div>
      {/* Chỉ hiển thị Footer nếu không ở trang login hoặc register */}
      {location.pathname !== "/login" && location.pathname !== "/register" && <Footer />}
    </div>
  );
};

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

import React, { useState, useEffect } from 'react'; 
import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'; // Thêm trang đăng ký
import Dashboard from './pages/Dashboard';
import PersonnelManagement from './pages/PersonnelManagement';
import TaskManagement from './pages/TaskManagement';
import FacilityManagement from './pages/FacilityManagement';
import FinancialManagement from './pages/FinancialManagement';
import PerformanceEvaluation from './pages/PerformanceEvaluation';
import RewardsAndDiscipline from './pages/RewardsAndDiscipline';
import DocumentStorage from './pages/DocumentStorage';
import PrivateRoute from './PrivateRoute';  // Ensure this import is correct
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      {location.pathname !== "/login" && location.pathname !== "/register" && <Header />}
      <div className="container">
        <Routes>
          {/* Redirect đến trang home nếu người dùng vào root "/" và đã đăng nhập */}
          <Route 
            path="/" 
            element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} 
          />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} /> {/* Route cho trang đăng ký */}

          {/* Các route bảo vệ (chỉ cho người đã đăng nhập) */}
          <Route path="/home" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
          } />
          <Route path="/dashboard" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/personnel-management" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <PersonnelManagement />
            </PrivateRoute>
          } />
          <Route path="/task-management" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <TaskManagement />
            </PrivateRoute>
          } />
          <Route path="/facility-management" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <FacilityManagement />
            </PrivateRoute>
          } />
          <Route path="/financial-management" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <FinancialManagement />
            </PrivateRoute>
          } />
          <Route path="/performance-evaluation" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <PerformanceEvaluation />
            </PrivateRoute>
          } />
          <Route path="/rewards-and-discipline" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <RewardsAndDiscipline />
            </PrivateRoute>
          } />
          <Route path="/document-storage" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <DocumentStorage />
            </PrivateRoute>
          } />
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
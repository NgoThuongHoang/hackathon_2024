import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Style toàn bộ ứng dụng của bạn
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

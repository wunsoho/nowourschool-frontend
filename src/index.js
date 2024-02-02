import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavigationBar from './components/MainPage/NavigationBar/NavigationBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

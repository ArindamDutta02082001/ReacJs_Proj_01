import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Parent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'

console.log('Main script is running');

try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  console.log('Root created successfully');
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log('Render called');
} catch (error) {
  console.error('Error rendering React app:', error);
} 
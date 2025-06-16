import React from 'react';
// Debug
console.log('NotFound component is loading');

const NotFound = () => {
  console.log('NotFound component is rendering');
  
  return (
    <div className="bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl">The page you're looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound; 
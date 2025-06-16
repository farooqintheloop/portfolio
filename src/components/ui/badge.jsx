import React from 'react';

const Badge = ({ className, variant = 'default', children, ...props }) => {
  const variants = {
    default: 'border-transparent bg-blue-600 text-white',
    secondary: 'border-transparent bg-gray-700 text-gray-300',
    outline: 'text-foreground border border-blue-600/30',
    destructive: 'border-transparent bg-red-500 text-white',
  };

  return (
    <div
      className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Badge; 
import React from 'react';

const Button = React.forwardRef(({ className, variant, size, children, ...props }, ref) => {
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-input bg-transparent hover:bg-blue-600/10 hover:text-blue-600',
    secondary: 'bg-gray-700 text-white hover:bg-gray-600',
    ghost: 'hover:bg-gray-800 hover:text-white',
    link: 'underline-offset-4 hover:underline text-blue-600',
  };

  const sizes = {
    default: 'h-10 px-4 py-2 rounded-md',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
  };

  return (
    <button
      className={`${variants[variant] || variants.default} ${sizes[size] || sizes.default} inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${className || ''}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button; 
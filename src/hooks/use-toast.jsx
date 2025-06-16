import { useState } from 'react';

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const toast = ({ title, description }) => {
    const id = Math.random().toString(36).substring(2, 9);
    
    setToasts((prev) => [...prev, { id, title, description }]);
    
    // Auto remove toast after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  return { toasts, toast };
};

export const Toaster = () => {
  const { toasts } = useToast();
  
  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 space-y-4">
      {toasts.map((toast) => (
        <div 
          key={toast.id}
          className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 text-white animate-fade-in"
        >
          {toast.title && <div className="font-medium">{toast.title}</div>}
          {toast.description && <div className="text-sm text-gray-300">{toast.description}</div>}
        </div>
      ))}
    </div>
  );
}; 
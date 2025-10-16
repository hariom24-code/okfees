import React, { useState, useCallback } from 'react';
import ToastContext from '../context/toastContext';

const ToastProviderInternal = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const add = useCallback((message, type = 'info', timeout = 4000) => {
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    setToasts((t) => [...t, { id, message, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), timeout);
  }, []);

  const remove = useCallback((id) => setToasts((t) => t.filter((x) => x.id !== id)), []);

  return (
    <ToastContext.Provider value={{ add, remove }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((t) => (
          <div key={t.id} className={`px-4 py-2 rounded shadow-lg text-white ${t.type === 'error' ? 'bg-red-600' : t.type === 'success' ? 'bg-green-600' : 'bg-gray-800'}`}>
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProviderInternal;


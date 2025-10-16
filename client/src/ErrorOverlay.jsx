import React, { useEffect, useState } from 'react';

export default function ErrorOverlay() {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const onError = (message, source, lineno, colno, error) => {
      setErrors((e) => [...e, { message: message?.toString() || String(error), stack: error?.stack }]);
      return false;
    };

    const onRejection = (ev) => {
      const reason = ev?.reason || ev;
      setErrors((e) => [...e, { message: reason?.message || String(reason), stack: reason?.stack }]);
    };

    window.addEventListener('error', (e) => onError(e.message, e.filename, e.lineno, e.colno, e.error));
    window.addEventListener('unhandledrejection', onRejection);

    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onRejection);
    };
  }, []);

  if (!errors.length) return null;

  return (
    <div style={{ position: 'fixed', left: 12, right: 12, bottom: 12, zIndex: 9999 }}>
      {errors.map((err, i) => (
        <div key={i} style={{ background: '#411111', color: 'white', padding: 12, borderRadius: 8, marginBottom: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>Runtime Error</div>
          <div style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: 13 }}>
            {err.message}
            {err.stack ? '\n\n' + err.stack : null}
          </div>
        </div>
      ))}
    </div>
  );
}

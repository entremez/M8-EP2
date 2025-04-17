import React, { useState, useEffect } from 'react';

const TestComponent = () => {
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/test')
      .then(res => {
        if (!res.ok) throw new Error('Error al conectar');
        return res.text();
      })
      .then(data => setMensaje(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-2">Test desde el backend</h2>
      {mensaje && <p className="text-green-700">{mensaje}</p>}
      {error && <p className="text-red-700">{error}</p>}
    </div>
  );
};

export default TestComponent;

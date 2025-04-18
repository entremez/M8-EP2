import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TestComponent from '../TestComponent';

// Mocks fetch global
beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

test('muestra mensaje del backend si la respuesta es correcta', async () => {
  global.fetch.mockResolvedValueOnce({
    ok: true,
    text: async () => 'Bienvenido al sistema médico'
  });

  render(<TestComponent />);
  
  const mensaje = await waitFor(() => screen.getByText('Bienvenido al sistema médico'));
  expect(mensaje).toBeInTheDocument();
});

test('muestra error si la respuesta falla', async () => {
  global.fetch.mockResolvedValueOnce({
    ok: false
  });

  render(<TestComponent />);
  
  const error = await waitFor(() => screen.getByText('Error al conectar'));
  expect(error).toBeInTheDocument();
});

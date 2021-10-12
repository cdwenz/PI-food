import { render, screen } from '@testing-library/react';
import LandingPage  from '../components/Landing/landing'
import { MemoryRouter } from 'react-router-dom'

test('Rederiza texto de bienvenida', () => {
  render(<LandingPage />, { wrapper: MemoryRouter })

  expect(screen.getByText('Welcome to eCook')).toBeInTheDocument()
})
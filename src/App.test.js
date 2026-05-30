import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders login screen before a session cookie exists', () => {
  const { getByText } = render(<App />);
  expect(getByText('SL Number')).toBeInTheDocument();
  expect(getByText('Password')).toBeInTheDocument();
});

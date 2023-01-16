import { render } from '@testing-library/react';
import React from 'react';
import MainLayout from '../Components/MainLayout';

test('renders the landing page', () => {
  render(<MainLayout />);
});

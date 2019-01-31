import React from 'react';
import Layout from '../Layout';
import { render } from 'react-testing-library';

describe('Layout Component', () => {
  it('renders', () => {
    render(<Layout />);
  });
});

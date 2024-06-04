import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Footer from '../Footer/Footer';

describe('Footer component', () => {
  it('should render the footer correctly', () => {
    render(<Footer />);

    expect(screen.getByLabelText('x')).toBeInTheDocument();
    expect(screen.getByLabelText('email')).toBeInTheDocument();

    expect(
      screen.getByText(/© 2024 MindBook. All rights reserved./i)
    ).toBeInTheDocument();
  });
});

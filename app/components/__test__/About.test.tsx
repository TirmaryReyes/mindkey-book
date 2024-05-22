import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import About from '../About/About';

describe('Given an About component', () => {
  describe('When it is rendered', () => {
    test('Then it should display the author information and photo', () => {
      render(<About />);

      const heading = screen.getByRole('heading', {
        name: /About the Author/i,
      });
      const authorPhoto = screen.getByAltText('author photo');
      const description = screen.getByText(/My name is Jean-Baptiste/i);
      const quote = screen.getByText(
        /Empower your journey with knowledge and passion/i,
      );

      expect(heading).toBeTruthy();
      expect(authorPhoto).toBeTruthy();
      expect(description).toBeTruthy();
      expect(quote).toBeTruthy();
    });
  });
});

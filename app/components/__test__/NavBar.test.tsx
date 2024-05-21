import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import NavBar from '../navbar/NavBar';

describe('Given a NavBar component', () => {
  describe('When it is rendered', () => {
    test('Then it should show renders the navigation links', () => {
      render(<NavBar />);

      const homeLink = screen.getByRole('link', { name: 'Home' });
      const productLink = screen.getByRole('link', { name: 'Product' });
      const aboutLink = screen.getByRole('link', { name: 'About' });
      const priceLink = screen.getByRole('link', { name: 'Price' });
      const testimonyLink = screen.getByRole('link', { name: 'Testimony' });
      const contactLink = screen.getByRole('link', { name: 'Contact' });

      expect(homeLink).toBeTruthy();
      expect(productLink).toBeTruthy();
      expect(aboutLink).toBeTruthy();
      expect(priceLink).toBeTruthy();
      expect(testimonyLink).toBeTruthy();
      expect(contactLink).toBeTruthy();
    });
  });
});

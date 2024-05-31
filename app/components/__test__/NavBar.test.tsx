import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import NavBar from '../NavBar/NavBar';

describe('Given a NavBar component', () => {
  describe('When it is rendered', () => {
    test('Then it should show renders the navigation links', () => {
      render(<NavBar />);

      const homeLink = screen.getByRole('link', { name: 'Home' });
      const aboutLink = screen.getByRole('link', { name: 'About' });
      const productLink = screen.getByRole('link', { name: 'Product' });
      const testimonyLink = screen.getByRole('link', { name: 'Testimonials' });
      const contactLink = screen.getByRole('link', { name: 'Contact' });

      expect(homeLink).toBeTruthy();
      expect(productLink).toBeTruthy();
      expect(aboutLink).toBeTruthy();
      expect(testimonyLink).toBeTruthy();
      expect(contactLink).toBeTruthy();
    });
  });
});

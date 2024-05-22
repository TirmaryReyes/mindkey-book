import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import About from '../About/About';

describe('Given an About component', () => {
  describe('When it is rendered', () => {
    test('Then it should display the author information and photo', () => {
      render(<About />);

      const heading = screen.getByRole('heading', {
        name: /Get to Know the Author/i,
      });
      const authorPhoto = screen.getByAltText('author photo');
      const authorInfo = screen.getByText(
        /Hello! My name is Jean-Baptiste, and I have created this Ebook to help you achieve your ideal weight year-round. Inside, you'll find valuable data, graphics, and tools to support you in reaching your goals. I hope this resource proves invaluable on your journey toward a better version of yourself! Download your free copy today and start your transformation!/i,
      );
      const authorQuote = screen.getByText(
        /Empower your journey with knowledge and passion./i,
      );
      const downloadButton = screen.getByRole('button', { name: /Download!/i });

      expect(heading).toBeTruthy();
      expect(authorPhoto).toBeTruthy();
      expect(authorInfo).toBeTruthy();
      expect(authorQuote).toBeTruthy();
      expect(downloadButton).toBeTruthy();
    });
  });
});

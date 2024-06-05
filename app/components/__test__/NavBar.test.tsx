import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, beforeAll, vi } from 'vitest';
import NavBar from '../NavBar/NavBar';

beforeAll(() => {
  // Mock scrollIntoView
  HTMLElement.prototype.scrollIntoView = vi.fn();
});

describe('Given a NavBar component', () => {
  describe('When a navigation link is clicked', () => {
    test('Then it should scroll to the section and update activeSection', async () => {
      render(
        <>
          <NavBar />
          {/* Mock the sections in the DOM */}
          <div id="home-section" style={{ height: '1000px' }} />
          <div id="product-section" style={{ height: '1000px' }} />
          <div id="about-section" style={{ height: '1000px' }} />
          <div id="testimony-section" style={{ height: '1000px' }} />
          <div id="FAQ-section" style={{ height: '1000px' }} />
        </>
      );

      // Wait for the links to be rendered
      await waitFor(() => {
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
      });

      const sections = ['Home', 'Product', 'About', 'Testimonials', 'FAQ'];

      for (const section of sections) {
        const link = screen.getByText(new RegExp(`^${section}$`, 'i'));
        fireEvent.click(link);

        // Check if scrollIntoView was called for each section
        await waitFor(() => {
          expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalled();
        });

        // Check if the active section is updated
        expect(link.closest('li')).toHaveClass('underline');
      }
    });
  });

  describe('When rendering the NavBar component', () => {
    test('Then it should render all navigation links', () => {
      render(<NavBar />);
      const links = ['Home', 'Product', 'About', 'Testimonials', 'FAQ'];
      links.forEach((link) => {
        expect(
          screen.getByText(new RegExp(`^${link}$`, 'i'))
        ).toBeInTheDocument();
      });
    });
  });

  describe('When the window is resized', () => {
    test('Then it should toggle the mobile menu visibility', async () => {
      render(<NavBar />);

      // Simulate window resize
      global.innerWidth = 500;
      global.dispatchEvent(new Event('resize'));

      const menuButton = screen.getByTestId('menu-button');
      fireEvent.click(menuButton);

      const mobileMenu = screen.getByTestId('mobile-menu');
      await waitFor(() => {
        expect(mobileMenu.className).toContain('block');
      });

      fireEvent.click(menuButton);
      await waitFor(() => {
        expect(mobileMenu.className).toContain('hidden');
      });
    });
  });
});

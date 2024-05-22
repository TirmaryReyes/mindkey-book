import { render, screen, within } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Testimonials from '../Testimonials/Testimonials';

describe('Given a Testimonials component', () => {
  describe('When it is rendered', () => {
    test('Then it should display the testimonials with 5-star ratings and user details', () => {
      render(<Testimonials />);

      const testimonials = [
        'I shared this eBook with my mom, and after reviewing it together, we have so much fun at our Zumba sessions.',
        'My husband and I are committed to never repeating the same mistakes again. We have crafted our diet plan using the book and continuously refer back to it for guidance.',
        "I was lost and didn't know what to do, but Jean-Baptiste and his book opened my eyes. I finally figured out how to lose weight for good.",
      ];

      testimonials.forEach((testimonial) => {
        const testimonialTexts = screen.queryAllByText(testimonial);
        expect(testimonialTexts.length).toBeGreaterThan(0);
      });

      const names = ['Vanessa', 'Emily', 'Rachel'];
      names.forEach((name) => {
        const userNames = screen.queryAllByText(name);
        expect(userNames.length).toBeGreaterThan(0);
      });

      const testimonialsElements = screen.getAllByTestId('testimonial');
      testimonialsElements.forEach((testimonialElement) => {
        const stars = within(testimonialElement).getAllByTestId('star');
        expect(stars.length).toBe(5);
      });
    });
  });
});

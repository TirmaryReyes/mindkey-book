import { render, screen, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import CountdownTimer from '../ProductShowcase/CountdownTimer';

describe('Given a CountdownTimer component', () => {
  describe('When it is rendered with a target date one hour in the future', () => {
    test('Then it should display the correct countdown time', async () => {
      const targetDate = new Date();
      targetDate.setHours(targetDate.getHours() + 1);

      render(<CountdownTimer targetDate={targetDate} />);

      await waitFor(() => {
        const spans = screen.getAllByText(/^\d{2}$/);

        // Expecting exactly 3 span elements with two-digit numbers
        expect(spans).toHaveLength(3);

        // Extract the content of the span elements
        const [hours, minutes, seconds] = spans.map(
          (span: HTMLElement) => span.textContent ?? '',
        );

        // Ensure that hours, minutes, and seconds are correctly formatted
        expect(hours).toMatch(/^\d{2}$/);
        expect(minutes).toMatch(/^\d{2}$/);
        expect(seconds).toMatch(/^\d{2}$/);
      });
    });
  });
});

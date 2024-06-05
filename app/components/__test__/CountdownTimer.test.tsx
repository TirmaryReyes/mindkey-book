import { render, screen, waitFor, act } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import CountdownTimer from '../ProductShowcase/CountdownTimer';

describe('Given a CountdownTimer component', () => {
  describe('When it is rendered with a target date one hour in the future', () => {
    test('Then it should display the correct countdown time', async () => {
      const targetDate = new Date();
      targetDate.setHours(targetDate.getHours() + 1);

      render(<CountdownTimer targetDate={targetDate} />);

      await waitFor(() => {
        const spans = screen.getAllByText(/^\d{2}$/);

        expect(spans).toHaveLength(3);

        const [hours, minutes, seconds] = spans.map(
          (span: HTMLElement) => span.textContent ?? ''
        );

        expect(hours).toMatch(/^\d{2}$/);
        expect(minutes).toMatch(/^\d{2}$/);
        expect(seconds).toMatch(/^\d{2}$/);
      });
    });
  });

  describe('When it is rendered with a target date in the past', () => {
    test('Then it should display 00:00:00', async () => {
      const targetDate = new Date();
      targetDate.setHours(targetDate.getHours() - 1);

      render(<CountdownTimer targetDate={targetDate} />);

      await waitFor(() => {
        const spans = screen.getAllByText(/^00$/);

        expect(spans).toHaveLength(3);
      });
    });
  });

  describe('When the component is unmounted', () => {
    test('Then it should clear the timeout', () => {
      const targetDate = new Date();
      targetDate.setHours(targetDate.getHours() + 1);

      const clearTimeoutSpy = vi.spyOn(global, 'clearTimeout');

      const { unmount } = render(<CountdownTimer targetDate={targetDate} />);

      act(() => {
        unmount();
      });

      expect(clearTimeoutSpy).toHaveBeenCalled();
    });
  });

  describe('When it is rendered with a target date exactly at the current time', () => {
    test('Then it should display 00:00:00', async () => {
      const targetDate = new Date();

      render(<CountdownTimer targetDate={targetDate} />);

      await waitFor(() => {
        const spans = screen.getAllByText(/^00$/);

        expect(spans).toHaveLength(3);
      });
    });
  });
});

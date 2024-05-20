import { render, screen, waitFor } from '@testing-library/react';
import CountdownTimer from '../ProductShowcase/CountdownTimer';
import { describe, expect, test } from 'vitest';

test("Then it should display the correct countdown time", async () => {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 1);

  render(<CountdownTimer targetDate={targetDate} />);

  // Wait for a moment to ensure the component has time to update
  await waitFor(() => {
    const hoursText = screen.queryByText((content, element) => {
      return /[0-2][0-9] hours/.test(content);
    });
    const minutesText = screen.queryByText((content, element) => {
      return /[0-5][0-9] minutes/.test(content);
    });
    const secondsText = screen.queryByText((content, element) => {
      return /[0-5][0-9] seconds/.test(content);
    });

    expect(hoursText).toBeTruthy();
    expect(minutesText).toBeTruthy();
    expect(secondsText).toBeTruthy();
  });
});

import { render, screen, waitFor } from '@testing-library/react';
import CountdownTimer from '../ProductShowcase/CountdownTimer';
import { expect, test } from 'vitest';

test('Then it should display the correct countdown time', async () => {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 1);

  render(<CountdownTimer targetDate={targetDate} />);

  await waitFor(() => {
    const hoursText = screen.queryByText((content) => {
      return /[0-2][0-9] hours/.test(content);
    });
    const minutesText = screen.queryByText((content) => {
      return /[0-5][0-9] minutes/.test(content);
    });
    const secondsText = screen.queryByText((content) => {
      return /[0-5][0-9] seconds/.test(content);
    });

    expect(hoursText).toBeTruthy();
    expect(minutesText).toBeTruthy();
    expect(secondsText).toBeTruthy();
  });
});

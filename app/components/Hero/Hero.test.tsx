import { render, screen } from '@testing-library/react';
import Hero from './Hero'; // Make sure the import path is correct
import { describe, test, expect } from 'vitest';

describe("Given a Hero component", () => {
  describe("When it is rendered", () => {
    test("Then it should display the main heading and subtext correctly", () => {
      render(<Hero />);

      const mainHeading = screen.getByText(/Imagine enjoying this paradise without/);
      const subHeading = screen.getByText(/worrying about those extra pounds?/);
      const descriptionText = screen.getByText(/My eBook can help you achieve just that effortlessly/);

     
      expect(mainHeading).toBeTruthy();
      expect(subHeading).toBeTruthy();
      expect(descriptionText).toBeTruthy();
    });
  });
});

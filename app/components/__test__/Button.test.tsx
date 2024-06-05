import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Button from '../commons/Button';

describe('Given·a·Button·component', () => {
  describe("When it is rendered with the text 'click'", () => {
    test("Then the button should show the text 'click'", () => {
      const expectedText = 'click';

      render(<Button>{expectedText}</Button>);

      const button = screen.getByRole('button', { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });

  describe('When it is clicked', () => {
    test('Then the actionOnClick function should be called', () => {
      const actionOnClick = vi.fn();
      const buttonText = 'click';

      render(<Button actionOnClick={actionOnClick}>{buttonText}</Button>);

      const button = screen.getByRole('button', { name: buttonText });
      fireEvent.click(button);

      expect(actionOnClick).toHaveBeenCalledTimes(1);
    });
  });
});

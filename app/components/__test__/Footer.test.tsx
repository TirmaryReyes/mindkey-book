import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import Footer from '../Footer/Footer';

describe('Footer component', () => {
  it('should render the footer correctly', () => {
    render(<Footer />);

    expect(screen.getByText(/Don't wait any longer!/i)).toBeInTheDocument();

    const image = screen.getByAltText('ebook cover');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/ebook-version.svg');

    const button = screen.getByText(/Buy Now/i);
    expect(button).toBeInTheDocument();

    expect(screen.getByLabelText('x')).toBeInTheDocument();
    expect(screen.getByLabelText('email')).toBeInTheDocument();

    expect(
      screen.getByText(/© 2024 MindBook. All rights reserved./i)
    ).toBeInTheDocument();
  });

  it('should navigate to the correct URL when "Buy Now" button is clicked', () => {
    const handleBuyNowClick = vi.fn();
    render(<Footer onBuyNowClick={handleBuyNowClick} />);

    const button = screen.getByText(/Buy Now/i);
    fireEvent.click(button);

    expect(handleBuyNowClick).toHaveBeenCalled();
  });
});

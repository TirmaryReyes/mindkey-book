import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import Footer from '../Footer/Footer';

describe('Footer component', () => {
  it('should render the footer correctly', () => {
    render(<Footer />);

    // Check for the heading
    expect(screen.getByText(/Don't wait any longer!/i)).toBeInTheDocument();

    // Check for the image
    const image = screen.getByAltText('ebook cover');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/ebook-version.svg');

    // Check for the buy now button
    const button = screen.getByText(/Buy Now/i);
    expect(button).toBeInTheDocument();

    // Check for the social media icons
    expect(screen.getByLabelText('facebook')).toBeInTheDocument();
    expect(screen.getByLabelText('twitter')).toBeInTheDocument();
    expect(screen.getByLabelText('instagram')).toBeInTheDocument();
    expect(screen.getByLabelText('email')).toBeInTheDocument();

    // Check for the copyright text
    expect(
      screen.getByText(/© 2024 MindBook. All rights reserved./i),
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

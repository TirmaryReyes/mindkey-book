import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FAQSection from '../FAQSection/FAQSection';

describe('FAQSection component', () => {
  it('should render the FAQ section correctly', () => {
    render(<FAQSection />);

    const faqHeadingMobile = screen.getByRole('heading', { name: 'FAQ' });
    const faqHeadingDesktop = screen.getByRole('heading', {
      name: 'Frequently Asked Questions',
    });
    const questions = [
      'What topics does the nutrition ebook cover?',
      'Is the ebook suitable for beginners?',
      'Can I access the ebook on multiple devices?',
      'What if I have questions or need support after purchasing?',
      'Is there a money-back guarantee?',
    ];

    questions.forEach((question) => {
      expect(screen.getByText(question)).toBeInTheDocument();
    });

    expect(faqHeadingMobile).toBeInTheDocument();
    expect(faqHeadingDesktop).toBeInTheDocument();
  });

  it('should toggle FAQ answers on click', () => {
    render(<FAQSection />);

    const question = screen.getByText(
      'What topics does the nutrition ebook cover?'
    );
    fireEvent.click(question);

    expect(
      screen.getByText(
        'Balanced diets, essential nutrients, meal prep tips, healthy recipes, and weight management.'
      )
    ).toBeInTheDocument();

    fireEvent.click(question);
    expect(
      screen.queryByText(
        'Balanced diets, essential nutrients, meal prep tips, healthy recipes, and weight management.'
      )
    ).not.toBeInTheDocument();
  });

  it('should toggle FAQ answers on keydown', () => {
    render(<FAQSection />);

    const question = screen.getByText(
      'What topics does the nutrition ebook cover?'
    );
    fireEvent.keyDown(question, { key: 'Enter', code: 'Enter' });

    expect(
      screen.getByText(
        'Balanced diets, essential nutrients, meal prep tips, healthy recipes, and weight management.'
      )
    ).toBeInTheDocument();

    fireEvent.keyDown(question, { key: 'Enter', code: 'Enter' });
    expect(
      screen.queryByText(
        'Balanced diets, essential nutrients, meal prep tips, healthy recipes, and weight management.'
      )
    ).not.toBeInTheDocument();
  });

  it('should not toggle FAQ answers on irrelevant keydown', () => {
    render(<FAQSection />);

    const question = screen.getByText(
      'What topics does the nutrition ebook cover?'
    );
    fireEvent.keyDown(question, { key: 'Tab', code: 'Tab' });

    expect(
      screen.queryByText(
        'Balanced diets, essential nutrients, meal prep tips, healthy recipes, and weight management.'
      )
    ).not.toBeInTheDocument();
  });

  it('should open the buy now link on button click', () => {
    render(<FAQSection />);

    const buyNowButton = screen.getByText('Buy Now');
    global.open = vi.fn();

    fireEvent.click(buyNowButton);
    expect(global.open).toHaveBeenCalledWith(
      'https://whop.com/checkout/4JuynWz2Y1T772UQed-SG79-35MO-O9wh-1m6cD0wispgn/',
      '_blank'
    );
  });
});

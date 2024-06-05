import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Polyfill for matchMedia
global.matchMedia =
  global.matchMedia ||
  function (query) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addEventListener: function () {},
      removeEventListener: function () {},
      dispatchEvent: function () {},
    };
  };

// Mock for scrollTo
global.scrollTo = vi.fn((arg1?: number | ScrollToOptions, arg2?: number) => {
  if (typeof arg1 === 'number' && typeof arg2 === 'number') {
    // x, y signature
    return;
  }
  if (typeof arg1 === 'object' && arg1 !== null) {
    // options signature
    return;
  }
  throw new Error('scrollTo called with unexpected arguments');
});

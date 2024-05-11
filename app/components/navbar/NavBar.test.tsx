import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { describe, test, expect } from 'vitest';

describe("Given a NavBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show renders the navigation links", () => {
      render(
          <NavBar />
      );

      const homeLink = screen.getByRole("link", { name: "Home" });
      const productLink = screen.getByRole("link", { name: "Product" });
      const aboutLink = screen.getByRole("link", { name: "About" });
      const priceLink = screen.getByRole("link", { name: "Price" });
      const testimonyLink = screen.getByRole("link", { name: "Testimony" });
      const contactLink = screen.getByRole("link", { name: "Contact" });

      const links = ['/home', '/product', '/about', '/price', '/testimony', '/contact'];

      // Verificar si los elementos son visibles en el documento
      expect(homeLink).toBeTruthy();
      expect(productLink).toBeTruthy();
      expect(aboutLink).toBeTruthy();
      expect(priceLink).toBeTruthy();
      expect(testimonyLink).toBeTruthy();
      expect(contactLink).toBeTruthy();
    });
  });
});

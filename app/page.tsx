'use client';

import { useEffect, useState } from 'react';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import Testimonials from './components/Testimonials/Testimonials';

const productDescription = {
  title: 'MindKeyBook: A Guide for Women',
  imageUrl: '/images/ebook.jpg',
  description: 'An ebook for effective weight loss',
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <section id="home-section">
        <Hero />
      </section>
      <section id="product-section">
        <ProductShowcase product={productDescription} />
      </section>
      <section id="about-section">
        <About />
      </section>
      <section id="testimony-section">
        <Testimonials />
      </section>
      <section id="footer-section">
        <Footer />
      </section>
    </>
  );
}

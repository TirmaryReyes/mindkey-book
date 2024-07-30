'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import { productDescription } from './constants';
import Hero from './components/Hero/Hero';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import FAQSection from './components/FAQSection/FAQSection';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap';
    link.rel = 'stylesheet';
    link.media = 'print';
    link.onload = () => {
      link.media = 'all';
    };
    document.head.appendChild(link);
  }, []);

  if (!mounted) {
    return null;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'MindKeyBook: A Guide for Women',
    image: 'https://www.mindkeybook.com/images/ebook.jpg',
    description: 'An ebook for effective weight loss',
    brand: {
      '@type': 'Brand',
      name: 'MindKeyBook',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.mindkeybook.com/',
      priceCurrency: 'USD',
      price: '14.99',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'MindKeyBook',
      },
    },
  };

  return (
    <>
      <Head>
        <title>MindKeyBook: A Guide for Women</title>
        <meta name="description" content="An ebook for effective weight loss" />
        <meta
          name="keywords"
          content="ebook, weight loss, guide for women, MindKeyBook"
        />
        <meta property="og:title" content="MindKeyBook: A Guide for Women" />
        <meta
          property="og:description"
          content="An ebook for effective weight loss"
        />
        <meta
          property="og:image"
          content="https://www.mindkeybook.com/images/ebook.jpg"
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
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
      <section id="FAQ-section">
        <FAQSection />
      </section>
      <section id="footer-section">
        <Footer />
      </section>
    </>
  );
}

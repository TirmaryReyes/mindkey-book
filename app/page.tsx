import About from './components/About/About';
import Hero from './components/Hero/Hero';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import Testimonials from './components/Testimonials/Testimonials';
import Layout from './layout';

const productDescription = {
  title: 'MindBook: A Guide for Women',
  imageUrl: 'path/to/image.jpg',
  description: 'An ebook for effective weight loss',
};

export default function Home() {
  return (
    <Layout>
      <section id="home-section">
        <Hero />
      </section>
      <section id="about-section">
        <About />
      </section>
      <section id="product-section">
        <ProductShowcase product={productDescription} />
      </section>
      <section id="testimony-section">
        <Testimonials />
      </section>
    </Layout>
  );
}

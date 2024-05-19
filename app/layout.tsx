import type { Metadata } from "next";
import './globals.css'
import NavBar from './components/navbar/NavBar';
import Hero from './components/Hero/Hero';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';

export const metadata: Metadata = {
  title: "MindBook",
  description: "Ebook, A Guide for Women for Effective Weight Loss",
};

const productDescription = {
  title: 'MindBook: A Guide for Women',
  imageUrl: 'path/to/image.jpg',
  description: 'An ebook for effective weight loss',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>
          {children}
          <Hero/>
          <ProductShowcase product={productDescription} />
          {/* Agrega más secciones según sea necesario */}
        </main>
      </body>
    </html>
  );
}

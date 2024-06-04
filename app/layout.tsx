import './globals.css';
import NavBar from './components/NavBar/NavBar';
import { metadata } from './constants';
import PinterestTag from './components/PinterestTag';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const title = metadata.title || 'Default Title';
  const description = metadata.description || 'Default Description';

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="p:domain_verify"
          content="e705a9273f0aa6a13b64973b47d3aebb"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <PinterestTag />
        {children}
        <NavBar />
      </body>
    </html>
  );
}

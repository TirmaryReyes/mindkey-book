import './globals.css';
import NavBar from './components/NavBar/NavBar';
import { metadata } from './constants';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const title = metadata.title || 'Default Title';
  const description = metadata.description || 'Default Description';

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        <NavBar />
      </body>
    </html>
  );
}

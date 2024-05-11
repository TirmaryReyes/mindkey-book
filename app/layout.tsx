import type { Metadata } from "next";
import "./globals.css";
import NavBar from './components/navbar/NavBar';


export const metadata: Metadata = {
  title: "MindBook",
  description: "Ebook, A Guide for Women for Effective Weight Loss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <NavBar/>
        {children}
      </body>
    </html>
  );
}

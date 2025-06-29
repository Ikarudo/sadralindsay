import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sadra M. Lindsay | Singer & Author",
  description: "Official website of Sadra M. Lindsay - Singer, Author, and Creative Artist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/SML Favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} bg-earth-100 text-earth-700`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

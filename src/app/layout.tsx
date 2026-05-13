import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { CartProvider } from '@/context/CartContext';
import { UserProvider } from '@/context/UserContext';
import EmailJSInitializer from '@/components/EmailJSInitializer';
import { Toaster } from 'react-hot-toast';

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

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
      <body className={`${nunito.className} bg-earth-100 text-earth-700`} suppressHydrationWarning={true}>
        <UserProvider>
          <CartProvider>
            <EmailJSInitializer />
        {children}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
                success: {
                  duration: 4000,
                  iconTheme: {
                    primary: '#4ade80',
                    secondary: '#fff',
                  },
                },
                error: {
                  duration: 4000,
                  iconTheme: {
                    primary: '#ef4444',
                    secondary: '#fff',
                  },
                },
              }}
            />
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}

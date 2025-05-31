import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className} bg-stone-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}

"use client";
import "./globals.css";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <header className="absolute w-full top-0 left-0 right-0 py-6 z-50">
          <Navigation />
        </header>

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}

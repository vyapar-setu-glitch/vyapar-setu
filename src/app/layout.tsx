import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Footer import kiya

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vyapar Setu | Financial & Utility Services",
  description: "One stop solution for Loans, GST, ITR, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer /> {/* Footer yahan add kiya */}
      </body>
    </html>
  );
}
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-3xl font-extrabold text-blue-700 tracking-tight">
              Vyapar<span className="text-yellow-500">Setu</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-semibold transition">Home</Link>
            <Link href="/#services-section" className="text-gray-700 hover:text-blue-600 font-semibold transition">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-semibold transition">About Us</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-semibold transition">Contact</Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/track-status" className="text-blue-600 font-semibold hover:text-blue-800 transition">
              Track Status
            </Link>
            <Link 
              href="/partner-login" 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition shadow-sm"
            >
              Partner Login
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
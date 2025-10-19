"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Clock } from "lucide-react";

export default function HeaderNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-[#E8E8E8] z-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black tracking-tight">
            LQVE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className="px-4 py-1.5 text-xs font-medium tracking-[0.08em] uppercase bg-[#E8E8E8] hover:bg-[#CCCCCC] transition-colors"
            >
              : HOME :
            </Link>
          </nav>

          {/* Tokyo Time */}
          <div className="hidden md:flex items-center gap-2 text-xs font-medium">
            <Clock className="w-4 h-4" />
            <span>Tokyo, {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo', hour12: false })}</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#E8E8E8]">
            <Link
              href="/"
              className="block px-4 py-2 text-sm font-medium tracking-[0.08em] uppercase hover:bg-[#F5F5F5]"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
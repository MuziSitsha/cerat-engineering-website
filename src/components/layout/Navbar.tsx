"use client";

import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            CERAT PTY LTD
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link href="/services" className="text-gray-300 hover:text-white">Services</Link>
            <Link href="/projects" className="text-gray-300 hover:text-white">Projects</Link>
            <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          </div>
          
          <a 
            href="tel:+27790286454"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center"
          >
            <Phone className="w-4 h-4 mr-2" />
            +27 79 028 6454
          </a>
        </div>
      </div>
    </nav>
  );
}

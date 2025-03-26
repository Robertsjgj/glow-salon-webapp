import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Scissors className="h-8 w-8 text-pink-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Glow & Go</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/services" className="text-gray-700 hover:text-pink-600">Services</Link>
            <Link to="/book" className="text-gray-700 hover:text-pink-600">Book Now</Link>
            <Link to="/login" className="text-gray-700 hover:text-pink-600">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
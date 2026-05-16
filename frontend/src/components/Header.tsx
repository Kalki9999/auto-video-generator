import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film, Menu, X, LogOut } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
            <Film className="w-8 h-8" />
            <span className="hidden sm:inline">VideoGen</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition font-semibold">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition font-semibold">
              Pricing
            </a>
            <a href="#docs" className="text-gray-700 hover:text-blue-600 transition font-semibold">
              Docs
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold">
              Sign In
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
              Get Started Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
              Features
            </a>
            <a href="#pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
              Pricing
            </a>
            <a href="#docs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
              Docs
            </a>
            <div className="space-y-2 pt-3 border-t border-gray-200">
              <button className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold">
                Sign In
              </button>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                Get Started Free
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

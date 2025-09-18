import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import routes from '../../routes';

const Header: React.FC = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const location = useLocation();
const navigation = routes.filter(route => route.visible !== false);

return (
    <header className="bg-white shadow-md sticky top-0 z-50">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
        <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
            <div className="h-8 w-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">武</span>
            </div>
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">武汉印象</span>
            </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
            <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-base font-medium rounded-md transition duration-300 ${
                location.pathname === item.path
                    ? 'text-red-600 bg-red-50 border-b-2 border-red-500'
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
            >
                {item.name}
            </Link>
            ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
            <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600"
            >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
        <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
                <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 text-base font-medium rounded-md transition duration-300 ${
                    location.pathname === item.path
                    ? 'text-red-600 bg-red-50'
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
                >
                {item.name}
                </Link>
            ))}
            </div>
        </div>
        )}
    </nav>
    </header>
);
};

export default Header;
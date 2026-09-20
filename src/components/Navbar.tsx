import { useState } from 'react';
import { Menu, X, Code2, BriefcaseBusiness } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-indigo-500" />
            <span className="text-xl font-bold text-white tracking-wider">
              Didula<span className="text-indigo-500">.dev</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="text-gray-300 hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-indigo-400 transition-colors">Contact</a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/didulaseneth" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Code2 className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <BriefcaseBusiness className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-3">
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-indigo-400">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-indigo-400">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-indigo-400">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-indigo-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;